const { PrismaClient: PrismaClient1 } = require("../../../prisma/db1/client1")
const {
  Transaction,
  PublicKey,
  SystemProgram,
  LAMPORTS_PER_SOL,
  Keypair,
} = require("@solana/web3.js")
const getConnectionInstance = require("../../utils/getConnectionInstance")
const { serverErrorResponse, successResponse } = require("../../utils/response")
const getPrivateKey = require("../../helpers/getPrivateKey")
const uploadTokenMetadataToS3 = require("../../utils/uploadTokenMetadataToS3")
import { TOKEN_2022_PROGRAM_ID, getMintLen, createInitializeMetadataPointerInstruction, createInitializeMintInstruction, TYPE_SIZE, LENGTH_SIZE, ExtensionType } from "@solana/spl-token"
import { createInitializeInstruction, pack } from '@solana/spl-token-metadata';


export function TokenLaunchpad() {
    const { connection } = useConnection();

const prisma1 = new PrismaClient1()

const sendSOLEstimatedNetworkFees = async (req, res) => {
  try {
    const { from_public_key, to_public_key, amount, rpc_type } = req.body

    const [connection, connectionError] = getConnectionInstance(rpc_type)
    if (connectionError) {
      throw Error(connectionError)
    }

    const { blockhash, lastValidBlockHeight } =
      await connection.getLatestBlockhash()

    const transaction = new Transaction({
      blockhash,
      feePayer: new PublicKey(from_public_key),
      lastValidBlockHeight,
    })

    transaction.add(
      SystemProgram.transfer({
        fromPubkey: new PublicKey(from_public_key),
        toPubkey: new PublicKey(to_public_key),
        lamports: amount * LAMPORTS_PER_SOL,
      })
    )

    const estimatedNetworkFeesInLamports = (
      await connection.getFeeForMessage(transaction.compileMessage())
    ).value

    const serializedTransaction = transaction.serialize({
      requireAllSignatures: false,
    })
    const serializedTransactionBase64 = serializedTransaction.toString("base64")

    return successResponse(
      res,
      "Successfully fetched estimated network fees for sending SOL",
      {
        estimated_network_fees:
          estimatedNetworkFeesInLamports / LAMPORTS_PER_SOL,
        serialized_transaction_base64: serializedTransactionBase64,
      }
    )
  } catch (err) {
    console.log(err)
    return serverErrorResponse({ res, devMsg: err.message })
  }
}

const sendSOL = async (req, res) => {
  try {
    const { user_id } = req.user
    const { serialized_transaction_base64, public_key, rpc_type } = req.body
    console.log(serialized_transaction_base64)
    const serializedTransactionBuffer = Buffer.from(
      serialized_transaction_base64,
      "base64"
    )
    const transaction = Transaction.from(serializedTransactionBuffer)
    console.log(transaction)
    //account_id for user's account
    const { account_id } = await prisma1.account.findFirst({
      where: {
        user_id,
        public_key,
      },
      select: {
        account_id: true,
      },
    })

    //fetch private key
    const [privateKeyUInt8, privateKeyUInt8Error] = await getPrivateKey(
      account_id
    )
    if (privateKeyUInt8Error) {
      throw Error(privateKeyUInt8Error)
    }

    //sign transaction
    const userKeypair = Keypair.fromSecretKey(privateKeyUInt8)
    transaction.sign(userKeypair)

    const [connection, connectionError] = getConnectionInstance(rpc_type)
    if (connectionError) {
      throw Error(connectionError)
    }

    const txSignature = await connection.sendTransaction(transaction, [
      userKeypair,
    ])
    console.log(txSignature)
    return successResponse(
      res,
      "Successfully sent the transaction to the blockchain",
      {
        transaction_signature: txSignature,
      }
    )
  } catch (err) {
    console.log(err)
    return serverErrorResponse({ res, devMsg: err.message })
  }
}

const createTokenEstimatedNetworkFees = async (req, res) => {
  try {
    const { token, public_key, rpc_type } = req.body

    const [connection, connectionError] = getConnectionInstance(rpc_type)
    if (connectionError) {
      throw Error(connectionError)
    }

    const mintKeypair = Keypair.generate()
    const richerMetadata = {
      name: token.name,
      symbol: token.symbol,
      description: token.description,
      image: token.image_url,
    }
    if (token.isSocialLinks) {
      richerMetadata.social_links = {
        website: token.website ? token.website : null,
        twitter: token.twitter ? token.twitter : null,
        telegram: token.telegram ? token.telegram : null,
        discord: token.discord ? token.discord : null,
      }
    }
    if (token.isModifyCreator) {
      richerMetadata.creator_info = {
        name: token.creatorName ? token.creatorName : null,
        website: token.creatorWebsite ? token.creatorWebsite : null,
      }
    }

    const [uploadTokenMetadata, uploadTokenMetadataError] =
      await uploadTokenMetadataToS3(richerMetadata)
    if (uploadTokenMetadataError) {
      throw Error(uploadTokenMetadataError)
    }

    const metadata = {
      mint: mintKeypair.publicKey,
      name: token.name,
      symbol: token.symbol,
      uri: uploadTokenMetadata,
      additionalMetadata: [],
    }

    const mintLen = getMintLen([ExtensionType.MetadataPointer])
    const metadataLen = TYPE_SIZE + LENGTH_SIZE + pack(metadata).length

    const lamports = await connection.getMinimumBalanceForRentExemption(mintLen + metadataLen);

    const transaction = new Transaction().add(
            SystemProgram.createAccount({
                fromPubkey: new PublicKey(public_key),
                newAccountPubkey: mintKeypair.publicKey,
                space: mintLen,
                lamports,
                programId: TOKEN_2022_PROGRAM_ID,
            }),
            createInitializeMetadataPointerInstruction(mintKeypair.publicKey, new PublicKey(public_key), mintKeypair.publicKey, TOKEN_2022_PROGRAM_ID),
            createInitializeMintInstruction(mintKeypair.publicKey, token.decimals, new PublicKey(public_key), null, TOKEN_2022_PROGRAM_ID),
            createInitializeInstruction({
                programId: TOKEN_2022_PROGRAM_ID,
                mint: mintKeypair.publicKey,
                metadata: mintKeypair.publicKey,
                name: metadata.name,
                symbol: metadata.symbol,
                uri: metadata.uri,
                mintAuthority: wallet.publicKey,
                updateAuthority: wallet.publicKey,
            }),
        );

  } catch (err) {
    console.log(err)
    return serverErrorResponse({ res, devMsg: err.message })
  }
}

const transactionController = {
  sendSOLEstimatedNetworkFees,
  sendSOL,
}

module.exports = transactionController

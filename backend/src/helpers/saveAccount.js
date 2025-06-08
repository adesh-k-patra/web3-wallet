const { PrismaClient: PrismaClient1 } = require("../../prisma/db1/client1")

const prisma1 = new PrismaClient1()

const saveAccount = async ({
  user_id,
  public_key,
  account_name,
  account_profile_url,
  is_primary,
}) => {
  try {
    //check if any account exist for the user with same public key
    const isAccountExist = await prisma1.account.findFirst({
      where: {
        user_id,
        public_key,
      },
    })
    if (isAccountExist) {
      throw Error("Account already exists")
    }

    //save account
    const account = await prisma1.account.create({
      data: {
        user_id,
        public_key,
        account_name,
        account_profile_url,
        is_primary,
      },
    })
    return [account, null]
  } catch (error) {
    console.log(error)
    return [null, error]
  }
}

module.exports = saveAccount

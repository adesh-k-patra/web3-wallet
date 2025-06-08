const ENUMS = {
  LOCAL_STORAGE_VARIABLES: {
    ACCESS_TOKEN: "accessToken",
    LOGGED_USER: "loggedUser",
    ACCOUNT_STATE: `${localStorage.getItem("loggedUser")}_lastAccountState`,
  },
  RPC_TYPE: {
    MAINNET: "Mainnet",
    DEVNET: "Devnet",
  },
}

export default ENUMS

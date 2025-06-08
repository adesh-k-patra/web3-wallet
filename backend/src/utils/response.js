const ResponseStatus = {
  SUCCESS: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  PAYMENT_REQUIRED: 402,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  UNPROCESSABLE_ENTITY: 422,
  ACCESS_DENIED: 440,
  INTERNAL_ERROR: 500,
}

const successResponse = (res, msg, data) => {
  if (data) {
    res.status(ResponseStatus.SUCCESS).send({
      msg,
      data,
    })
    return
  }
  res.status(ResponseStatus.SUCCESS).send({
    msg,
  })
}

const createdSuccessResponse = (res, msg, data) => {
  res.status(ResponseStatus.CREATED).send({
    msg,
    data,
  })
}

const notFoundResponse = ({
  res,
  devMsg = "Not found response",
  clientMsg = "Please try again later or contact support.",
}) => {
  console.log(`NOT_FOUND_RESPONSE: ${devMsg}`)
  res.status(ResponseStatus.NOT_FOUND).send({
    msg: clientMsg,
    devMsg,
  })
}

const forbiddenResponse = (res, msg = "Forbidden") => {
  res.status(ResponseStatus.FORBIDDEN).send({
    msg,
  })
}

const unauthorizedResponse = (res, msg = "Unauthorized") => {
  res.status(ResponseStatus.UNAUTHORIZED).send({
    msg,
  })
}

const badRequestResponse = ({
  res,
  devMsg = "Bad request response",
  clientMsg = "Please try again later or contact support.",
}) => {
  console.log(`BAD_REQUEST_RESPONSE: ${devMsg}`)
  res.status(ResponseStatus.BAD_REQUEST).send({
    msg: clientMsg,
    devMsg,
  })
}

const serverErrorResponse = ({
  res,
  devMsg = "Internal server error",
  clientMsg = "Please try again later or contact support.",
}) => {
  console.log(`SERVER_ERROR: ${devMsg}`)
  res.status(ResponseStatus.INTERNAL_ERROR).send({
    msg: clientMsg,
    devMsg,
  })
}

const accessDeniedResponse = (res, msg = "Access denied", data) => {
  res.status(ResponseStatus.ACCESS_DENIED).send({
    msg,
    data,
  })
}

const unprocessableEntityResponse = ({
  res,
  devMsg = "Unprocessable entity",
  clientMsg = "Please try again later or contact support.",
}) => {
  console.log(`UNPROCESSABLE_ENTITY: ${devMsg}`)
  res.status(ResponseStatus.UNPROCESSABLE_ENTITY).send({
    msg: clientMsg,
    devMsg,
  })
}

const paymentRequiredResponse = (res, msg = "Payment required") => {
  res.status(ResponseStatus.PAYMENT_REQUIRED).send({
    msg,
  })
}

module.exports = {
  ResponseStatus,
  successResponse,
  createdSuccessResponse,
  notFoundResponse,
  unauthorizedResponse,
  badRequestResponse,
  forbiddenResponse,
  serverErrorResponse,
  accessDeniedResponse,
  unprocessableEntityResponse,
  paymentRequiredResponse,
}

var jwt = require('jsonwebtoken');


const TOKEN_KEY = 'jubelang-token'
export const SECRET_KEY = "jubelang"


// TOKEN

export function setToken(token) {
  localStorage.setItem(TOKEN_KEY, token)
}

export function getToken() {
  let jwtToken = localStorage.getItem(TOKEN_KEY)
  if (jwtToken) {
    let token = jwt.verify(jwtToken, SECRET_KEY)
    return token.token
  }
  else return ''
}

export function removeToken() {
  localStorage.removeItem(TOKEN_KEY)
}


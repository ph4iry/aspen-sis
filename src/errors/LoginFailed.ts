export default class LoginFailedError extends Error {
  constructor() {
    super('Login failed.');
  }
}
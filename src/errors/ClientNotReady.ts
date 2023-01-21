export default class ClientNotReadyError extends Error {
  constructor(details: string) {
    super(`The server is not ready to perform this action.\n\nTip: ${details}`);
  }
}
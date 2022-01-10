export default class RouteError {
  public statusCode: number;
  public message: string;
  constructor(message: string, statusCode: number) {
    this.statusCode = statusCode;
    this.message = message;
  }
}

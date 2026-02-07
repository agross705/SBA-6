/****************************************************
 * Enum of supported error categories
 ****************************************************/
export enum ErrorType {
  API = "API_ERROR",
  VALIDATION = "VALIDATION_ERROR",
  UNKNOWN = "UNKNOWN_ERROR",
}

/****************************************************
 * Custom application error class
 ****************************************************/
export class AppError extends Error {
  public type: ErrorType;
  public statusCode?: number;

  constructor(
    message: string,
    type: ErrorType = ErrorType.UNKNOWN,
    statusCode?: number
  ) {
    super(message);
    this.name = "AppError";
    this.type = type;
    this.statusCode = statusCode;
  }
}

/**************************************************************
 * Handle unknown errors and converts into AppError instances
 **************************************************************/
export function normalizeError(error: unknown): AppError {
  if (error instanceof AppError) {
    return error;
  }

  if (error instanceof Error) {
    return new AppError(error.message, ErrorType.UNKNOWN);
  }

  return new AppError("An unexpected error occurred", ErrorType.UNKNOWN);
}

/****************************************************
 * Log errors in a consistent, readable format
 ****************************************************/
export function logError(error: AppError): void {
  console.error("Application Error");
  console.error("*******************");
  console.error(`Type: ${error.type}`);
  console.error(`Message: ${error.message}`);

  if (error.statusCode) {
    console.error(`Status Code: ${error.statusCode}`);
  }
}

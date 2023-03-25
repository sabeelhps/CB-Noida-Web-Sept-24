import ResponseStatus from './statusCode';

export class NotFoundError extends Error {
  constructor(message = 'Not Found') {
    super(message);
    this.statusCode = ResponseStatus.NOT_FOUND;
  }
}

export class InteralServerError extends Error {
  constructor(message = 'Internal Error') {
    super(message);
    this.statusCode = ResponseStatus.INTERNAL_ERROR;
  }
}

export class BadRequestError extends Error {
  constructor(message = 'Bad Request') {
    super(message);
    this.statusCode = ResponseStatus.BAD_REQUEST;
  }
}

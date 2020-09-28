import logger from '../core/Logger';
import { Result } from './Result';
import { UseCaseError } from './UseCaseError';

export namespace AppError {
	export class UnexpectedError extends Result<UseCaseError> {
		public constructor(err: any) {
			super(false, {
				message: 'An unexpected error occured.',
				error: err,
			} as UseCaseError);
			logger.error(`[AppError]: An unexpected error occured`, err);
		}

		public static create(err: any): UnexpectedError {
			return new UnexpectedError(err);
		}
	}
}

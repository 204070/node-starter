import { Result } from "./Result";
import { UseCaseError } from "./UseCaseError";

export namespace AppError {
	export class UnexpectedError extends Result<UseCaseError> {
		public constructor (err:any) {
			super(false, {
				message: 'An unexpected error occured.',
				error: err
			} as UseCaseError)
			console.log(`[AppError]: An unexpected error occured`)
			console.error(err)
		}

		public static create(err: any): UnexpectedError {
			return new UnexpectedError(err)
		}
	}
}
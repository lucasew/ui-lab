/**
 * Centralized error reporting utility.
 * All unexpected errors must be funneled through this function.
 */
export function reportError(error: unknown, context?: Record<string, unknown>): void {
	// If Sentry were set up, we would capture the exception here.
	// For now, we log the error with context to the console.
	const errorDetails = error instanceof Error
		? { message: error.message, stack: error.stack, name: error.name }
		: { message: String(error) };

	console.error('[ErrorReporter]', errorDetails, context ? context : '');
}

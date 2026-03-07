/**
 * Centralized error reporting function.
 * Ensures all unhandled or expectedly caught errors have a single entry point
 * for consistent logging and monitoring (e.g., Sentry).
 */
export function reportError(error: unknown, context?: Record<string, unknown>) {
  // Add backend reporting integration here (like Sentry) if applicable
  console.error("Reported Error:", error, context ? "Context:" : "", context || "");
}

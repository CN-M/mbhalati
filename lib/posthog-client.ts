import { type CaptureOptions, type Properties, posthog } from "posthog-js";

// Multi-tenant note: `client_id` and `app` are NOT merged in here. They're
// registered globally in `instrumentation-client.ts` via `posthog.register`
// so every event — including direct `posthog.capture(...)` calls scattered
// across components — gets the same tenant tag automatically. Filtering
// then happens server-side in HogQL.

type PHCapture = {
	eventName: string;
	properties?: Properties | null;
	options?: CaptureOptions;
};

export const clientPHCapture = ({
	eventName,
	properties,
	options,
}: PHCapture) => {
	posthog.capture(eventName, properties ?? undefined, options);
};

type PHcaptureException = {
	err: unknown;
	errorMessage: string;
};

export const clientPHcaptureException = ({
	err,
	errorMessage,
}: PHcaptureException) => {
	posthog.captureException(
		err instanceof Error ? err : new Error(errorMessage),
	);
};

import { PostHog } from "posthog-node";

// Server-side PostHog helper for capturing events from route handlers and
// server components. Designed to be reusable across client sites — every
// site we ship reads its own `NEXT_PUBLIC_POSTHOG_CLIENT_ID` from env so a
// single shared PostHog project (free-tier limit) can host many tenants
// without their data bleeding across the dashboard.

const APP_LABEL = "console";
const DEFAULT_HOST = "https://eu.i.posthog.com";
const DEFAULT_CLIENT_ID = "cn-mbhalati";

let posthogClient: PostHog | null = null;

// Returns null when the project token is missing — callers should treat
// analytics as best-effort and never crash on capture failures.
export function getPostHogClient(): PostHog | null {
	const token = process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN;
	if (!token) {
		console.warn(
			"[posthog] NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN missing — server captures are disabled",
		);
		return null;
	}
	if (!posthogClient) {
		posthogClient = new PostHog(token, {
			host: process.env.NEXT_PUBLIC_POSTHOG_HOST ?? DEFAULT_HOST,
			flushAt: 1,
			flushInterval: 0,
		});
	}
	return posthogClient;
}

function getClientId() {
	return process.env.NEXT_PUBLIC_POSTHOG_CLIENT_ID ?? DEFAULT_CLIENT_ID;
}

type PHCapture = {
	event: string;
	distinctId: string;
	properties?: Record<string, unknown> | null;
};

// Captures + flushes in one call — fine for serverless because each
// invocation typically captures one event then exits. The shared singleton
// only matters within a single warm function instance.
export const serverPHCapture = async ({
	distinctId,
	event,
	properties,
}: PHCapture) => {
	const ph = getPostHogClient();
	if (!ph) return;
	ph.capture({
		distinctId,
		event,
		properties: {
			client_id: getClientId(),
			app: APP_LABEL,
			...properties,
		},
	});
	await ph.shutdown();
};


type PHIdentify = {
	distinctId: string;
	email?: string;
	firstName?: string;
	lastName?: string;
	properties?: Record<string, unknown>;
};

export const serverPHIdentify = async ({
	distinctId,
	email,
	firstName,
	lastName,
	properties,
}: PHIdentify) => {
	const ph = getPostHogClient();
	if (!ph) return;

	ph.identify({
		distinctId,
		properties: {
			email,
			name:
				firstName || lastName
					? `${firstName ?? ""} ${lastName ?? ""}`.trim()
					: undefined,
			client_id: getClientId(),
			app: APP_LABEL,
			...properties,
		},
	});

	await ph.shutdown();
};
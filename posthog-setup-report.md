<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into your Next.js 15 personal site. Here's a summary of everything that was set up:

**Client-side initialization** — A `Providers` client component was added to `app/providers.tsx` and wired into `app/layout.tsx` to initialize PostHog for every page (compatible with Next.js 15.0.3). A reverse proxy was configured in `next.config.mjs` to route PostHog requests through `/ingest`, reducing tracking-blocker interference.

**Server-side client** — `lib/posthog-server.ts` provides a factory function for creating PostHog Node.js instances in server actions and API routes, with `flushAt: 1` and `flushInterval: 0` for immediate event delivery.

**User identification** — Server-side `identify()` is called in the Google OAuth callback (`app/(main)/login/google/callback/route.ts`) with the user's ID, email, and name. Client-side `identify()` is called in a `PostHogIdentify` component rendered on the guestbook page when a session is active, linking client-side events to the same person. `posthog.reset()` is called on logout.

**Error tracking** — `capture_exceptions: true` is set in `posthog.init` to capture unhandled exceptions automatically. `posthog.captureException()` is called explicitly for contact form errors.

**14 events** were instrumented across 7 files:

| Event | Description | File |
|-------|-------------|------|
| `contact_form_submitted` | User successfully submitted the contact form | `components/ContactForm.tsx` |
| `contact_form_failed` | Contact form submission failed (client-side error) | `components/ContactForm.tsx` |
| `contact_message_sent` | Server successfully sent the contact email | `app/api/contact/route.ts` |
| `contact_message_send_failed` | Server failed to send the contact email | `app/api/contact/route.ts` |
| `login_initiated` | User clicked "Login with Google" | `components/Buttons.tsx` |
| `user_signed_up` | New user completed Google OAuth and created an account | `app/(main)/login/google/callback/route.ts` |
| `user_logged_in` | Existing user completed Google OAuth and started a session | `app/(main)/login/google/callback/route.ts` |
| `user_logged_out` | User clicked logout and session was invalidated | `components/LogoutBtn.tsx` |
| `guestbook_post_submitted` | Authenticated user posted a guestbook message | `app/(main)/guestbook/actions.ts` |
| `guestbook_post_liked` | User liked a guestbook post | `app/(main)/guestbook/actions.ts` |
| `guestbook_post_unliked` | User unliked a guestbook post | `app/(main)/guestbook/actions.ts` |
| `guestbook_post_deleted` | User deleted their own guestbook post | `app/(main)/guestbook/actions.ts` |
| `podcast_episode_play_clicked` | User clicked the Play Episode button (links to Spotify) | `components/PodcastPlayButton.tsx` |
| `podcast_subscribe_clicked` | User clicked the podcast Subscribe button | `components/Buttons.tsx` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- **Dashboard — Analytics basics**: https://eu.posthog.com/project/80031/dashboard/656111
- **Login & Signup Funnel**: https://eu.posthog.com/project/80031/insights/FPWXNY6r
- **New Signups Over Time**: https://eu.posthog.com/project/80031/insights/SCqMGi6o
- **Contact Form Conversion**: https://eu.posthog.com/project/80031/insights/lLHXLmK7
- **Guestbook Engagement**: https://eu.posthog.com/project/80031/insights/86StTsqz
- **Podcast Engagement**: https://eu.posthog.com/project/80031/insights/4dWmkhlo

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>

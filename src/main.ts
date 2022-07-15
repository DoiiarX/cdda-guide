import App from "./App.svelte";
import * as Sentry from "@sentry/browser";
import { Integrations } from "@sentry/tracing";
import "@fontsource/unifont";
import { registerSW } from "virtual:pwa-register";

function last(n: number, str: string): string {
  return str.substring(str.length - n);
}

if (location.hostname !== "localhost")
  Sentry.init({
    dsn: "https://e7e132477a2844118b8f6d045a507e10@o318291.ingest.sentry.io/5665093",
    integrations: [new Integrations.BrowserTracing()],
    tracesSampleRate: 0.2,
    ...(process.env.GITHUB_SHA && {
      release: `cdda-guide@${last(8, process.env.GITHUB_SHA)}`,
    }),
  });

registerSW({});

export default new App({
  target: document.body,
});

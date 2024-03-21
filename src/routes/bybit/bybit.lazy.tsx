import { createLazyFileRoute } from "@tanstack/react-router";

const APIKEY = "wbfV3OWYdemUg5gUKh";
const APISECRET = "Diypb0bZUxu8R8JNdoOJ6r9Jy5BwlmmWt0Ah";

export const Route = createLazyFileRoute("/bybit/bybit")({
  component: () => <div>Hello /bybit!</div>,
});

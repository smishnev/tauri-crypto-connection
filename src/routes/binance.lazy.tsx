import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/binance")({
  component: () => <div>Hello /binance!</div>,
});

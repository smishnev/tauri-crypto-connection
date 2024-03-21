import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/binance/binance")({
  component: () => <div>Hello /binance!</div>,
});

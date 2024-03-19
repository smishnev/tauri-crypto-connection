import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/bybit')({
  component: () => <div>Hello /bybit!</div>
})
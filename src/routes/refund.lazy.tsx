import * as React from 'react'
import { createLazyFileRoute } from '@tanstack/react-router'
import { RefundPolicy } from '@/pages/policy/refund'

export const Route = createLazyFileRoute('/refund')({
  component: RouteComponent,
})

function RouteComponent() {
  return <RefundPolicy/>
}

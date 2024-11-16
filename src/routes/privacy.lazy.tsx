// import * as React from 'react'
import { createLazyFileRoute } from '@tanstack/react-router'

import { PrivacyPolicy } from '@/pages/policy/Privacy'

export const Route = createLazyFileRoute('/privacy')({
  component: RouteComponent,
})

function RouteComponent() {
  return <PrivacyPolicy />
}

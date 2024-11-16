import * as React from 'react'
import { createLazyFileRoute } from '@tanstack/react-router'

import { TermsPolicy } from '@/pages/policy/Terms'

export const Route = createLazyFileRoute('/terms')({
  component: RouteComponent,
})

function RouteComponent() {
  return <TermsPolicy/>
}

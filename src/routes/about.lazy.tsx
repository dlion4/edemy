// import * as React from 'react'
import { createLazyFileRoute } from '@tanstack/react-router'

import { About } from '@/pages/about/About'

export const Route = createLazyFileRoute('/about')({
  component: RouteComponent,
})

function RouteComponent() {
  return <About/>
}

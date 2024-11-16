// import * as React from 'react'
import { createLazyFileRoute } from '@tanstack/react-router'
import { Tutor } from '@/pages/tutor/Tutor'

export const Route = createLazyFileRoute('/tutor')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Tutor/>
}

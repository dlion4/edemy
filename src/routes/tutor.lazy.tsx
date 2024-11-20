// import * as React from 'react'
import { createLazyFileRoute } from '@tanstack/react-router'
import { TutorPage } from '@/pages/tutor/Tutor'

export const Route = createLazyFileRoute('/tutor')({
  component: RouteComponent,
})

function RouteComponent() {
  return <TutorPage/>
}

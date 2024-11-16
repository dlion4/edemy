// import * as React from 'react'
import { createLazyFileRoute } from '@tanstack/react-router'
import { Student } from '@/pages/student/Student'


export const Route = createLazyFileRoute('/student')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Student/>
}

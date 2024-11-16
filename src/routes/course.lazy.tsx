// import * as React from 'react'
import { createLazyFileRoute } from '@tanstack/react-router'
import { Course } from '@/pages/courses/Course'

export const Route = createLazyFileRoute('/course')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Course/>
}

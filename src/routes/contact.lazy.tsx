// import * as React from 'react'
import { createLazyFileRoute } from '@tanstack/react-router'
import { Contact } from '@/pages/contact/Contact'

export const Route = createLazyFileRoute('/contact')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Contact />
}

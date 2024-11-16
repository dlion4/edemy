// import * as React from 'react'
import { createLazyFileRoute } from '@tanstack/react-router'
import { Faq } from '@/pages/Faq/Faq'

export const Route = createLazyFileRoute('/faq')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Faq/>
}

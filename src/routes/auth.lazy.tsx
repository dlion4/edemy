// import * as React from 'react'
import { Auth } from '@/pages/auth/Auth'
import { createFileRoute, createLazyFileRoute } from '@tanstack/react-router'



export const Route = createLazyFileRoute('/auth')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Auth/>
}

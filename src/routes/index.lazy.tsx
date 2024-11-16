// import * as React from 'react'
import { createLazyFileRoute } from '@tanstack/react-router'
import { Home } from '@/pages/home/Index'

export const Route = createLazyFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Home/>
  
}


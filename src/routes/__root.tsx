import { Footer } from '@/components/navbar/footer/Footer'
import { Navbar } from '@/components/navbar/Navbar'
import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'


export const Route = createRootRoute({
  component: () => (
    <>
     
        
      <Navbar/>
      <Outlet />
      <Footer/>
      <TanStackRouterDevtools />
    </>
  ),
})
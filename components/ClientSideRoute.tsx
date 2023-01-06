'use client'

import Link from 'next/link'

interface ClientSideRouteProps {
  children: React.ReactNode
  route: string
}

function ClientSideRoute({ children, route }: ClientSideRouteProps) {
  return <Link href={route}>{children}</Link>
}

export default ClientSideRoute

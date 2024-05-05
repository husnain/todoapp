import React from 'react'
import Link from 'next/link'
import Login from '@/components/component/login'


export default function Home() {
  return (
    <main>
      <Link href="/dashboard">Todos</Link>
      <Login />
    </main>
  );
}

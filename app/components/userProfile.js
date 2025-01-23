'use client'

import { useSession, signOut } from 'next-auth/react'
import Link from 'next/link'

export function UserProfile() {
  const { data: session } = useSession()

  if (!session) return <p>You are not signed in</p>

  return (
    <div>
      <h2>Welcome, {session.user.name}</h2>
      <p>Email: {session.user.email}</p>
      <button onClick={() => signOut()}>Sign out</button>


      <Link legacyBehavior href="/auth/signin">
        <button 
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Sign Out
        </button>
        </Link>

    </div>
  )
}

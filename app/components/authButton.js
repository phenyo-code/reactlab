'use client'

import { signIn } from 'next-auth/react'

export function AuthButton() {
  return (
    <div>
      <button onClick={() => signIn('github')}>Sign in with GitHub</button>
      <button onClick={() => signIn('google')}>Sign in with Google</button>
    </div>
  )
}

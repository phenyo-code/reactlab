'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Callback() {
  const router = useRouter()

  useEffect(() => {
    // Redirect to the homepage or another route after authentication
    router.push('/')
  }, [router])

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Authenticating...</h1>
      <p>Please wait while we log you in.</p>
    </div>
  )
}

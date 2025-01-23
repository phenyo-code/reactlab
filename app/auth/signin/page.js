'use client';

import { signIn } from 'next-auth/react';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function SignIn() {
  const router = useRouter();

  useEffect(() => {
    // Ensures that the component has mounted and the router is available
  }, []);

  const handleGoogleSignIn = async () => {
    const result = await signIn('google', { redirect: false });
    if (result?.ok) {
      router.push('/home');  // Navigate to the home page after successful sign-in
    }
  };

  const handleGithubSignIn = async () => {
    const result = await signIn('github', { redirect: false });
    if (result?.ok) {
      router.push('/home');  // Navigate to the home page after successful sign-in
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
        <h1 className="text-2xl font-bold text-center text-gray-800">Sign In</h1>
        <p className="text-center text-gray-600">
          Choose a method to sign in and save your progress.
        </p>
        <div className="flex flex-col space-y-4">
          {/* Google Sign-In Button */}
          <button
            onClick={handleGoogleSignIn}
            className="flex items-center justify-center w-full px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
          >
            <svg
              className="w-5 h-5 mr-2 bg-white "
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
            >
              <path
                fill="#EA4335"
                d="M24 9.5c3.69 0 6.74 1.46 8.78 3.85l6.46-6.46C34.3 3.3 29.48 1.5 24 1.5 14.85 1.5 7.13 7.28 3.68 15.03l7.65 5.91C12.54 14.08 17.74 9.5 24 9.5z"
              />
              <path
                fill="#34A853"
                d="M24 46.5c5.09 0 9.47-1.64 12.61-4.48l-7.17-5.83c-1.46.99-3.32 1.58-5.44 1.58-4.19 0-7.75-2.83-9.03-6.63l-7.76 5.99C10.43 41.46 16.84 46.5 24 46.5z"
              />
              <path
                fill="#4A90E2"
                d="M44.5 24c0-1.48-.16-2.91-.46-4.29H24v8.38h11.48c-.6 3.16-2.47 5.83-5.2 7.66l7.18 5.83C42.4 37.07 44.5 30.97 44.5 24z"
              />
              <path
                fill="#FBBC05"
                d="M3.68 15.03C2.63 17.2 2 19.54 2 22c0 2.48.62 4.82 1.68 6.96l7.76-5.99C11.11 21.33 11 20.68 11 20c0-.68.11-1.33.32-1.97L3.68 15.03z"
              />
            </svg>
            Sign in with Google
          </button>

          {/* GitHub Sign-In Button */}
          <button
            onClick={handleGithubSignIn}
            className="flex items-center justify-center w-full px-4 py-2 text-white bg-gray-800 rounded hover:bg-gray-900"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.13 0 0 .67-.21 2.2.82a7.66 7.66 0 012.01-.27c.68.01 1.36.09 2.01.27 1.53-1.04 2.2-.82 2.2-.82.44 1.11.16 1.93.08 2.13.51.56.82 1.28.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
            </svg>
            Sign in with GitHub
          </button>
        </div>
      </div>
    </div>
  );
}

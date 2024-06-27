// components/GoogleSignInButton.js
"use client";
import { useEffect } from 'react';
import { auth, provider } from '../firebaseConfig';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const GoogleSignInButton = () => {
  useEffect(() => {
    // Ensure Firebase is only used in client-side
    if (typeof window === 'undefined') {
      return;
    }

    // Add any additional client-side logic here
  }, []);

  const handleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      console.log('User:', user);
      console.log('Token:', token);
    } catch (error) {
      console.error('Error during sign-in:', error.message);
    }
  };

  return (
    <button onClick={handleSignIn} className="bg-gray-100 p-2 rounded-md shadow">
      <img src="favicon.ico" alt="Google" className="w-6 h-6"/>
    </button>
  );
};

export default GoogleSignInButton;

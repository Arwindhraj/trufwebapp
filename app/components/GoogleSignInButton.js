// app/components/GoogleSignInButton.js
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
  
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error('Error during sign-out:', error.message);
    }
  };

  return (
    <main>
      <button onClick={handleSignIn} className="bg-gray-100 p-2 rounded-md shadow">
        <img src="favicon.ico" alt="Google" className="w-6 h-6"/>
      </button>
      <button onClick={handleSignIn} className="bg-gray-100 p-2 rounded-md shadow">
        <img src="a.ico" alt="Google" className="w-6 h-6"/>
      </button>
    </main>
  );
};

export default GoogleSignInButton;

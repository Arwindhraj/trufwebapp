// app/components/PhoneInput.js
import { useState } from 'react';
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { auth } from '../firebaseConfig';

const PhoneInput = ({ onVerify }) => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSendOTP = async () => {
    if (!auth) return;

    // Initialize RecaptchaVerifier only on the client side
    const recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
      'size': 'invisible',
      'callback': (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        sendOTP();
      }
    }, auth);

    try {
      const confirmationResult = await signInWithPhoneNumber(auth, phoneNumber, recaptchaVerifier);
      onVerify(confirmationResult);
    } catch (error) {
      console.error('Error sending OTP:', error.message);
      alert('Failed to send OTP. Please try again.');
    }
  };

  return (
    <div>
      <input
        type="tel"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        placeholder="+1234567890"
        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      />
      <button onClick={handleSendOTP} className="mt-2 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-md shadow">
        Send OTP
      </button>
      <div id="recaptcha-container"></div>
    </div>
  );
};

export default PhoneInput;

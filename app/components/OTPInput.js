// app/components/OTPInput.js
"use client";
import { useState } from 'react';

const OTPInput = ({ confirmationResult }) => {
  const [otp, setOTP] = useState('');

  const handleVerifyOTP = async () => {
    try {
      await confirmationResult.confirm(otp);
      alert('OTP verified successfully!');
    } catch (error) {
      console.error('Error verifying OTP:', error.message);
      alert('Failed to verify OTP. Please try again.');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={otp}
        onChange={(e) => setOTP(e.target.value)}
        placeholder="Enter OTP"
        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      />
      <button onClick={handleVerifyOTP} className="mt-2 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-md shadow">
        Verify OTP
      </button>
    </div>
  );
};

export default OTPInput;

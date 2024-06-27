// app/otp/page.tsx
"use client";
// app/otp/page.tsx
import React, { useState } from 'react';
import dynamic from 'next/dynamic';

const PhoneInput = dynamic(() => import('../components/PhoneInput'), { ssr: false });
const OTPInput = dynamic(() => import('../components/OTPInput'), { ssr: false });

const OTPPage = () => {
  const [confirmationResult, setConfirmationResult] = useState(null);

  const handleVerification = (confirmationResult: React.SetStateAction<null>) => {
    setConfirmationResult(confirmationResult);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-white p-8 rounded shadow-md w-80">
        <h2 className="text-2xl font-bold mb-6 text-center">Phone OTP Login</h2>
        {confirmationResult ? (
          <OTPInput confirmationResult={confirmationResult} />
        ) : (
          <PhoneInput onVerify={handleVerification} />
        )}
      </div>
    </div>
  );
};

export default OTPPage;

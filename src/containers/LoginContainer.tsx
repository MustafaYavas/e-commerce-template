'use client';
import LoginForm from '@/components/login/LoginForm';
import LoginSidePanel from '@/components/login/LoginSidePanel';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

const LoginContainer = () => {
  const [isLogin, setIsLogin] = useState(true);
  const session = useSession();
  const router = useRouter();

  if (session?.status === 'authenticated') router.replace('/');

  const handleChangeToLogin = () => {
    setIsLogin(true);
  };

  const handleChangeToSignup = () => {
    setIsLogin(false);
  };

  return (
    <div className="h-screen overflow-hidden flex justify-between items-center">
      <LoginSidePanel
        isLogin={isLogin}
        onChangeLogin={handleChangeToLogin}
        onChangeSignup={handleChangeToSignup}
      />
      <LoginForm loginStatus={isLogin} onChangeLogin={handleChangeToLogin} />
    </div>
  );
};

export default LoginContainer;

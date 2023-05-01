'use client';
import LoginForm from '@/components/login/LoginForm';
import LoginRightPanel from '@/components/login/LoginRightPanel';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

const LoginContainer = () => {
  const [isLogin, setIsLogin] = useState(true);
  const session = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session?.status === 'authenticated') router.replace('/');
  }, []);

  const handleChangeToLogin = () => {
    setIsLogin(true);
  };

  const handleChangeToSignup = () => {
    setIsLogin(false);
  };

  return (
    <div className="h-screen overflow-hidden flex justify-between items-center">
      <LoginForm />
      <LoginRightPanel
        isLogin={isLogin}
        onChangeLogin={handleChangeToLogin}
        onChangeSignup={handleChangeToSignup}
      />
    </div>
  );
};

export default LoginContainer;

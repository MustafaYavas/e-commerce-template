'use client';
import { useState } from 'react';
import { signIn, useSession } from 'next-auth/react';
import { ToastContainer } from 'react-toastify';
import { useRouter } from 'next/navigation';

import ImageWithText from '@/components/imageWithText/ImageWithText';
import Input from '@/components/input/Input';
import Button from '@/components/button/Button';
import { setError } from '@/helpers/error';
import Loading from '@/components/loading/Loading';
import Icon from '@/components/Icon/Icon';

const page = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const session = useSession();

  if (session?.status === 'authenticated') router.replace('/');

  const imageOverElement = () => {
    return (
      <div className="flex flex-col justify-between items-center gap-40">
        <div className="w-full flex flex-col justify-center items-center gap-5 font-medium">
          <h4 className="text-4xl tracking-wider">
            {isLogin ? 'New here?' : 'Already member?'}
          </h4>
          <p className="w-3/4 text-center text-lg tracking-wide">
            {isLogin
              ? 'Sign up and decorate your home with the furnitures of your dreams!'
              : 'Login and discover amazing furnitures!'}
          </p>
        </div>
        <button
          className="border-2 border-white px-5 py-2 hover:bg-white 
        hover:text-black rounded text-lg font-medium w-1/2"
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin ? 'SIGN UP' : 'LOGIN'}
        </button>
      </div>
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (email === '' || password === '' || (!isLogin && name === '')) {
      setError('Inputs can not be left blank!', 3000);
      return;
    }
    if (password.length < 5) {
      setError('Password must be at least 5 letters!', 3000);
      return;
    }

    setIsLoading(true);
    if (!isLogin) {
      try {
        await fetch('/api/signup', {
          method: 'POST',
          body: JSON.stringify({ name, email, password }),
        });
        router.replace('/');
      } catch (error) {
        throw new Error('Something went wrong while signing up!');
      }
      setIsLoading(false);
    } else {
      try {
        signIn('credentials', {
          redirect: false,
          email,
          password,
        })
          .then((res) => {
            if (res!.ok) router.replace('/');
            else setError(res!.error!, 5000);
          })
          .catch((error) => {
            throw new Error(error);
          })
          .finally(() => {
            setIsLoading(false);
          });
      } catch (error) {
        throw new Error('Something went wrong while logging in!');
      }
    }
  };

  return (
    <div className="h-screen overflow-hidden flex justify-between items-center">
      <div className="w-full md:w-3/5 h-full flex flex-col justify-center items-center">
        <form
          className="flex flex-col justify-center items-center gap-10 w-full"
          onSubmit={handleSubmit}
        >
          <h4 className="text-xl md:text-4xl mb-10">
            {isLogin ? 'Welcome Back' : 'Signup'}
          </h4>
          {!isLogin && (
            <Input
              labelText="Name"
              type="text"
              placeholder="Your name..."
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          )}
          <Input
            labelText="Email"
            type="email"
            placeholder="Your email address..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            labelText="Password"
            type="password"
            placeholder="Your password..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <p className="cursor-pointer text-zinc-950 hover:text-zinc-800">
            {isLogin ? (
              <span onClick={() => setIsLogin(false)}>New here?</span>
            ) : (
              <span onClick={() => setIsLogin(true)}>Already member?</span>
            )}
          </p>
          <Button
            isFill={true}
            text={<span>GO</span>}
            className="text-lg font-medium w-1/2 px-5 py-2 rounded"
          />
        </form>

        <div className="w-full text-center mt-10">
          <Button
            isFill={false}
            text={
              <span className="flex justify-center items-center gap-3">
                <Icon name="FcGoogle" />
                LOGIN WITH GOOGLE
              </span>
            }
            onClick={() => signIn('google')}
            className="text-lg font-medium w-1/2 px-5 py-2 rounded border border-black"
          />
        </div>
      </div>

      <div className="w-2/5 relative h-full hidden md:flex justify-center items-center text-white ">
        <ImageWithText
          image="/images/login.jpg"
          textComp={imageOverElement()}
          isFill={true}
          className="opacity-40"
        />
      </div>

      {isLoading && <Loading />}
      <ToastContainer />
    </div>
  );
};

export default page;
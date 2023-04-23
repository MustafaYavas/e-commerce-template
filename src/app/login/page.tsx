'use client';
import { useState } from 'react';
import ImageWithText from '@/components/imageWithText/ImageWithText';
import Input from '@/components/input/Input';
import Button from '@/components/button/Button';

const page = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
          <Button
            text="GO"
            className="text-lg font-medium w-1/2 px-5 py-2 rounded"
          />
        </form>
        <p className="cursor-pointer mt-5 text-zinc-950 hover:text-zinc-800">
          {isLogin ? (
            <span onClick={() => setIsLogin(false)}>New here?</span>
          ) : (
            <span onClick={() => setIsLogin(true)}>Already member?</span>
          )}
        </p>
      </div>

      <div className="w-2/5 relative h-full hidden md:flex justify-center items-center text-white ">
        <ImageWithText
          image="/images/login.jpg"
          textComp={imageOverElement()}
          isFill={true}
          className="opacity-40"
        />
      </div>
    </div>
  );
};

export default page;

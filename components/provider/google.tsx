'use client';

import Image from 'next/image';
import { Button } from '../ui/button';
import google from '@/public/assets/svg/google.svg';
import { signIn } from 'next-auth/react';

export const GoogleSignButton = () => {
  return (
    <Button
      onClick={() => signIn('google', { redirect: true, callbackUrl: '/' })}
      variant="outline"
      className="w-full"
    >
      <Image src={google} alt="google" width={24} height={24} />
      <span className="ml-2">Sign in with Google</span>
    </Button>
  );
};

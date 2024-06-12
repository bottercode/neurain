'use client';
import error from '@/svg/err.svg';
import Image from 'next/image';
import Link from 'next/link';

const AuthError = () => {
  return (
    <div className="w-full h-screen flex flex-col gap-4 justify-center items-center px-4">
      {/* <Image src={error} height={180} alt='err' priority /> */}
      <p className="text-black w-full max-w-80 text-center">
        Something went wrong please go to auth page. Click
        <Link className="mx-1 underline inline-block" href="/api/auth/signin">
          here
        </Link>
      </p>
    </div>
  );
};
export default AuthError;

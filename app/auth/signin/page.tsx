import {Button} from '@/components/ui/button'
import {Input} from '@/components/ui/input'
import {Label} from '@/components/ui/label'
import Image from 'next/image'
import Link from 'next/link'
import signin from '@/public/assets/sign-in.jpg'
import logo from '@/public/assets/logo.png'
import {GoogleSignButton} from '@/components/provider/google'

const SignIn = () => {
  return (
    <div className='grid lg:grid-cols-2 min-h-screen'>
      <div className='hidden bg-gray-100 lg:block'>
        <Image
          src={signin}
          alt='sign-in_illustration'
          className='max-h-screen w-full object-cover'
        />
      </div>
      <div className='flex items-center justify-center p-6 lg:p-10'>
        <div className='mx-auto w-full max-w-[400px] space-y-6'>
          <div className='flex items-center justify-center'>
            <Image
              src={logo}
              alt='neurain_logo'
              width={60}
              height={60}
              className=''
            />
          </div>
          <div className='space-y-2 text-center'>
            <h1 className='text-3xl font-bold'>Sign in to your account</h1>
            <p className='text-gray-500 dark:text-gray-400'>
              Don&apos;t have an account?{' '}
              <Link
                href='/auth/signup'
                className='font-medium underline'
                prefetch={false}>
                Sign up
              </Link>
            </p>
          </div>
          <form className='space-y-4'>
            <div className='space-y-2'>
              <Label htmlFor='email'>Email</Label>
              <Input
                id='email'
                type='email'
                placeholder='m@example.com'
                required
              />
            </div>
            <div className='space-y-2'>
              <div className='flex items-center justify-between'>
                <Label htmlFor='password'>Password</Label>
                <Link
                  href='#'
                  className='text-sm font-medium underline'
                  prefetch={false}>
                  Forgot password?
                </Link>
              </div>
              <Input id='password' type='password' required />
            </div>
            <Button type='submit' className='w-full'>
              Sign in
            </Button>
            <p className='text-center text-gray-500 dark:text-gray-400'>OR</p>
            <GoogleSignButton />
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignIn

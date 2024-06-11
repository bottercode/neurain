import Image from 'next/image'
import logo from '@/public/assets/logo.png'
import {useSession} from 'next-auth/react'
import {redirect} from 'next/navigation'

export const Navbar = () => {
  const {data: session} = useSession()

  return (
    <header className='flex w-full flex-col gap-3 bg-white/95 p-3 backdrop-blur supports-[backdrop-filter]:bg-white/60 md:h-16 md:flex-row md:items-center lg:px-4'>
      <div className='flex w-full items-center justify-between mt-4'>
        <Image src={logo} alt='neurain_logo' width={60} height={60} />
        <div className='rounded-full bg-gray-100 p-6'>
          {session ? (
            <button className='text-gray-700 dark:text-gray-300'>
              {session?.user ? (
                session.user?.image
              ) : (
                <Image
                  src='https://i.pravatar.cc/'
                  alt='profile_picture_not_available'
                  width={60}
                  height={60}
                  className='rounded-full'
                />
              )}
            </button>
          ) : (
            redirect('/auth/signin')
          )}
        </div>
      </div>
    </header>
  )
}

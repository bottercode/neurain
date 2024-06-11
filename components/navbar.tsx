import Image from 'next/image'
import logo from '../assets/logo.png'

export const Navbar = () => {
  return (
    <header className='flex w-full flex-col gap-3 bg-white/95 p-3 backdrop-blur supports-[backdrop-filter]:bg-white/60 md:h-16 md:flex-row md:items-center lg:px-4'>
      <div className='flex w-full items-center justify-between mt-4'>
        <Image src={logo} alt='Neurain' width={60} height={60} />
        <div className='rounded-full bg-gray-100 p-6'></div>
      </div>
    </header>
  )
}

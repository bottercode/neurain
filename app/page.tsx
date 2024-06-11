'use client'

import {useState} from 'react'
import {Input} from '@/components/ui/input'
import {Button} from '@/components/ui/button'
import {Send} from 'lucide-react'
import {Location} from '@/public/assets/svg/Location'
import {Navbar} from '@/components/navbar'

export default function Home() {
  const [title, setTitle] = useState('')
  const [location, setLocation] = useState('New York, NY')

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }

  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <div className='min-h-screen-patched flex flex-col'>
      <Navbar />
      <div className='flex-1 overflow-auto'>
        <section className='relative mb-4 flex flex-col items-center justify-center py-[26vh] pt-[18vh] text-gray-900 sm:pt-[26vh]'>
          <div className='max-w-xl space-y-4 text-center'>
            <h1 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
              Research · Develop · Ship
            </h1>
            <p className='text-gray-500 md:text-base dark:text-gray-400'>
              Enter a location and title to research about the product&apos;s
              target market.
            </p>
            <div className='flex justify-center items-center gap-2'>
              <Location />
              {location && (
                <span className='text-lg font-medium text-gray-700 dark:text-gray-300'>
                  {location}
                </span>
              )}
            </div>
          </div>
          <form
            onSubmit={handleSubmit}
            className='w-full max-w-md mt-8 flex gap-2'>
            <Input
              type='text'
              placeholder='Travel Industry'
              value={title}
              onChange={handleTitleChange}
            />
            <Input
              type='text'
              placeholder='Location'
              value={location}
              onChange={handleLocationChange}
            />
            <Button type='submit' variant='default' className='bg-black'>
              <Send className='h-5 w-5' />
            </Button>
          </form>
        </section>
      </div>
    </div>
  )
}

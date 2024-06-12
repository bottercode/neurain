'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Send } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { motion } from 'framer-motion';

export const FormComponent = () => {
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('New York, NY');
  const [animate, setAnimate] = useState(false);
  const { data: session } = useSession();
  const router = useRouter();

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !location) {
      return;
    }
    if (!session) {
      setAnimate(true);
      setTimeout(() => {
        router.push('/auth/signin');
      }, 1500);
    } else {
      router.push('/r/id');
    }
  };

  const isDisabled = !title || !location;

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md mt-8 flex flex-col gap-2 px-4"
      >
        <Input
          type="text"
          placeholder="Travel Industry"
          value={title}
          onChange={handleTitleChange}
        />
        <Input
          type="text"
          placeholder="Location"
          value={location}
          onChange={handleLocationChange}
        />
        <Button
          type="submit"
          variant="default"
          className={`bg-black ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={isDisabled}
        >
          <Send className="h-5 w-5" />
        </Button>
      </form>
      {animate && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="fixed inset-0 flex items-center justify-center bg-white"
        >
          <p className="text-xl font-bold">
            No session found. Redirecting to Sign-in screen
          </p>
        </motion.div>
      )}
    </>
  );
};

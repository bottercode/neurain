'use client';

import Image from 'next/image';
import logo from '@/public/assets/logo.png';
import { useSession } from 'next-auth/react';
import profile_alt from '@/public/assets/sign-in.jpg';
import Link from 'next/link';
import SignOut from '../app/auth/signup/page';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';

export const Navbar = () => {
  const { data: session } = useSession();

  console.log('session', session);

  return (
    <header className="flex w-full flex-col gap-3 bg-white/95 p-3 backdrop-blur supports-[backdrop-filter]:bg-white/60 md:h-16 md:flex-row md:items-center lg:px-4">
      <div className="flex w-full items-center justify-between mt-4">
        <Link href="/" className="cursor-pointer">
          <Image src={logo} alt="neurain_logo" width={60} height={60} />
        </Link>
        <div className="relative w-12 h-12 rounded-full bg-gray-100 overflow-hidden">
          {session && session?.user && session?.user?.image ? (
            <div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <img src={session.user.image} alt="profile" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 mx-10">
                  <DropdownMenuGroup>
                    <DropdownMenuLabel>{session.user.email}</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <Link href="/profile">
                        <span>Profile</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <span>SignOut</span>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          ) : (
            <Image
              src={profile_alt}
              alt="profile"
              layout="fill"
              objectFit="cover"
            />
          )}
        </div>
      </div>
    </header>
  );
};

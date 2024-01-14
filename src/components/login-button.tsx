'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from './ui/button'
import { useSession } from 'next-auth/react'

export default function LoginButton() {
  const { data } = useSession()
  console.log(data)

  if (data && data.user) {
    return (
      <div className="flex items-center gap-4">
        <span className="text-xs">{data?.user?.name}</span>

        <Image
          src="https://github.com/marcosHenrique-developer.png"
          className="h-6 w-6 rounded-full"
          width={24}
          height={24}
          alt=""
        />
      </div>
    )
  } else {
    return (
      <Link
        href="/login"
        className="flex items-center gap-2 hover:undeline-none"
      >
        <Button className="flex w-full items-center justify-center rounded border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
          Login
        </Button>

        <Image
          src="https://github.com/marcosHenrique-developer.png"
          className="h-6 w-6 rounded-full"
          width={24}
          height={24}
          alt=""
        />
      </Link>
    )
  }
}

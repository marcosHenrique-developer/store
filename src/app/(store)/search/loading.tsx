'use client'

import { Skeleton } from '@/components/ui/skeleton'
import { useSearchParams } from 'next/navigation'

export default function SearchLoading() {
  const searchParams = useSearchParams()

  const query = searchParams.get('q')

  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm">
        Resultados para: <span className="font-semibold">{query}</span>
      </p>

      <div className="grid grid-cols-3 gap-6">
        <Skeleton className="bg-zinc-50/10 rounded-md col-span-1 row-span-3 h-[350px]" />
        <Skeleton className="bg-zinc-50/10 rounded-md col-span-1 row-span-3 h-[350px]" />
        <Skeleton className="bg-zinc-50/10 rounded-md col-span-1 row-span-3 h-[350px]" />
        <Skeleton className="bg-zinc-50/10 rounded-md col-span-1 row-span-3 h-[350px]" />
        <Skeleton className="bg-zinc-50/10 rounded-md col-span-1 row-span-3 h-[350px]" />
        <Skeleton className="bg-zinc-50/10 rounded-md col-span-1 row-span-3 h-[350px]" />
      </div>
    </div>
  )
}

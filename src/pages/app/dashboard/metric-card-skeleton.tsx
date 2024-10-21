import { Skeleton } from '@/components/ui/skeleton'

export function MetricCardSkeleton() {
  return (
    <>
      <Skeleton className="h-7 w-2/5 mt-1" />
      <Skeleton className="h-4 w-3/5" />
    </>
  )
}

import ColorBlur from '@/components/ColorBlur'
import { cn } from '@/lib/utils'

export default function Home() {
  return (
    <main className={cn('relative')}>
      <ColorBlur />
      <ColorBlur className="bg-red-300/30 top-[-1rem] left-[-35rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] w-[50rem]" />
      <h1>homepage</h1>
    </main>
  )
}

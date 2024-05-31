import ColorBlur from '@/components/ColorBlur'
import { cn } from '@/lib/utils'

export default function Home() {
  return (
    <main className={cn('relative')}>
      <ColorBlur />
      <ColorBlur className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]" />
      <h1>homepage</h1>
    </main>
  )
}

import { cn } from '@/lib/utils'

type ColorBlurProps = {
  className?: string
}

const ColorBlur = ({ className }: ColorBlurProps): JSX.Element => {
  return (
    <div
      className={cn(
        'bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]',
        className
      )}
    />
  )
}

export default ColorBlur

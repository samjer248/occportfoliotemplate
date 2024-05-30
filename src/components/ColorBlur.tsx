import { cn } from '@/lib/utils'

type ColorBlurProps = {
  className?: string
}

const ColorBlur = ({ className }: ColorBlurProps): JSX.Element => {
  return (
    <div
      className={cn(
        'bg-blue-300/30 absolute z-[-2] top-[-6rem] right-[6rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] sm:h-[68.75rem]',
        className
      )}
    />
  )
}

export default ColorBlur

import { cn } from '@/lib/utils'
import { cva } from 'class-variance-authority'

const defaultPrimary =
  'bg-primary text-primary-foreground hover:bg-primary-hover hover:text-secondary'
const defaultSecondary =
  'bg-secondary text-black hover:bg-secondary-hover hover:text-primary'
const defaultCLass =
  'font-semibold py-2 px-4 mr-2 inline-flex items-center transition duration-300'

const buttonVariants = cva(defaultCLass, {
  variants: {
    intent: {
      primary: defaultPrimary,
      secondary: defaultSecondary,
      outline:
        'inline-block  bg-transparent text-foreground font-semibold hover:text-selected-foreground py-2 px-4 border-b-2 border-transparent rounded-t-lg',
    },
    size: {
      small: ['text-sm', 'p-2'],
      medium: ['text-base', 'py-2', 'px-4'],
    },
  },
  defaultVariants: {
    intent: 'primary',
    size: 'medium',
  },
})

export const ButtonComponent = ({
  children,
  intent,
  size,
  className,
  loader,
  onClick,
  type,
  ...props
}) => {
  return (
    <button
      className={cn(buttonVariants({ intent, size, className }))}
      onClick={onClick}
      type={type}
      {...props}
    >
      {loader ?? loader}
      {children}
    </button>
  )
}

export default ButtonComponent

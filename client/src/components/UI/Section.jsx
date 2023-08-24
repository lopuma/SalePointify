import { cn } from '@/lib/utils'

const Section = ({ children, className }) => {
	return (
		<Section className={cn('mt-20 w-full bg-background flex overflow-x-auto custom-scrollbar', className)}>
			{children}
		</Section>
	)
}

export default Section

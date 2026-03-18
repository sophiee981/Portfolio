import * as React from 'react'
import { cn } from '@/utils/cn'

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

const sizeMap = {
  sm: 'size-8 text-sm',
  md: 'size-10 text-base',
  lg: 'size-16 text-2xl',
  xl: 'size-24 text-4xl',
}

function Avatar({ size = 'md', className, children, ...props }: AvatarProps) {
  return (
    <div
      className={cn(
        'relative flex shrink-0 overflow-hidden rounded-full bg-muted border border-border',
        sizeMap[size],
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

function AvatarImage({ className, alt = '', ...props }: React.ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <img
      className={cn('aspect-square size-full object-cover', className)}
      alt={alt}
      {...props}
    />
  )
}

function AvatarFallback({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        'flex size-full items-center justify-center font-semibold text-muted-foreground',
        className
      )}
      {...props}
    />
  )
}

export { Avatar, AvatarImage, AvatarFallback }

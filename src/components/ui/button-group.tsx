import * as React from 'react'
import { cn } from '@/utils/cn'

/* ─────────────────────────────────────────────────────────
   ButtonGroup — shadcn/ui pattern
   Groups related <Button> components with shared borders
   and collapsed inner border-radii.

   Usage:
     <ButtonGroup>
       <Button variant="outline">Left</Button>
       <Button variant="outline">Middle</Button>
       <Button variant="outline">Right</Button>
     </ButtonGroup>

     <ButtonGroup orientation="vertical" aria-label="Text align">
       <Button variant="outline" size="icon"><AlignLeft /></Button>
       <Button variant="outline" size="icon"><AlignCenter /></Button>
       <Button variant="outline" size="icon"><AlignRight /></Button>
     </ButtonGroup>
   ───────────────────────────────────────────────────────── */

export interface ButtonGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Layout direction of the group */
  orientation?: 'horizontal' | 'vertical'
}

const ButtonGroup = React.forwardRef<HTMLDivElement, ButtonGroupProps>(
  ({ className, orientation = 'horizontal', children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        role="group"
        data-orientation={orientation}
        className={cn(
          'flex',
          // ── Direction ──
          orientation === 'vertical' ? 'flex-col' : 'flex-row',

          // ── Collapse inner border-radii: horizontal ──
          orientation === 'horizontal' && [
            // First child: keep left radius, remove right
            '[&>*:first-child]:rounded-r-none',
            // Last child: keep right radius, remove left
            '[&>*:last-child]:rounded-l-none',
            // Middle children: remove all radius
            '[&>*:not(:first-child):not(:last-child)]:rounded-none',
            // Collapse shared left border on non-first (avoids double border)
            '[&>*:not(:first-child)]:-ml-px',
            // Ensure focused/hovered item appears above siblings
            '[&>*:focus-visible]:z-10',
            '[&>*:hover]:z-10',
          ],

          // ── Collapse inner border-radii: vertical ──
          orientation === 'vertical' && [
            // First child: keep top radius, remove bottom
            '[&>*:first-child]:rounded-b-none',
            // Last child: keep bottom radius, remove top
            '[&>*:last-child]:rounded-t-none',
            // Middle children: remove all radius
            '[&>*:not(:first-child):not(:last-child)]:rounded-none',
            // Collapse shared top border on non-first
            '[&>*:not(:first-child)]:-mt-px',
            '[&>*:focus-visible]:z-10',
            '[&>*:hover]:z-10',
          ],

          className,
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)
ButtonGroup.displayName = 'ButtonGroup'

export { ButtonGroup }

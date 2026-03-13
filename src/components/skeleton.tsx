import { cva, type VariantProps } from "class-variance-authority";
import type React from "react";

export const skeletonVariants = cva(`animate-pulse bg-gray-200 pointer-events-none`,{
  variants:{
    rounded:{
      sm:"rounded-sm",
      lg:"rounded-lg",
      full:"rounded-full",
      
    }
  },
  defaultVariants:{
    rounded:"lg"
  }
})

interface SkeletonProps extends VariantProps<typeof skeletonVariants>, React.ComponentProps<"div">
{
 // as?: keyof React.JSX.IntrinsicElements
}

export default function ({
  className,
  rounded,
  ...props
}:SkeletonProps){
  return (
    <div className={skeletonVariants({rounded, className})}{...props}>
      
    </div>
  )
}


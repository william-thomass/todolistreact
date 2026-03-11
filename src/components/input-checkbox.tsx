import { cva, type VariantProps } from "class-variance-authority";
import type React from "react";
import Icon from "./icon";
import CheckIcon from "../assets/icons/Check-Regular.svg?react"

export const inputCheckboxWrapper = cva(`
  inline-flex items-center 
  justify-center cursor-pointer relative group
`)

export const inputCheckboxVariants = cva(`
  appearance-none peer flex items-center justify-center border-2 border-solid tansition overflow-hidden border-green-base hover:border-green-dark hover:bg-green-dark/20 checked:border-green-base checked:bg-green-base group-hover:checked:border-green-dark group-hover:checked:bg-green-dark
`, {
  variants:{
    size:{
      md:"w-5 h-5 rounded-sm"
    },
    disabled:{
      true:"pointer-events-none"
    }
  },
  defaultVariants:{
    size:"md",
    disabled:false
  }
})

export const inputCheckboxIconVariants = cva(`absolute top-1/2 left-1  -translate-y-1/2 hidden peer-checked:block fill-white
`, {
  variants:{
    size:{
      md:"w-3 h-3"
    }
  },
  defaultVariants:{
    size:"md"
  }
})

interface inputCheckboxProps extends VariantProps<typeof inputCheckboxVariants>, 
Omit<React.ComponentProps<"input">, "size" | "disabled">{}

export default function InputCheckbox({
  size,
  disabled,
  className,
  ...props
}:inputCheckboxProps){
  return <label className={inputCheckboxWrapper({className})}>
  <input type="checkbox" className={inputCheckboxVariants({size, disabled, className})}{...props} />
  <Icon className={inputCheckboxIconVariants({size})} svg={CheckIcon}/>
  </label>
}



'use client'
import { cn } from "@/lib/utils";
import { Button, ButtonProps } from "./ui/button";
import { Loader2 } from "lucide-react";
import { useFormStatus } from "react-dom";


// interface LoadingButtonProps extends ButtonProps{
//   loading?:boolean
// };

export default function LoadingButton({
  disabled,
  className,
  ...props
}:ButtonProps){

  const{pending} = useFormStatus();
  return (
    <Button
    disabled={pending || disabled}
    className={cn('flex justify-center gap-2',className)}
    {...props}
    >
      { pending && <Loader2 className="size-5 animate-spin" />}
      {props.children}
    </Button>
  )
}
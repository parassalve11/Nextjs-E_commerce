'use client'

import { FloatingLabelInput } from "@/components/FloatingInput";
import LoadingButton from "@/components/LoadingButton";
import { PasswordInput } from "@/components/PasswordInput";
import { Form, FormControl,  FormField,  FormItem,  FormMessage } from "@/components/ui/form";
import { SignUpShchema, SignUpValues } from "@/lib/validation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { signUp } from "./actions";
import { Mails, User } from "lucide-react";




export default function SignUpFrom(){

  const[error,setError] = useState<string>();
  const[pending,startTransition] = useTransition();

    const form = useForm<SignUpValues>({
        resolver:zodResolver(SignUpShchema),
        defaultValues:{
            username:'',
            email:'',
            password:''
        }
    });

    async function onSubmit(values:SignUpValues) {
        setError(undefined);
        startTransition(async() =>{
          const{error} = await signUp(values);
          if(error) setError(error)
        })
    }

    return(
      <div>
          <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
     
        <FormField 
        control={form.control}
        name="username"
        render={({field}) =>(
          <FormItem>
            <FormControl>
             <FloatingLabelInput label="Username" startContent={<User className="size-4" />} {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
    )}
        />

        <FormField 
        control={form.control}
        name='email'
        render={({field}) =>(
          <FormItem>
            <FormControl>
              <FloatingLabelInput  label="Email" startContent={<Mails className="size-4" />} {...field}/>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
        />

        <FormField 
        control={form.control}
        name="password"
        render={({field}) =>(
          <FormItem>
            <FormControl>
             <PasswordInput type="password" {...field}  />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
        />
        <LoadingButton className="w-full" >Create account</LoadingButton>
      
      </form>
     
    </Form>
    {error && <p className="text-destructive font-semibold">{error}</p>}
      </div>
  );
}
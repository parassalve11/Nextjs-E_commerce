
'use client'

import { FloatingLabelInput } from "@/components/FloatingInput";
import LoadingButton from "@/components/LoadingButton";
import { PasswordInput } from "@/components/PasswordInput";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { LoginSchema, Loginvalues } from "@/lib/validation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form"
import { Login } from "./actions";

export default  function LoginForm(){

    const[error ,setError] = useState<string>();
    const[pending,startTransition] = useTransition(); 
    const form = useForm<Loginvalues>({
        resolver:zodResolver(LoginSchema),
        defaultValues:{
            username:'',
            password:''
        }
    });

    async function onSubmit(values:Loginvalues){
        setError(undefined);
        startTransition(async() =>{
            const{error} = await Login(values);
            if(error) setError(error);
        })
    }
    
    return(
        <main>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
                    <FormField 
                    control={form.control}
                    name="username"
                    render={({field}) =>(
                        <FormItem>
                            <FormControl>
                                <FloatingLabelInput label="Username" {...field} />
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
                                <PasswordInput type="password" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                    />
                    <LoadingButton  type="submit" className="w-full">Login</LoadingButton>
                </form>
            </Form>
            {error && pending &&  <p className="text-destructive font-semibold">{error}</p>}
        </main>
    )
  
}
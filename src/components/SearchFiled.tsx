'use client'

import { useRouter } from "next/navigation"
import { Input } from "./ui/input";
import { Search } from "lucide-react";
import React from "react";


export default function SearchField(){
    const router = useRouter();

    

    function handleSubmit(e:React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        const form = e.currentTarget;
        const q = (form.q as HTMLInputElement) .value.trim();
        if(!q) return;
        router.push(`search?q=${encodeURIComponent(q)}`);
    }

    return(
        <form onSubmit={handleSubmit} method="GET" action="/search">
            <div className="relative">
                <Input name="q" placeholder="Search..." className="pe-32" />
                <Search className="absolute top-1/2 right-3 -translate-y-1/2 trnasform text-muted-foreground" />
            </div>
            
        </form>
    )
}
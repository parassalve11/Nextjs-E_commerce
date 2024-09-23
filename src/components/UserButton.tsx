'use client'
import { useSession } from "@/app/(main)/SessionProvider";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import UserAvatar from "./UserAvatar";
import Link from "next/link";
import { LogOutIcon, User2Icon } from "lucide-react";
import {LogOut} from "@/app/(auth)/actions";
import { cn } from "@/lib/utils";


interface UserButtonProps{
    className?:string;
};

export default function UserButton({className}:UserButtonProps){
    const{user}=useSession();

    return(
        <DropdownMenu >
            <DropdownMenuTrigger asChild>
                <button className={cn('rounded-full flex-none',className)}>
                    <UserAvatar avatarUrl={user.avatarUrl} size={30}  />
                </button>
            </DropdownMenuTrigger>
         <DropdownMenuContent>
         <DropdownMenuLabel>
                Log in as {<span className="text-slate-900 font-semibold hover:underline">@{user.username}</span>}
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <Link href={`user/${user.username}`}>
                <DropdownMenuItem>
                    <User2Icon className="mr-2 size-4" />
                    Profile
                </DropdownMenuItem>
            </Link>
            <DropdownMenuSeparator />
            <DropdownMenuItem
            onClick={() =>{
                LogOut();
            }}
            className="text-destructive group "
            >
                <LogOutIcon className="mr-2 size-4 group-hover:text-destructive" />
               <p className="group-hover:text-destructive">Logout</p>
            </DropdownMenuItem>
         </DropdownMenuContent>
        </DropdownMenu>
    )
}
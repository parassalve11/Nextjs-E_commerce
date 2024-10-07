'use server'

import { validRequest } from "@/auth"
import db from "@/lib/db";



export async function addAmmount(formData:FormData){

    const {user} = await validRequest();
    if(!user){
        throw new Error('Unauthorized.');
    };

    
    const aution_ammount = Number(formData.get('aution_ammount'));

    if(!aution_ammount){
        throw new Error('check your Fileds.')
    };

   await db.bid.create({
    data:{
        auctionAmmount:aution_ammount
    }
   })

    
}
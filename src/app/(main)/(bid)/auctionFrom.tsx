import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { addAmmount } from "./actions";
import LoadingButton from "@/components/LoadingButton";



export default function AddauctionForm(){
    return(
        <form action={addAmmount} className="flex flex-col gap-y-10">
          
            <Input
            name="aution_ammount"
            placeholder="Add aution ammount"
            type="number"
            className="w-full"
            required
            />

            <LoadingButton type="submit">add Auction</LoadingButton>
        </form>
    )
}
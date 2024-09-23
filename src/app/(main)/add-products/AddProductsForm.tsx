
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { addProducts } from "./actions";
import LoadingButton from "@/components/LoadingButton";



export default function AddProductsForm(){
    
    return(
        <form action={addProducts} className="space-y-5">
            <Input 
            required
            name="name"
            placeholder="Products Name"
            className="w-full"
            />
            <Input 
            required
            name="imageUrl"
            placeholder="Image URL"
            className="w-full"
            type="url"
            />
            <Textarea 
            required
            name="description"
            placeholder="Description"
            className="w-full"
            />
            <Input 
            required
            name="price"
            placeholder="Price"
            className="w-full"
            type="number"
            />

            <LoadingButton type="submit" className="w-full font-semibold">Submit</LoadingButton>
        </form>
    )
}


import AddProducts from "./AddProductsForm"

export default function AddproductPage(){
    return(
        <div className="h-screen flex items-center justify-center p-5  ">
            <div className="flex h-full  max-h-[40rem] w-full max-w-[64rem] overflow-hidden bg-card rounded-2xl shadow-md">
                <div className="w-full overflow-y-auto p-10 space-y-10 ">
                    <div className=" space-y-1">
                        <h1 className="text-3xl font-bold">Add Products.</h1>
                        <p className="text-muted-foreground text-xs">a place were admin can add products.</p>
                    </div>
                    <div className="space-y-5">
                        <AddProducts />
                    </div>
                </div>
            </div>
        </div>
    )
}
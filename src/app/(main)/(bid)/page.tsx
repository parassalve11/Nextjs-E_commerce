import AddauctionForm from "./auctionFrom";





export default function BidInput(){
    return(
        <div className="flex items-center justify-center p-5">
            <div className="flex h-full max-h-[40rem] w-full max-w-[64rem] overflow-hidden bg-card rounded-2xl shadow-md">
                <div className="w-full p-10 space-y-10 overflow-y-auto ">
                    <div className="sapce-y-1">
                        <h1 className="text-3xl font-bold">Add Auction.</h1>
                        <p className="text-muted-foreground text-sm">a place were admin can add Products.</p>
                    </div>
                    <div className="space-y-5">
                        <AddauctionForm /> 
                    </div>
                </div>
            </div>
        </div>
    )
}
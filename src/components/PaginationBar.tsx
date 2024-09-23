import Link from "next/link";
import { Button } from "./ui/button";


interface PaginationBar{
    currentPage:number,
    totalPage:number
};


export default function PaginationBar({currentPage,totalPage}:PaginationBar){
    const maxPage = Math.min(totalPage,Math.max(currentPage +4 ,10));
    const minPage = Math.max(1,Math.min(currentPage-5,maxPage - 9));

    const numberedPageItem : JSX.Element[] =[];

    for(let page = minPage ; page <= maxPage ; page++){
        numberedPageItem.push(
            <Link 
            href={'?page=' + page}
            className="px-0 md:px-2"
            key={page}
            >
            <Button
            type="button"
            disabled={currentPage === page}
            variant={"outline"}
            className={`${currentPage === page? 'bg-black text-white' : ''} `}
            >{page}
            
            </Button>
            </Link>
        )
    };

    return(
        <div className="p-5">
            {numberedPageItem}
        </div>
    )
}
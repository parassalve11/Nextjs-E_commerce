import Image from "next/image";
import Link from "next/link";
import signUpImage from '@/assets/SignUp.jpg'
import SignUpFrom from "./SignUpFrom";

export default async function page(){
    return(
        <div className="h-screen flex items-center justify-center p-5">
            <div className="flex h-full max-h-[40rem] w-full max-w-[64rem] overflow-hidden bg-card rounded-2xl shadow-2xl">
                <div className="w-full overflow-y-auto p-10 space-y-10 md:w-1/2">
                    <div className="space-y-1 text-center">
                        <h1 className="text-3xl font-bold">Sign up with Lucia Auth</h1>
                        <p>A place 
                            where <span className="text-primary font-semibold">you</span> can make new friends.
                        </p>
                    </div>
                    <div className="space-y-5">
                        <SignUpFrom />
                        <Link href={'login'}>Already have an 
                        account? <span className="font-semibold text-primary">Login.</span></Link>
                    </div>
                </div>
                    <Image 
                    src={signUpImage}
                    alt=""
                    className="w-1/2 object-cover hidden md:block"
                    />
            </div>

        </div>
    )
}
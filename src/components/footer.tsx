import { TiSocialFacebook } from "react-icons/ti"
import { AiFillInstagram } from "react-icons/ai"
import { RiTwitterFill } from "react-icons/ri"
import { Abril_Fatface } from "next/font/google"
import { Poppins } from "next/font/google"

const abril = Abril_Fatface({
    subsets:['latin'],
    weight:'400',
})

const poppins = Poppins({
    subsets:['latin'],
    weight:'400',
})


export default function Footer(){
    return(
        <footer>
            <div className=" md:flex md:flex-row bg-light-blue mt-1 py-12">
                <div className="pl-24" >
                    <h1 className={`${abril.className} font-medium text-lg `}>GREENMIND</h1>
                    <p className={`${poppins.className} mt-6 text-gray-500 text-lg font-medium`}>We help you find <br />
                        your dream plant</p>
                    <div className="flex text-gray-700 mt-6 space-x-6">
                        <div className="p-2 border border-gray-500 rounded-full text-gray-700 "><TiSocialFacebook size={30}/></div>
                        <div className="p-2 border border-gray-500 rounded-full text-gray-700"><AiFillInstagram size={30}/></div>
                        <div className="p-2 border border-gray-500 rounded-full text-gray-700"><RiTwitterFill size={30}/></div>
                    </div>
                    <div>
                        <p className={`${poppins.className} text-gray-500 mt-20 font-medium text-lg`}>2023 all Right Reserved Term of use GREENMIND</p>
                    </div>
                </div>

                {/* right section */}
                <div className={`${poppins.className} flex ml-auto mr-16 gap-12 `}>
                    {/* information seciton */}
                    <div className="space-y-6  text-gray-500">
                        <h2 className="font-bold text-lg text-slate-950 ">Information</h2>
                        <p>About</p>
                        <p>Product</p>
                        <p>Blog</p>
                    </div>
                    {/* company seciton */}
                    <div className="space-y-6 text-gray-500" >
                        <h2 className="font-bold text-lg text-slate-950">Company</h2>
                        <p>Community</p>
                        <p>Career</p>
                        <p>Our story</p>
                    </div>
                    {/* contact seciton */}
                    <div className="space-y-6  text-gray-500">
                        <h2 className="font-bold text-lg text-slate-950" >Contact</h2>
                        <p>Getting Started</p>
                        <p>Pricing</p>
                        <p>Resources</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
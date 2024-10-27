import { Poppins } from "next/font/google"
import { DiBackbone } from "react-icons/di"
import Image from "next/image"

const poppins = Poppins({
    subsets:['latin'],
    weight:['200','500','700'],
})

export default function Products(){
    return(
        <div className={`${poppins.className} sm:flex mt-16 relative left-3 justify-center `}>
            <div className="w-[256px] h-[264px]  ">
                <h2 className="w-64 font-bold text-3xl">Best Selling <br />Plants</h2>
                <p className="mt-3 text-gray-500">Easiest way to <br />healthy life by buying <br />your favorite plants </p>
                <button className=" bg-light-blue hover:bg-gray-500 mt-6 px-6 py-3 h-[51px] w-[168px] rounded-lg text-center">See more → </button>
            </div>
            

            <div className="flex relative right-6 gap-7">
            {/* first product */}
                <div>
                    <Image src="/images/Frame 9.png" alt="natural flower" width={299} height={363}/>
                    <p className="mt-3">natural plants</p>
                    <p className="mt-2 text-gray-500">₱ 1,400.00</p>
                </div>
                {/* seconde product */}
                <div>
                    <Image src="/images/Frame 8.png" alt="natural flower" width={299} height={363}/>
                    <p className="mt-3">Artificial Plants</p>
                    <p className="mt-2  text-gray-500">₱ 900.00</p>
                </div>
                {/* third product */}
                <div>
                    <Image src="/images/Frame 7.png" alt="natural flower" width={299} height={363}/>
                    <p className="mt-3">Artificial Plants</p>
                    <p  className="mt-2  text-gray-500">₱ 3,500.00</p>
                </div>
            
            </div>
        </div>
    )
}
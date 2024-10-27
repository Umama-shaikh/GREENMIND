import Image from 'next/image';
import { IoSearchOutline } from 'react-icons/io5';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
    subsets:['latin'],
    weight: ['700','200','400'],
  })



export default function Hero() {
  return (
    <div className=" bg-light-blue mr-24 ml-24 pl-10 pt-12 rounded-3xl flex  h-[521px]  relative mt-7">
            {/* left side */}
            <div>
                {/* h1 */}
                <div>
                    <h1 className={`${poppins.className} font-extrabold text-6xl`}>Buy your <br />
                    dream plants</h1>
                </div>
                <div className="sm:flex sm:gap-12 sm:mt-6">
                    <div>
                        <h5 className= {`${poppins.className} font-medium text-3xl`}>50+</h5>
                        <p>plant species</p>
                    </div>
                    <p className="text-5xl font-light">|</p>
                    <div>
                        <h5 className={`${poppins.className} font-medium text-3xl`}>100+</h5>
                        <p>Customers</p>
                    </div>
                </div>
                {/* Search bar */}
                <div className="mt-12 relative">
                    <form className="flex ">
                        <input type="search" placeholder="what are you looking for?" className="font-medium text-lg pl-5 pr-10 rounded-xl h-16 w-[449px] shadow-md focus:outline-none"  />
                        <button type="submit"  className=" bg-light-blue w-12 h-12 rounded-xl absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center justify-center " >
                        <IoSearchOutline className="w-5 h-5 text-black text-center" /></button>
                    </form>
                </div>
            </div>
            {/* right side */}
            <div className='hidden md:block'>
                <Image src="/images/plant.png" alt="plant" width={411} height={513} className="absolute bottom-0 right-16 z-10"/>
                <Image src="/images/Rectangle 2.png" alt="black-bg" width={450} height={400} className="absolute bottom-0 right-16"/>
                <Image src="/images/Vector 187.png" alt="arrow" width={100} height={154} className="absolute top-3 right-6" />
                <Image src="/images/Vector 186.png" alt="arrow" width={150} height={154} className="absolute bottom-36 ml-4" />
            </div>
        </div>
  )
}

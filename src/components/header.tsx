import Link from 'next/link';
import { BsCart } from 'react-icons/bs';
import { FaRegUser } from 'react-icons/fa';
import { IoReorderThreeOutline } from 'react-icons/io5';
import { Abril_Fatface } from '@next/font/google';
import { Poppins } from 'next/font/google';


const abrilFatface = Abril_Fatface({
  subsets: ['latin'],
  weight: '400',
});

const poppins = Poppins({
  subsets:['latin'],
  weight: '400',
})



export default function Header(){
    return(
        <header className="mt-6 md:mt-11">
      <div className="flex items-center gap-20">
        <div>
          <h1 className={`${abrilFatface.className} pl-5 font-medium text-2xl md:ml-20`}>GREENMIND</h1>
        </div>
        <div className='hidden md:block'>
          <ul className={`${poppins.className} flex gap-12`}>
            <li><Link href="#">Home</Link></li>
            <li><Link href="#">Products</Link></li>
            <li><Link href="#">Contacts</Link></li>
          </ul>
        </div>
        {/* Icons container with ml-auto to push it to the right */}
        <div className=" ml-auto mr-24 ">
          <ul className="flex gap-12">
            <li><BsCart className='hidden md:block' /></li>
            <li><FaRegUser className='hidden md:block'/></li>
            <li className='hidden md:block'>|</li>
            <li className=' text-4xl md:text-2xl '><IoReorderThreeOutline /></li>
          </ul>
        </div>
      </div>
    </header>
    )
}
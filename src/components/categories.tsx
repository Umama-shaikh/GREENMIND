import Image from 'next/image';
import { Poppins } from '@next/font/google';

const poppins = Poppins({
    subsets: ['latin'],
    weight: '400',
});

export default function Categories() {
    return (
        <div className={`${poppins.className} mt-44`}>
            {/* Title and Subtitle */}
            <div className="text-center">
                <h2 className="text-3xl font-bold">Categories</h2>
                <p className="text-lg text-gray-500 mt-3">Find what you are looking for</p>
            </div>

            {/* Cards Section */}
            <div className="mt-24 bg-light-blue py-12 relative">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
                    
                    {/* Card 1: Natural Plants (Pulled Up) */}
                    <div className="rounded-xl  overflow-hidden relative -mt-24">
                        <Image
                            src="/images/Frame 36.png"
                            alt="Natural Plants"
                            width={352}
                            height={512}
                            className="w-full h-auto object-cover"
                        />
                        <div className="p-6 text-center">
                            <h3 className="font-semibold text-lg">Natural Plants</h3>
                        </div>
                    </div>

                    {/* Card 2: Plant Accessories (Normal Position) */}
                    <div className=" rounded-xl overflow-hidden">
                        <Image
                            src="/images/Frame 38.png"
                            alt="Plant Accessories"
                            width={352}
                            height={512}
                            className="w-full h-auto object-cover"
                        />
                        <div className="p-6 text-center">
                            <h3 className="font-semibold text-lg">Plant Accessories</h3>
                            <p className="text-gray-500 mt-2">Horem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <button className="mt-4 px-6 py-2 bg-white text-black  rounded-md hover:bg-sky-500 hover:text-white transition-colors">
                                Explore →
                            </button>
                        </div>
                    </div>

                    {/* Card 3: Artificial Plants (Pulled Up) */}
                    <div className=" rounded-xl overflow-hidden relative -mt-24">
                        <Image
                            src="/images/Frame 37.png"
                            alt="Artificial Plants"
                            width={352}
                            height={512}
                            className="w-full h-auto object-cover"
                        />
                        <div className="p-6 text-center">
                            <h3 className="font-semibold text-lg">Artificial Plants</h3>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

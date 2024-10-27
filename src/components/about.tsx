import { Poppins } from "@next/font/google";
import { PiPottedPlant } from "react-icons/pi";
import { BsBoxSeam, BsTelephoneOutbound } from "react-icons/bs";

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400','500','700'],
});

export default function About() {
    return (
        <div className={`${poppins.className} pt-32 px-6 w-full bg-white`}>
            <div className="max-w-7xl m-auto text-center">
                {/* Heading Section */}
                <h2 className="font-bold text-3xl text-black">About us</h2>
                <p className="mt-3 font-medium text-lg text-gray-500">
                    Order now and appreciate the beauty of nature
                </p>

                {/* Features Section */}
                <div className="flex justify-around mt-12">
                    {/* Feature 1 */}
                    <div className="flex flex-col items-center">
                        <div className="bg-[#d1e7e0] p-4 rounded-full">
                            <PiPottedPlant className="text-4xl text-gray-950" />
                        </div>
                        <h3 className="font-bold mt-4 text-lg">Large Assortment</h3>
                        <p className="text-center text-gray-500 mt-2">
                            we offer many different types of products <br />
                            with fewer variations in each category.
                        </p>
                    </div>

                    {/* Feature 2 */}
                    <div className="flex flex-col items-center">
                        <div className="bg-[#d1e7e0] p-4 rounded-full">
                            <BsBoxSeam className="text-4xl text-gray-950" />
                        </div>
                        <h3 className="font-bold mt-4 text-lg">Fast & Free Shipping</h3>
                        <p className="text-center text-gray-500 mt-2">
                            4-day or less delivery time, free shipping <br />
                            and an expedited delivery option.
                        </p>
                    </div>

                    {/* Feature 3 */}
                    <div className="flex flex-col items-center">
                        <div className="bg-[#d1e7e0] p-4 rounded-full">
                            <BsTelephoneOutbound className="text-4xl text-gray-950" />
                        </div>
                        <h3 className="font-bold mt-4 text-lg">24/7 Support</h3>
                        <p className="text-center text-gray-500 mt-2">
                            answers to any business related inquiry <br />
                            24/7 and in real-time.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

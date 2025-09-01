import Button from "@/components/Button";
import DesignImage1 from '@/assets/images/design-example-1.jpg'
import DesignImage2 from '@/assets/images/design-example-2.jpg'
import Pointer from "@/components/Pointer";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="py-24 overflow-x-clip">
            <div className="container relative">
                <div className="absolute -left-32 top-16 hidden lg:block">
                    <Image
                    src={DesignImage1}
                    alt='Design Example 1 Image'
                    />
                </div>
                <div className="absolute -right-64 -top-16 hidden lg:block">
                    <Image
                    src={DesignImage2}
                    alt="Design Image Example 2"
                    />
                </div>
                <div className="absolute left-56 top-96 hidden lg:block">
                    <Pointer name="Andreas"/>
                </div>
                <div className="absolute right-80 -top-4 hidden lg:block">
                    <Pointer name="Bryne" color="red"/>
                </div>
                <div className="flex justify-center">
                    <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full text-neutral-950 font-semibold">$7.5M seed round raised</div>
                </div>
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium text-center mt-6">Impactful design, created effortlessly</h1>
                <p className="text-center text-xl text-white/50 mt-8 max-w-2xl mx-auto">Design tools shouldn&apos;t slow you down. Layers combine that keeps you in creative flow.</p>
                <form action="submit" className="flex border border-white/15 rounded-full p-2 mt-8 max-w-lg mx-auto">
                    <input className="bg-transparent px-4 md:flex-5 w-full outline-none" type="email" placeholder="Enter your email" />
                    <Button variant="primary" size="sm" className="whitespace-nowrap">Sign Up</Button>
                </form>
            </div>
        </section>
    )
}
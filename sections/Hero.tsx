'use client';
import Button from "@/components/Button";
import DesignImage1 from '@/assets/images/design-example-1.jpg'
import DesignImage2 from '@/assets/images/design-example-2.jpg'
import Pointer from "@/components/Pointer";
import Image from "next/image";
import { motion, useAnimate } from "framer-motion";
import { useEffect } from "react";


export default function Hero() {
    const [leftDesignScope, leftDesignAnimate]=useAnimate();
    const [leftPointerScope, leftPointerAnimate]=useAnimate();
    const [rightDesignScope, rightDesignAnimate]=useAnimate();
    const [rightPointerScope, rightPointerAnimate]=useAnimate();

    useEffect(() => {
      leftDesignAnimate([
        [leftDesignScope.current, {opacity:1},{duration:0.5}],
        [leftDesignScope.current, {y:0,x:0},{duration:0.5}],
      ]);
      leftPointerAnimate([
        [leftPointerScope.current, {opacity:1},{duration:0.5}],
        [leftPointerScope.current, {y:0,x:-100},{duration:0.5}],
        [leftPointerScope.current, {x:0,y:[0,16,0]},{duration:0.5, ease:'easeInOut' }],
      ]);
           rightDesignAnimate([
        [rightDesignScope.current, {opacity:1},{duration:0.5,delay:1.5}],
        [rightDesignScope.current, {y:0,x:0},{duration:0.5}],
      ]);
        rightPointerAnimate([
        [rightPointerScope.current, {opacity:1},{duration:0.5,delay:1.5}],
        [rightPointerScope.current, {y:0,x:175},{duration:0.5}],
        [rightPointerScope.current, {x:0,y:[0,20,0]},{duration:0.5, ease:'easeInOut' }],
      ]);
    }, [])
    
    return (
        <section className="px-4 pt-24 overflow-x-clip lg:p-24">
            <div className="container relative">
                <motion.div ref={leftDesignScope} drag initial={{opacity:0,x:-100,y:100}} className="absolute -left-32 top-16 hidden lg:block">
                    <Image
                    src={DesignImage1}
                    draggable='false'
                    alt='Design Example 1 Image'
                    />
                </motion.div>
                 <motion.div ref={leftPointerScope} initial={{opacity:0,x:-200,y:100}} className="absolute left-56 top-96 hidden lg:block">
                    <Pointer name="Andreas"/>
                </motion.div>
                <motion.div drag ref={rightDesignScope} initial={{opacity:0,x:100,y:100}} className="absolute -right-64 -top-16 hidden lg:block">
                    <Image
                    src={DesignImage2}
                    alt="Design Image Example 2"
                    draggable='false'
                    />
                </motion.div>
               
                <motion.div ref={rightPointerScope} initial={{opacity:0,x:275,y:100}} className="absolute right-80 -top-4 hidden lg:block">
                    <Pointer name="Bryne" color="red"/>
                </motion.div>
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
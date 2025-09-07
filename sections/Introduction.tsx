'use client';
import Tag from "@/components/Tag"
import { useMotionValue, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

const text = 'You&apos;re racing to create exceptional work, but traditional design tools slow you down with unnecessary complexity and steep learning curves.';
const words = text.split(' ');

export default function Introdcution() {
    const scrollTarget = useRef<HTMLDivElement>(null);
    const {scrollYProgress} = useScroll({ target: scrollTarget, offset: ['start end', 'end end'] });
    const [currentword, setcurrentword] = useState(0);
    const wordIndex=useTransform(scrollYProgress,[0,1],[0, words.length]);

    useEffect(() => {
      wordIndex.on('change',(latest)=>(
        setcurrentword(latest)
      ))
    }, []);

    return (
        <section className="px-2 pt-28 lg:py-40">
            <div className="container">
                <div className="sticky top-20 md:top-28 lg:40">
                    <div className="text-4xl md:text-6xl lg:text-7xl text-center font-medium">
                        <Tag>Introducing Layers</Tag>
                    </div>
                    <div className="text-4xl font-medium text-center mt-10 md:text-6xl lg:text-7xl">
                        <span>Your creative process deserves better.</span>{' '}
                        <span className="text-white/15">{
                            words.map((word,wordIndex)=>(
                                <span key={wordIndex} className={twMerge('transition duration-500 text-white/15',wordIndex<currentword && 'text-white')}>{`${word} `}</span>
                            ))
                        }</span>
                        <span className="text-lime-400 block">That&apos;s why we built Layers.</span>
                    </div>
                </div>
                <div className="h-[150vh]" ref={scrollTarget}></div>
            </div>
        </section>
    )
}
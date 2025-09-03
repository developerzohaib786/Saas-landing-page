import Tag from "@/components/Tag";
import FeaturesCard from "@/components/FeaturesCard";
import avatar1 from '@/assets/images/avatar1.jpeg';
import avatar2 from '@/assets/images/avatar2.jpeg';
import avatar3 from '@/assets/images/avatar3.jpeg';
import Image from "next/image";
import Avatar from "@/components/Avatar";
import Key from "@/components/Key";

const features = [
    "Asset Library",
    "Code Preview",
    "Flow Mode",
    "Smart Sync",
    "Auto Layout",
    "Fast Search",
    "Smart Guides"
]

export default function Features() {

    return (
        <section className="px-4 py-24 overflow-x-hidden">
            <div className="container">
                <div className="justify-center flex">
                                    <Tag>Features</Tag>
                </div>
                                <h2 className="text-6xl font-medium text-center mt-6 max-w-2xl mx-auto">Where power meets <span className="text-lime-400">simplicity</span></h2>
                <div className='mt-12 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-8'>
                    <FeaturesCard title="Real-time Collabration" description="Work together semmesly with conflict-free team editing" className="md:col-span-2 lg:col-span-1">
                        <div className="aspect-video flex justify-center items-center">
                            <Avatar className="z-40">
                                <Image src={avatar1} alt="Avatar 1" className="rounded-full"/>
                            </Avatar>
                            <Avatar className="border-indigo-500 -ml-6 z-30">
                                <Image src={avatar2} alt="Avatar 1" className="rounded-full"/>
                            </Avatar>
                            <Avatar className="border-amber-500 -ml-6 z-20">
                                <Image src={avatar3} alt="Avatar 1" className="rounded-full"/>
                            </Avatar>
                            <Avatar className="-ml-6 border-transparent">
                                <div className="size-full bg-neutral-700 rounded-full inline-flex justify-center items-center gap-1">
                                    {Array.from({length:3}).map((_,i)=>
                                    <span className="size-1.5 rounded-full bg-white inline-flex" key={i}></span>
                                    )}
                                </div>
                            </Avatar>
                        </div>
                    </FeaturesCard>
                    <FeaturesCard title="Interactive Prototyping" description="Engage with your clients with prototypes that reacts to user actions" className='md:col-span-2 lg:col-span-1'>
                        <div className="aspect-video flex items-center justify-center">
                            <p className="text-4xl font-extrabold text-white/20 text-center">
                                We&apos;ve achieved <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">incredible</span> growth this year
                            </p>
                        </div>
                    </FeaturesCard>
                    <FeaturesCard title="Keyboard Quick Actions" description="Powerful Commands to help you to create designs more quickly" className="md:col-span-2 md:col-start-2 lg:col-span-1 lg:col-start-auto">
                        <div className="aspect-video flex justify-center items-center gap-4">
                            <Key className="w-28">Shift</Key>
                            <Key>alt</Key>
                            <Key>C</Key>
                        </div>
                    </FeaturesCard>
                         <div className="mt-8 flex flex-wrap justify-center items-center gap-3 md:w-7xl">
                            {features.map((feature)=>{
                                return (
                                    <div key={feature} className="bg-neutral-900 gap-3 items-center md:px-5 rounded-2xl border-white/10 inline-flex px-3 py-1.5 md:py-2 ">
                                        <span className="bg-lime-400 text-neutral-950 size-5 text-xl inline-flex items-center justify-center rounded-full">&#10038;</span>
                                        <span className="font-medium md:text-xl">{feature}</span>
                                    </div>
                                )
                            })}
                        </div>
                </div>
            </div>
        </section>
    )
}
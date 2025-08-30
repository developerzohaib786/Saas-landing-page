import Button from "@/components/Button";

export default function Hero() {
    return (
        <section>
            <div className="container">
                <div className="flex justify-center">
                    <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full text-neutral-950 font-semibold">$7.5M seed round raised</div>
                </div>
                <h1 className="text-6xl md:text-7xl font-medium text-center mt-6">Impactful design, created effortlessly</h1>
                <p className="text-center text-xl text-white/50 mt-8 max-w-2xl mx-auto">Design tools shouldn&apos;t slow you down. Layers combine that keeps you in creative flow.</p>
                <form action="submit" className="flex border border-white/15 rounded-full p-2 mt-8 max-w-lg mx-auto">
                    <input className="bg-transparent px-4 md:flex-5" type="email" placeholder="Enter your email" />
                    <Button variant="primary" size="sm" className="whitespace-nowrap">Sign Up</Button>
                </form>
            </div>
        </section>
    )
}
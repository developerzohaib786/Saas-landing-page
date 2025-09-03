import Tag from "@/components/Tag"

export default function Introdcution(){

return (
    <section className="px-2 pt-28 lg:py-40">
    <div className="container">
    <div className="text-4xl md:text-6xl lg:text-7xl text-center font-medium">
        <Tag>Introducing Layers</Tag>
    </div>
    <div className="text-4xl font-medium text-center mt-10">
    <span>Your creative process deserves better.</span>{' '}
    <span className="text-white/15">You&apos;re racing to create exceptional work, but traditional design tools slow you down with unnecessary complexity and steep learning curves.</span>
    <span className="text-lime-400 block">That&apos;s why we built Layers.</span>
    </div>
    </div>
    </section>
)
}
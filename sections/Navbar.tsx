import Button from "@/components/Button";


const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'Features', href: '#features' },
    { label: 'Integrations', href: '#integrations' },
    { label: 'FAQs', href: 'faqs' },
]

export default function Navbar() {
    return (
        <section className="px-4 py-4 lg:py-8 lg:p-16">
            <div className="container">
                <div className="flex items-center justify-between border border-white/15 rounded-full p-2 px-4 md:pr-2">

                    {/* Left: Logo */}
                    <div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-codesandbox text-lime-400 h-9 w-auto"
                        >
                            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                            <polyline points="7.5 4.21 12 6.81 16.5 4.21" />
                            <polyline points="7.5 19.79 7.5 14.6 3 12" />
                            <polyline points="21 12 16.5 14.6 16.5 19.79" />
                            <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                            <line x1={12} y1={22.08} x2={12} y2={12} />
                        </svg>
                    </div>

                    {/* Middle: Nav Links */}
                    <nav className="hidden lg:flex gap-6 font-medium">
                        {navLinks.map((i) => (
                            <a href={i.href} key={i.label}>
                                {i.label}
                            </a>
                        ))}
                    </nav>

                    {/* Right: Menu + Buttons */}
                    <div className="flex items-center gap-4">
                        {/* Mobile menu */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-menu md:hidden"
                        >
                            <line x1={3} y1={12} x2={21} y2={12} />
                            <line x1={3} y1={6} x2={21} y2={6} />
                            <line x1={3} y1={18} x2={21} y2={18} />
                        </svg>

                        {/* Desktop buttons */}
                        <Button variant="secondary" className="hidden md:inline-flex items-center">
                            Log In
                        </Button>
                        <Button variant="primary" className="hidden md:inline-flex items-center">
                            Sign Up
                        </Button>
                    </div>
                </div>
            </div>
        </section>

    )
}
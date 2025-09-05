import React from 'react'
import Tag from '@/components/Tag'
import { twMerge } from 'tailwind-merge'


const faqs = [
    {
        question: "How is Layers different from other design tools?",
        answer: "Unlike traditional design tools, Layers prioritizes simplicity and collaboration. Our intuitive interface eliminates complexity while maintaining powerful features, making design accessible to both beginners and professionals."
    },
    {
        question: "Is there a learning curve?",
        answer: "Layers is designed to feel intuitive from day one. With smart defaults, contextual help, and a clean interface, most users are productive within minutes. Our guided onboarding ensures you're up and running quickly."
    },
    {
        question: "How do you handle version control?",
        answer: "Every change in Layers is automatically saved and versioned. You can view your design history, restore previous versions, and branch off different design directions without losing any work."
    },
    {
        question: "Can I work offline?",
        answer: "Yes! Layers includes a robust offline mode. Changes made offline automatically sync when you reconnect, ensuring you never lose progress regardless of your internet connection."
    },
    {
        question: "How does Layers handle collaboration?",
        answer: "Layers is built for collaboration. You can invite team members, share designs with stakeholders, leave comments, and work together in real-time without conflicts or overwrites."
    },
]


const Faqs = () => {
    const selectedIndex=0;
    return (
        <section className='py-24'>
            <div className="container">
                <div className='flex justify-center'>
                    <Tag>Faqs</Tag>
                </div>
                <h2 className='text-6xl font-medium mt-6 text-center max-w-xl mx-auto'>Questions? We&apos;ve got <span className='text-lime-400'>answers</span></h2>
                <div className='mt-12 flex flex-col gap-6 max-w-xl mx-auto'>
                    {faqs.map((i,faqIndex) =>
                        <div key={i.question} className='bg-neutral-900 border-2 border-white/10 rounded-2xl p-5'>
                            <div className='flex justify-between items-center'>
                                <h3 className='font-medium'>{i.question}</h3>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className={twMerge("feather feather-plus-circle text-lime-400 flex-shrink-0",selectedIndex===faqIndex && 'rotate-45')}
                                >
                                    <circle cx="12" cy="12" r="10" />
                                    <line x1="12" y1="8" x2="12" y2="16" />
                                    <line x1="8" y1="12" x2="16" y2="12" />
                                </svg>
                            </div>
                            <div className={twMerge('mt-6',selectedIndex !== faqIndex && 'hidden')}>
                                                            <p className='text-white/50'>{i.answer}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default Faqs

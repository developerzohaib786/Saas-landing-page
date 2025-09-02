import Image from 'next/image';
import React from 'react'
import { type IntegrationType } from '@/sections/Integrations'
import { twMerge } from 'tailwind-merge';

const IntegrationsColumn = (props:{integrations:IntegrationType,className?:string,}) => {
    const {integrations,className}=props;
  return (
      <div className={twMerge('flex flex-col gap-4 pb-4',className)}>
                    {integrations.map((i)=>
                <div key={i.name} className='bg-neutral-900 border boder-white/10 rounded-3xl p-6'>
                    <div className='flex justify-center'>
                        <Image src={i.icon} alt={`${i.name} icon`} className='size-24 rounded-2xl'/>
                    </div>
                    <h3 className='text-3xl text-center mt-6'>{i.name}</h3>
                    <p className='text-center mt-2 text-white/50'>{i.description}</p>
                </div>
                )}
                </div>
  )
}

export default IntegrationsColumn

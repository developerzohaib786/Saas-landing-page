import React from 'react'
import Tag from '@/components/Tag';
import figma_logo from '@/assets/images/figma.png';
import notion_logo from '@/assets/images/notion.png';
import slack_logo from '@/assets/images/slack.png';
import relume_logo from '@/assets/images/relume.png';
import framer_logo from '@/assets/images/framer.png';
import github_logo from '@/assets/images/github.png';
import Image from 'next/image';
import IntegrationsColumn from '@/components/IntegrationsColumn';


const integrations = [
  { name: "Figma", icon: figma_logo, description: "Figma is a collaborative design tool for creating user interfaces and prototypes." },
  { name: "Notion", icon: notion_logo, description: "Notion is an all-in-one workspace for notes, docs, wikis, and project management." },
  { name: "Slack", icon: slack_logo, description: "Slack is a messaging platform that brings team communication together in one place." },
  { name: "Relume", icon: relume_logo, description: "Relume is a design system and component library for building websites faster." },
  { name: "Framer", icon: framer_logo, description: "Framer is a web builder for creative pros to design and publish stunning sites." },
  { name: "GitHub", icon: github_logo, description: "GitHub is a platform for version control and collaboration using Git repositories." }
];

export type IntegrationType=typeof integrations;

const Integrations = () => {
  return (

    <section className='px-4 py-24 lg:p-24 overflow-hidden'>
        <div className="container">
          <div className='grid lg:grid-cols-2 items-center lg:gap-16'>
             <div>
               <Tag>Integrations</Tag>
            <h2 className='mt-6 text-6xl font-medium'>Plays well with <span className='text-lime-400'>others</span></h2>
            <p className='text-white/50 mt-4 text-lg'>Layers seamlessly connects with your favourite too it easy to plug into any workflow and collaborate platforms</p>
             </div>
           <div>
             <div className='h-[400px] lg:h-[800px] overflow-hidden grid md:grid-cols-2 gap-4 [mask-image:linear-gradient(to_bottom,transparent, black_10%, black_90%,transparent)] mt-8 lg:mt-0'>
               <IntegrationsColumn integrations={integrations}/>
               <IntegrationsColumn integrations={integrations.slice().reverse()}/>
            </div>
           </div>
          </div>
        </div>
    </section>
  )
}

export default Integrations

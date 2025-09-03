import Image from "next/image";
import quantumLogo from '@/assets/images/quantum.svg'
import acmeLogo from '@/assets/images/acme.svg'
import echoValleyLogo from '@/assets/images/echoValley.svg'
import pulseLogo from '@/assets/images/pulse.svg'
import outsideLogo from '@/assets/images/outside.svg'
import apexLogo from '@/assets/images/outside.svg'
import celestialLogo from '@/assets/images/celestial.svg'
import twiceLogo from '@/assets/images/twiceLogo.svg'


const logos = [
  { name: "Quantum", image: quantumLogo },
  { name: "Acme Corp", image: acmeLogo },
  { name: "Echo Valley", image: echoValleyLogo },
  { name: "Pulse", image: pulseLogo },
  { name: "Outside", image: outsideLogo },
  { name: "Apex", image: apexLogo },
  { name: "Celestial", image: celestialLogo },
  { name: "Twice", image: twiceLogo },
];

export default function LogoTicker() {
  return (
   <section className="px-4 pt-24 overflow-x-clip">
    <div className="container">
      <h3 className="text-center text-white/50 text-xl ">Already chosen by these market leaders</h3>
     <div className="overflow-hidden mt-12 [mask-image:linear-gradient(to right, transparent, black 10%, black 90%, transparent)] ">
       <div className="flex gap-24 pr-24">
        {logos.map((i)=>{
          return <Image src={i.image} key={i.name} alt={i.name}/>
        })}
      </div>
     </div>
    </div>
   </section>
  );
}

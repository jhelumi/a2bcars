import Image from "next/image";
import Header from "../../components/header"
import { BrandCarousel } from "../../components/BrandCarousel";
import {ThumbsUpIcon} from "lucide-react"

export default function PopularJOurneys() {
  return (
    
    <div className="min-h-screen  bg-zinc-50 font-sans dark:bg-black">
            <Header userRole="public"  />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
       
        <div className="flex flex-col items-center gap-6 text-center  text-brand-gray sm:items-start sm:text-left">
          
          <h1 className="text-3xl font-semibold leading-10 tracking-tight text-brand-blue dark:text-zinc-50">
           Popular Journeys
          </h1>
         
          <p className="text-lg leading-8 dark:text-zinc-400">
          We provide comfortable, reliable travel for thousands of journeys every year across Buckinghamshire, South Oxfordshire & Hertfordshire. Many of our customers use us regularly for popular routes such as airport transfers, business trips, day travel, and city-to-city journeys.

          <br/><br/>This page provides an overview of the most common journeys our customers book. Below, you can explore links to detailed pages tailored specifically to your pickup location or destination.

         </p>
        <h2 className="text-xl font-semibold leading-10 tracking-tight text-brand-blue dark:text-zinc-50">Why Our Journey Pages Are Helpful</h2>
        <p>Every town and village we cover has slightly different routes, timings, and travel considerations. To make things clearer, we’ve created simple journey pages that show:</p>
         <ul className="list-disc  list-inside ml-4 text-left" >
          <li>The typical route for your area</li>
          <li>Key motorways or roads used</li>
          <li>Travel expectations at different times of day</li>
          <li>Helpful local information</li>
          <li>Airport-specific notes (e.g., terminals, traffic, peak times)</li>          
         </ul>
             
        <p>These pages make it easier for you to understand how your journey will work and what to expect. </p> 
      
      <h2 className="text-xl font-semibold leading-10 tracking-tight text-brand-blue dark:text-zinc-50">Popular Journey Types</h2>
        <p>Customers regularly book us for:</p>
         <ul className="list-disc  list-inside ml-4 text-left" >
          <li>Airport Transfers</li>
          <ul className="list-inside ml-8" >
            <li>Heathrow, Gatwick, Luton, Stansted, London City & Birmingham</li>
          </ul>
          <li>City-to-City Travel</li>
           <ul className="list-inside ml-8" >
            <li>London, Oxford, Birmingham, Cambridge, Reading, Bristol & more</li>
          </ul>
          <li>Long-Distance Travel</li>
           <ul className="list-inside ml-8" >
            <li>Corporate travel, family visits, regional offices, events</li>
          </ul>
          <li>Event & Seasonal Journeys</li>      
          <ul className="list-inside ml-8" >
            <li>Sports events, concerts, weddings, festivals, Christmas travel</li>
          </ul>    
         </ul>
             
        <p>Whether you're travelling for work, family, or leisure, we’ll plan the safest and calmest route for your trip. </p> 
        
        <h2 className="text-xl font-semibold leading-10 tracking-tight text-brand-blue dark:text-zinc-50">How to Use Our Journey Pages</h2>
        <p>How to Use Our Journey Pages</p>
         <ul className="list-disc  list-inside ml-4 text-left" >
          <li>The typical route your driver will take</li>
          <li>Local roads, major motorways, and expected travel flow</li>
          <li>Airport-specific route notes (M25, M4, M40, etc.)</li>
          <li>Helpful guidance on pickup times</li>
          <li>Information about traffic hotspots or peak periods</li>          
         </ul>
             
        <p>These pages are designed to give you confidence, clarity, and peace of mind before you travel. </p>   

       <h2 className="text-xl font-semibold leading-10 tracking-tight text-brand-blue dark:text-zinc-50">Areas We Cover</h2>
        <p>We proudly serve over 100 villages and towns across:</p>
         <ul className="list-disc  list-inside ml-4 text-left" >
          <li>Buckinghamshire</li>
          <li>South Oxfordshire</li>
          <li>Hertfordshire (Aylesbury-side / Tring area)</li>                 
         </ul>
             
        <p>This includes Aylesbury, Thame, Haddenham, Long Crendon, Princes Risborough, Wendover, Tring, and many surrounding areas.
          <br/><br/>
           Your dedicated journey page will reflect your exact area for accuracy.</p> 

         <h2 className="text-xl font-semibold leading-10 tracking-tight text-brand-blue dark:text-zinc-50">Our Vehicles</h2>
        <p>All journeys are carried out in executive vehicles:</p>
         <ul className="list-disc  list-inside ml-4 text-left" >
          <li>Mercedes S-Class</li>
          <li>Mercedes E-Class</li>
          <li>Mercedes V-Class</li>                 
          <li>Mercedes Vito 8-Seater</li> 
         </ul>      
        </div>

      </main>
    </div>
  );
}

import Image from "next/image";
import Header from "../../components/header"
import { BrandCarousel } from "../../components/BrandCarousel";
import {ThumbsUpIcon} from "lucide-react"

export default function City2CityTravel() {
  return (
    
    <div className="min-h-screen  bg-zinc-50 font-sans dark:bg-black">
      
      <Header userRole="public"  />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
       
        <div className="flex flex-col items-center gap-6 text-center  text-brand-gray sm:items-start sm:text-left">
          
          <h1 className="text-3xl font-semibold leading-10 tracking-tight text-brand-blue dark:text-zinc-50">
           City to City Travel
          </h1>
         
          <p className="text-lg leading-8 dark:text-zinc-400">
          When you need to travel between major cities, you want a service that’s comfortable, reliable, and handled with care. Our city-to-city travel service is designed to give you a calm and smooth journey without the stress of trains, parking, or tight schedules. We offer direct, door-to-door travel at a pace that suits you.

          <br/>Whether it’s for business, a family visit, a special event, or simply avoiding the hassle of public transport, A2B Cars makes long-range city travel easy and enjoyable.

         </p>
        <h2 className="text-xl font-semibold leading-10 tracking-tight text-brand-blue dark:text-zinc-50">Why Choose City-to-City Travel With Us</h2>
          
            <ul className="list-disc  list-inside ml-4" >
              <li>Comfortable, Spacious Executive Vehicles</li>
              <li>Professional, Polite, DBS-Checked Drivers</li>
              <li>Direct, Non-Stop Travel Between Your Chosen Cities</li>
              <li>Safe and Calm Driving on Long Motorway Routes</li>
              <li>Clear Communication Throughout Your Journey</li>
              <li>Reliable Scheduling for Early Morning or Late-Night Travel</li>
              <li>A More Relaxed Alternative to Trains or Long Drives</li>              
              </ul>
           
            <p>We’ve been operational since 1999, and many of our customers choose us for regular inter-city travel because they know we do things properly and make their journey feel effortless.</p>

        
        
        <h2 className="text-xl font-semibold leading-10 tracking-tight text-brand-blue dark:text-zinc-50">Popular City-to-City Routes</h2>
        
        <ul className="list-disc  list-inside ml-4">
          <li>London ↔ Oxford</li>
          <li>London ↔ Birmingham</li>
          <li>Oxford ↔ Cambridge</li>
          <li>Aylesbury ↔ London</li>
          <li>Aylesbury ↔ Birmingham</li>
          <li>Aylesbury ↔ Oxford</li>
          <li>Thame ↔ London</li>
          <li>Thame ↔ Reading</li>
          <li>Any other UK city on request</li>
        </ul>

        <p>If your route isn't listed, just ask — we can usually provide it.</p>

        
         <h2 className="text-xl font-semibold leading-10 tracking-tight text-brand-blue dark:text-zinc-50">Our Vehicles</h2>
         <ul className="list-disc  list-inside ml-4">
          <li>Mercedes S-Class</li>
          <li>Mercedes E-Class</li>
          <li>Mercedes V-Class</li>
          <li>Mercedes Vito 8-Seater</li>
          </ul>
   
        <p>All vehicles are licensed by Buckinghamshire Council and kept clean, comfortable, and well-maintained for long motorway journeys.</p>
      
      <h2 className="text-xl font-semibold leading-10 tracking-tight text-brand-blue dark:text-zinc-50">Corporate City-to-City Travel</h2>
       <p>Many of our corporate clients rely on us for regular travel between cities for:</p>
         <ul className="list-disc  list-inside ml-4">
          <li>Meetings</li>
          <li>Conferences</li>
          <li>Office-to-Office Travel</li>
          <li>Staff Transfers</li>
          <li>Client Visits</li>
          </ul>

            <p>We offer smooth, discreet, and reliable travel with simple invoicing and excellent communication.</p>
        </div>

      </main>
    </div>
  );
}

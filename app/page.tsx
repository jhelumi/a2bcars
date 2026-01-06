
import Header from "../components/header"
import { BrandCarousel } from "../components/BrandCarousel";
import {Award} from "lucide-react"
import { ReviewCarousel } from "@/components/Reviews";
import GetQuote from "@/components/GetQuote";

export default function Home() {
  return (
    
    <div className="min-h-screen  bg-zinc-50 font-sans dark:bg-black">
      
      <Header userRole="public"  />
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
       
        <div className="flex flex-col items-center gap-6 text-center  text-brand-gray sm:items-start sm:text-left">
          <BrandCarousel/>
          <h1 className="text-3xl font-semibold leading-10 tracking-tight text-brand-blue dark:text-zinc-50">
            Reliable Airport Transfers & Executive Travel
          </h1>
         
          <p className="text-lg leading-8 dark:text-zinc-400">
          Welcome to A2B Cars. We&apos;re a dedicated team who have been operational since 1999, working every day to give you a smooth, calm, and reliable travel experience. Whether you&apos;re heading to the airport, a business meeting, or a long-distance journey, we always make sure your trip is comfortable, on time, and stress-free.
          <br/>Our drivers are fully licensed, DBS-checked, insured, and experienced. We don&apos;t rush jobs, we don&apos;t overbook, and we don&apos;t send random drivers. When you book with us, we look after your journey properly from start to finish.</p>

        

         <h2 className="flex text-xl font-semibold leading-10 tracking-tight text-brand-blue dark:text-zinc-50"><Award className="h-9 w-9 text-brand-blue"/> Compliance Badges:</h2>
         <ul className="list-disc  list-inside ml-4 text-left">
          <li>Licensed Operator – Buckinghamshire Council</li>
          <li>Fully Insured – Hire & Reward</li>
          <li>Enhanced DBS-Checked Drivers</li>
          <li>Annual Medical & Vehicle Compliance Checks</li>
          <li>Executive-Standard Vehicles</li>
          </ul>

        <h2 className="text-xl font-semibold leading-10 tracking-tight text-brand-blue dark:text-zinc-50">Why Travel With Us</h2>
         <ul className="list-disc  list-inside ml-4 text-left">
          <li>On-time pickups, every time</li>
          <li>Clean, executive vehicles</li>
          <li>Professional, polite drivers</li>
          <li>Safe, comfortable journeys</li>
          <li>Clear communication throughout</li>
          <li>Pre-booked service only (no taxi ranks, no surprises)</li>
          </ul>

        <h2 className="text-xl font-semibold leading-10 tracking-tight text-brand-blue dark:text-zinc-50">Our Services</h2>
         <ul className="list-disc  list-inside ml-4 text-left">
          <li>Airport transfers (all major UK airports)</li>
          <li>Long-distance travel</li>
          <li>City-to-city travel</li>
          <li>Corporate accounts & business travel</li>
          <li>Event and seasonal travel</li>
          
          </ul>

        <h2 className="text-xl font-semibold leading-10 tracking-tight text-brand-blue dark:text-zinc-50">Our Vehicles</h2>
         <ul className="list-disc  list-inside ml-4 text-left">
          <li>Mercedes S-Class</li>
          <li>Mercedes E-Class</li>
          <li>Mercedes V-Class</li>
          <li>Mercedes Vito 8-Seater</li>
          
          
          </ul>

<p>
All vehicles are executive-licensed with Buckinghamshire Council and maintained to a high standard.</p>

<h2 className="text-xl font-semibold leading-10 tracking-tight text-brand-blue dark:text-zinc-50">Trusted by Businesses & Regular Travellers</h2>
         <ul>
          <li>We work with companies, families, and frequent flyers across Buckinghamshire, South Oxfordshire & Hertfordshire. Many of our clients have stayed with us for years because they trust us to do things properly and consistently.</li>
                  
          </ul>

<h2 className="text-xl font-semibold leading-10 tracking-tight text-brand-blue dark:text-zinc-50">Customer Reviews</h2>
         <ul className="list-inside">
          <li>We work with companies, families, and frequent flyers across Buckinghamshire, South Oxfordshire & Hertfordshire. Many of our clients have stayed with us for years because they trust us to do things properly and consistently.</li>
                  
          </ul>
<div className="flex w-full h-120 items-center justify-center">
  <ReviewCarousel/>
</div>

<GetQuote/>

        </div>

      </main>
    </div>
  );
}

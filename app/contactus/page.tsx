import Image from "next/image";
import Header from "../../components/header"
import {Mail, Phone, Hourglass} from "lucide-react"
import Link from "next/link";

export default function ContactUs() {
  return (
    
    <div className="min-h-screen  bg-zinc-50 font-sans dark:bg-black">
      
      <Header userRole="public"  />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
       
        <div className="flex flex-col items-center gap-6 text-center  text-brand-gray sm:items-start sm:text-left">
          
          <h1 className="text-3xl font-semibold leading-10 tracking-tight text-brand-blue dark:text-zinc-50">
           Get in Touch
          </h1>
         
          <p className="text-lg leading-8 dark:text-zinc-400">
          If you’d like a quotation or have any questions, just get in touch with us.

          <br/>We reply quickly and are always happy to help.

         </p>
        <h1 className="text-xl font-semibold leading-10 tracking-tight text-brand-blue dark:text-zinc-50">Contact Details</h1>
          <div className="space-y-3">
              <div className="flex items-center space-x-2">                
                <Phone className="h-4 w-4" />
                <span>Phone:&nbsp;&nbsp; 01844 208125</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                Email: &nbsp;&nbsp; <a href="mailto:info@a2bcars.net">info@a2bcars.net</a>
              </div>
              <div className="flex items-center space-x-2">
                <Link  href="https://www.instagram.com/a2b.cars/"><Image
                        className="dark:invert"
                        src="/whatsapp.svg"
                        alt="Whats App"
                        width={20}
                        height={20}
                      /></Link>
                Whatsapp:&nbsp;&nbsp; <a href="https://wa.me/447435964303">Call me</a>
               
              </div>
              <div className="flex items-center space-x-2">
                <Hourglass className="h-4 w-4" />
                <span>Business Hours: &nbsp;&nbsp; 24/7 (pre-booked journeys only)</span>
              </div>
            </div>
        
        <h1 className="text-xl font-semibold leading-10 tracking-tight text-brand-blue dark:text-zinc-50">Booking a Journey</h1>
        <p>To get a personalised quote, please tell us:</p>         
        <ul className="list-disc  list-inside ml-4 text-left">
          <li>Your pickup address</li>
          <li>Your destination</li>
          <li>Your travel date and time</li>
          <li>Number of passengers</li>
          <li>Any special requirements (child seat, extra luggage, meet-and-greet, etc.)</li>
        </ul>
        <p>We’ll reply with your quotation as soon as possible.</p>       

        <h1 className="text-xl font-semibold leading-10 tracking-tight text-brand-blue dark:text-zinc-50">Corporate Enquiries</h1>
        <p>If your business needs regular travel or you’d like to set up a corporate account, please let us know.
          <br/>We’ll get back to you with options suited to your company.
        </p> 

        <h1 className="text-xl font-semibold leading-10 tracking-tight text-brand-blue dark:text-zinc-50">Find Us Online</h1>
       
        <div className="flex space-x-2 bg-brand-gray p-4">
             <Link href="https://www.facebook.com/a2bcars.net" className="flex items-center space-x-2"><Image
                        className="dark:invert #ffffff"
                        src="/facebook.svg"
                        alt="Vercel logomark"
                        width={20}
                        height={20}
                      /></Link>
                      <Link  href="https://x.com/a2bcars1"><Image
                        className="dark:invert"
                        src="/x.svg"
                        alt="Vercel logomark"
                        width={20}
                        height={20}
                      /></Link>
                      <Link  href="https://www.instagram.com/a2b.cars/"><Image
                        className="dark:invert"
                        src="/instagram.svg"
                        alt="Vercel logomark"
                        width={20}
                        height={20}
                      /></Link>
                     
          </div>

          <h1 className="text-xl font-semibold leading-10 tracking-tight text-brand-blue dark:text-zinc-50">Compliance & Licensing</h1>
          <p>A2B Cars operates as a fully licensed executive private hire service:</p>         
            <ul className="list-disc  list-inside ml-4 text-left">
              <li>Buckinghamshire Council licensed</li>
              <li>Fully insured</li>
              <li>DBS-checked drivers</li>
              <li>Executive vehicles</li>
              <li>Annual inspections and medical compliance</li>
            </ul>


            <h1 className="text-xl font-semibold leading-10 tracking-tight text-brand-blue dark:text-zinc-50">Please Read</h1>
          <p>For full transparency, please review our:</p>         
            <ul className="list-disc  list-inside ml-4 text-left">
              <li>[Terms & Conditions]</li>
              <li>[Privacy Policy]</li>
              
            </ul>
          

        </div>

      </main>
    </div>
  );
}

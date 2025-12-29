import Header from "../../components/header"


export default function Fleet() {
  return (
    
    <div className="min-h-screen  bg-zinc-50 font-sans dark:bg-black">
       <Header userRole="public"  />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
       
        <div className="flex flex-col items-center gap-6 text-center  text-brand-gray sm:items-start sm:text-left">
          
          <h1 className="text-3xl font-semibold leading-10 tracking-tight text-brand-blue dark:text-zinc-50">
           Our Fleet
          </h1>
         
          <p className="text-lg leading-8 dark:text-zinc-400">
          At A2B Cars, we use a selected range of high-quality executive vehicles to ensure every journey feels smooth, calm, and comfortable. All our vehicles are licensed by Buckinghamshire Council and kept to a clean, professional standard.

          <br/>Whether you&apos;re travelling to the airport, heading to a business meeting, or planning a long-distance journey, our fleet is designed to give you a reliable and peaceful travel experience.

         </p>
        <h1 className="text-xl font-semibold leading-10 tracking-tight text-brand-blue dark:text-zinc-50">Mercedes S-Class — Executive Luxury</h1>
        <p>The Mercedes S-Class is ideal for customers who want the highest level of comfort, space, and refinement.</p>
         <ul className="list-disc  list-inside ml-4 text-left" >
          <li>Exceptional Comfort for Long Journeys</li>
          <li>Smooth, Quiet Driving Experience</li>
          <li>Extra Legroom</li>
          <li>Premium Interior Finish</li>
          <li>Perfect for Corporate Travel and Special Occasions</li>          
         </ul>
      
        <span className="text-md font-semibold mb-0 p-0">Luggage Capacity:</span>
         <ul className="list-disc  list-inside mt-0 text-left">
          <li>2 large suitcases + 2 cabin bags</li>
        </ul>

        <h1 className="text-xl font-semibold leading-10 tracking-tight text-brand-blue dark:text-zinc-50">Mercedes E-Class — Executive Comfort</h1>
        <p>Our Mercedes E-Class offers a smart, professional, and comfortable experience for everyday executive travel.       
        </p> 
        <ul className="list-disc  list-inside ml-4 text-left" >          
          <li>Clean, Modern Interior</li>
          <li>Comfortable and Spacious Seating</li>
          <li>Ideal for Airport Transfers, Business Trips, and Long-Distance Travel</li>
          <li>Smooth and Quiet Ride</li>
         </ul>          
        
         <span className="text-md font-semibold mb-0 p-0">Luggage Capacity:</span>
           <ul className="list-disc  list-inside ml-4 text-left">
          <li>2 large suitcases + 2 cabin bags</li>
        </ul>
         <h1 className="text-xl font-semibold leading-10 tracking-tight text-brand-blue dark:text-zinc-50">Mercedes V-Class — Group & Premium Travel</h1>
          <p>The Mercedes V-Class is the perfect choice for families, small groups, or corporate teams who need more space with executive comfort.

          </p>

          <ul className="list-disc  list-inside ml-4 text-left" >          
          <li>Seats Up to 6 Passengers in Comfort</li>
          <li>Conference Seating Available</li>
          <li>Excellent Luggage Capacity</li>
          <li>Calm and Spacious Interior</li>
          <li>Ideal for Events, Long-Distance Journeys, and Airport Transfers</li>
         </ul>   
          
        <span className="text-md font-semibold mb-0 p-0">Luggage Capacity:</span>
           <ul className="list-disc  list-inside ml-4 text-left">
          <li>6–7 large suitcases (depending on seating configuration)</li>
        </ul>
         <h1 className="text-xl font-semibold leading-10 tracking-tight text-brand-blue dark:text-zinc-50">Mercedes Vito 8-Seater — Practical Group Travel</h1>
          <p>For larger groups, our Mercedes Vito provides a comfortable and practical option for up to 8 passengers.
          </p>

          <ul className="list-disc  list-inside ml-4 text-left" >          
          <li>Spacious Seating for Group Travel</li>
          <li>Large Luggage Area</li>
          <li>Great for Events, Family Travel, Airport Runs, and Corporate Outings</li>
          <li>Smooth and Reliable Motorway Performance</li>
         
         </ul>   

        <span className="text-md font-semibold mb-0 p-0">Luggage Capacity:</span>
          <ul>
          <li>6–8 large suitcases (depending on configuration)</li>
        </ul>

         <h1 className="text-xl font-semibold leading-10 tracking-tight text-brand-blue dark:text-zinc-50">Safety, Licensing & Compliance</h1>
          <p>Every vehicle in our fleet meets strict executive private hire standards:
          </p>

          <ul className="list-disc  list-inside ml-4 text-left" >          
          <li>Licensed by Buckinghamshire Council</li>
          <li>Fully Insured for Hire & Reward</li>
          <li>Cleaned and Maintained to a High Standard</li>
          <li>Driven by DBS-Checked, Experienced Professionals</li>
          <li>Annual Vehicle and Driver Medical Compliance</li>
        
         </ul>  

         <p>Choose the Right Vehicle for Your Journey
          <br/>Whether you&apos;re travelling alone, with family, or as part of a group, we’ll recommend the best vehicle to ensure comfort and convenience from start to finish.
          </p>
        </div>

      </main>
    </div>
  );
}

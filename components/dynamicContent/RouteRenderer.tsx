/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from 'react';
import dompurify from "dompurify";


interface RendererProps {
  data: string; 
  
}
const RouteRenderer: React.FC<RendererProps> = ({data}) => {  
console.log("data: ", data)
   const sanitizedMarketingMessageHtml = React.useMemo(
    () => 
      {
        const dataWithoutQuotes = data.slice(1,-1).replace(/\\/g, "");
       return  dompurify.sanitize( dataWithoutQuotes ?? "");
      },
    [data]
  );
  return (
    <div>
        {data && <div
          id="marketingMessage"
          dangerouslySetInnerHTML={{
            __html: sanitizedMarketingMessageHtml,
          }}
        />
}

    </div>
  )
}

export default RouteRenderer
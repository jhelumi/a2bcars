"use client";
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { DynamicPageSchema, DynamicPageFormData } from './dynamicContentTypes';
import { zodResolver } from '@hookform/resolvers/zod';
import ReactQuill from 'react-quill-new';

import { Loader2, Send } from 'lucide-react';


import { useRouter } from 'next/navigation';

const toolbarModules = {
  toolbar: [    
    ['bold', 'italic', 'underline',"strike"],
    [{ 'color': [] }, { 'background': []}, 'clean'], 
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
     ["blockquote", "code-block"],
    ['link',"image", "formula"],
    [{ color: [] }, { background: [] }], // dropdown with defaults from theme
     [{ size: ["small", false, "large", "huge"] }], // custom dropdown
      [{ script: "sub" }, { script: "super" }], // superscript/subscript
  [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
  [{ direction: "rtl" }], // text direction
    [{ font: [] }],
    [{ align: [] }],

  ["clean"] // remove formatting button
  ]
}



const DynamicContentForm = () => {
        const [isLoading, setIsLoading] = useState(false);
        const [contentData, setContentData] = useState("");
        const [marketingMessage, setMarketingMessage] = React.useState("");
         const router = useRouter();
    const {
      register,
      handleSubmit,      
      formState: { errors },
    } = useForm<DynamicPageFormData>({
      // Fix: Cast zodResolver to any to fix unrelated type errors between react-hook-form and resolvers
      /* eslint-disable @typescript-eslint/no-explicit-any */
      resolver: zodResolver(DynamicPageSchema) as any,
      defaultValues: {
        pageAddress :"",
        pageTitle: ''        
      },
    });
  
    /* eslint-disable @typescript-eslint/no-explicit-any */
    const onEditorChange = (data:any) => {
      console.log("Rendered Html: ", data)
        setContentData(data);     

  };
   const removeTags = (str: string) => {
    if (!str) return "";
    else return str.replace(/(<([^>]+)>)/gi, "");
  };
    /* eslint-disable @typescript-eslint/no-explicit-any */
    const handleFormSubmit = async (data:any) => {
     
      try {
       console.log("FormData: ", data);
       console.log("Content Data: ", contentData)
        const res = await fetch("/api/ourroutes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ address: data.pageAddress, title: data.pageTitle, seoKeywords: data.pageKeywords, content: contentData }),
      });

      if (res.ok) {
        
        router.refresh();
      }
      } catch (error) {
        console.error("Error fetching quote:", error);
        alert("Failed to calculate quote. Please try again.");
      } finally {
        console.log("")
      }
    };

  return (
     <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
      {
        <>
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">Address</label>
            <input type="text" {...register('pageAddress')} placeholder="please enter a meaningful route address. eg. woking-to-heathrow" className="w-full p-3 rounded-xl border border-slate-200 outline-none focus:ring-1 focus:ring-indigo-600" />
            {errors.pageAddress && <p className="text-xs text-red-500">{errors.pageAddress.message}</p>}
          </div>         
        
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">Title</label>
            <input type="text" {...register('pageTitle')}  placeholder="Please enter the page title" className="w-full p-3 rounded-xl border border-slate-200 focus:ring-1 focus:ring-brand-blue outline-none resize-none" />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">SEO Keywords</label>
            <input type="text" {...register('pageKeywords')}  placeholder="SEO compliance keywords for this page" className="w-full p-3 rounded-xl border border-slate-200 focus:ring-1 focus:ring-brand-blue outline-none resize-none" />
          </div>

         <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">Contents</label>
            
                <ReactQuill theme="snow" modules={toolbarModules} value={contentData} onChange={onEditorChange} className='h-screen max-w-full mb-20' />
              
          </div>
           
        <div>
            <button type="submit" disabled={isLoading} className="w-full bg-brand-blue hover:bg-indigo-700 disabled:bg-indigo-400 text-white font-bold py-4 px-6 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 mt-10">{isLoading ? <Loader2 className="animate-spin w-5 h-5" /> : <><Send className="w-5 h-5" /> Submit</>}
      </button>
        </div>
      </>
      }
      </form>
  )
}

export default DynamicContentForm

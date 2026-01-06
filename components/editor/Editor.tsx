"use client"
import React, { memo, useEffect, useRef, useState} from 'react'
import EditorJS from '@editorjs/editorjs'
import { EDITOR_JS_TOOLS } from './Tools'

interface EditorProps {
  data: object;
  onChange?: (outputdata) => void;
  readOnly?: boolean;
  
}

const Editor : React.FC<EditorProps> = ({ data, onChange, readOnly }) => {
    const [isMounted, setIsMounted] = useState(false);    
    const ref = useRef<EditorJS>(undefined)    
        
    
    const initializeEditor = async () =>{    
        const EditorJS = (await import("@editorjs/editorjs")).default;   
        if(!ref.current)
        {
            const editor = new EditorJS({
                holder: "editorjs",
                tools: EDITOR_JS_TOOLS,
                readOnly:readOnly ?? true,
                data : data && JSON.parse(data.data?.toString()),
                async onChange(api, event) {
                    const data = await api.saver.save();                   
                    if(onChange) onChange(data);
                },
            });
            ref.current = editor;
        }
    }

    useEffect (() => {
        if (typeof window !== "undefined") {
            setIsMounted(true);
        }
    }, [])

    useEffect(() => {

        const init = async () =>{
            await initializeEditor();
        }
        if (isMounted) {
            init();
        return  () => {
            if (ref.current)
                {
                    ref.current.destroy();
                    
                }
            };
            
        }
    },[isMounted]);


    return (
     
     <div id={"editorjs"} className={readOnly ? "w-full" : "w-full rounded-xl border border-slate-200 focus:ring-1 focus:ring-brand-blue outline-none resize-none  min-h-screen"} />
    
    )
};


export default memo(Editor)
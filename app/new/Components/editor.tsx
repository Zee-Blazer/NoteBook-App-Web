"use client";

import { useEffect, useRef, useState } from "react";
import EditorJS from "@editorjs/editorjs";
import Header from '@editorjs/header';
import CodeTool from '@editorjs/code'
import OutputEditor from "./output-editor";

export default function Editor() {

    const [isMounted, setIsMounted] = useState(false);
    const [content, setContent] = useState<string>();
    const ref = useRef<EditorJS>();

    const initializeEditor = async () => {
        const EditorJS = (await import("@editorjs/editorjs")).default;
        const Table = (await import("@editorjs/table")).default;
        const List = (await import("@editorjs/list")).default;
        const Image = (await import("@editorjs/image")).default;

        if(!ref.current){
            const editor = new EditorJS({
                holder: "editorjs",
                tools: {
                    header: {
                        class: Header,
                        config: {
                            placeholder: 'Enter a header',
                            levels: [2, 3, 4],
                            defaultLevel: 3
                        }
                    },
                    table: Table,
                    list: List,
                    code: CodeTool,
                    image: {
                        class: Image,
                        config: {
                            endpoints: {
                                byFile: 'http://localhost:3000/uploadFile', 
                                byUrl: 'http://localhost:3000/fetchUrl', 
                            }
                        }
                    },
                },
            });
            ref.current = editor;
        }
    }

    useEffect( () => {
        if(typeof window !== "undefined"){
            setIsMounted(true);
        }
    }, [] );

    useEffect( () => {
        const init = async () => {
            await initializeEditor();
        };

        if(isMounted){
            init();

            return () => {
                if(ref.current){
                    ref.current.destroy();
                }
            }
        }
    }, [isMounted] )

    const save = () => {
        if(ref.current){
            ref.current.save().then( outputData => {
                console.log("Doing well")
                console.log("Article data: ", outputData);
                setContent(JSON.stringify(outputData));
                console.log("Done")
                // alert(JSON.stringify(outputData));
            } )
        }
    }

    return (
        <div>
            <div id="editorjs" className=" bg-gray-400 max-w-full min-h-5/6"></div>
            <button onClick={ save }>Save</button>
            {
                content && <OutputEditor 
                    content={ content }
                />
            }
        </div>
    )
}

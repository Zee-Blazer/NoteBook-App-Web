"use client";

import { FC } from "react";
import dynamic from "next/dynamic";

// Component
// import OutputCont from "./output";

const Output = dynamic(
    async () => (await import("editorjs-react-renderer")).default, { ssr: false }
);

interface EditorOutputProps {
    content: any
}

const style = {
    paragraph: {
        fontSize: "0.875rem",
        lineHeight: "1.25rem"
    }
};

const OutputEditor: FC<EditorOutputProps> = ({ content }) => {

    return (
        <div>
            <Output
                style={ style }
                className="text-sm"
                data={ JSON.parse(content) }
            />
        </div>
    )
}

export default OutputEditor;

import React, { ReactNode } from "react";

interface Props {
    children?: ReactNode
}

export default function LeftContainer({ children, ...props }: Props) {

    return (
        <div className="lg:w-1/5 p-4 border-r border-gray-300 overflow-y-auto">
            { children }
        </div>
    )
}

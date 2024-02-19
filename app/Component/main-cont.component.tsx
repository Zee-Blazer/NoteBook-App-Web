import React, { ReactNode } from "react";

interface Props {
    children?: ReactNode
}

export default function MainContainer({ children, ...props }: Props) {

    return (
        <div className="lg:flex h-screen bg-gray-100 block">
            { children }
        </div>
    )
}

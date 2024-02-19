import React, { ReactNode } from "react";

interface Props {
    children?: ReactNode
}

export default function RightContainer({ children, ...props }: Props) {

    return (
        <div className="lg:w-4/5 p-4">
            { children }
        </div>
    )
}

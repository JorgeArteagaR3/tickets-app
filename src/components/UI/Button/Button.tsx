import React from 'react'
import clsx from "clsx";

export default function Button({
    children,
    className,
    ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            className={clsx("rounded-full text-xs py-2 px-3", className)}
            {...rest}
        >
            {children}
        </button>
    );
}

import clsx from "clsx";
import React from "react";

export default function Card({
    children,
    className,
    ...props
}: React.HtmlHTMLAttributes<HTMLElement>) {
    return (
        <article
            {...props}
            className={clsx(
                "rouded-5 shadow-sm overflow-hidden rounded-xl h-44 md:h-48",
                className
            )}
        >
            {children}
        </article>
    );
}

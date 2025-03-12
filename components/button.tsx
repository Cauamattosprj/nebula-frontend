import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const button = cva("px-12 py-1 font-bold rounded-full", {
    variants: {
        intent: {
            primary: [
                "bg-white",
                "text-accent",
                "border-accent",
                "border-[1px]",
                "shadow-[0_0_30px_2px]",
            ],
            secondary: ["bg-red-500", "text-white", "border-transparent"],
        },
    },
    defaultVariants: {
        intent: "primary",
    },
});

export interface ButtonProps
    extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "disabled">,
        VariantProps<typeof button> {}

export const Button: React.FC<ButtonProps> = ({
    className,
    intent,

    ...props
}) => <button className={button({ intent, className })} {...props} />;

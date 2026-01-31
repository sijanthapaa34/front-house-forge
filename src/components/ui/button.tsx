import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl hover:-translate-y-0.5 rounded-lg",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 rounded-lg",
        outline:
          "border border-border bg-transparent hover:bg-secondary hover:border-primary/50 text-foreground rounded-lg",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-lg",
        ghost: 
          "hover:bg-secondary hover:text-foreground rounded-lg",
        link: 
          "text-primary underline-offset-4 hover:underline",
        hero:
          "bg-primary text-primary-foreground font-semibold shadow-lg hover:shadow-[0_0_40px_-8px_hsl(38,70%,55%)] hover:-translate-y-1 hover:bg-primary/95 rounded-xl",
        heroOutline:
          "border-2 border-foreground/20 bg-transparent text-foreground hover:border-primary hover:text-primary font-semibold rounded-xl",
        nav:
          "bg-transparent text-foreground hover:text-primary font-medium",
        gold:
          "bg-gradient-to-r from-primary via-amber-400 to-primary text-primary-foreground font-semibold shadow-lg hover:shadow-[0_0_50px_-10px_hsl(38,70%,55%)] hover:-translate-y-1 bg-[length:200%_100%] hover:bg-right transition-all duration-500 rounded-xl",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 px-4 text-xs",
        lg: "h-14 px-10 text-base",
        xl: "h-16 px-12 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };

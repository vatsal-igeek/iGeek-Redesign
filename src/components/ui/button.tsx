import * as React from "react";
import clsx from "clsx";

type ButtonVariant = "primary" | "outline";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  rightIcon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      rightIcon,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={clsx(
          "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200",
          "focus:outline-none focus:ring-2 focus:ring-offset-2",
          "disabled:cursor-not-allowed disabled:opacity-60",
          {
            "bg-button-primary text-text-white hover:bg-button-hover focus:ring-(--color-button-primary)":
              variant === "primary",

            "border border-(--color-stroke-tertiary) text-button-hover	 hover:bg-background-secondary focus:ring-(--color-stroke-tertiary)":
              variant === "outline",
          },
          {
            "h-9 px-4 text-sm": size === "sm",
            "h-11 px-6 text-base": size === "md",
            "px-4.5 py-3 text-base": size === "lg",
          },

          className
        )}
        {...props}
      >
        {children}
        {rightIcon && (
          <span className="ml-1 flex items-center">{rightIcon}</span>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

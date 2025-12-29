import * as React from "react";
import clsx from "clsx";

type ButtonVariant = "primary" | "outline" | "toggle" | "tag";

type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  rightIcon?: React.ReactNode;
  isActive?: boolean; // NEW
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      rightIcon,
      isActive = false,
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
          "focus:outline-none ",
          "disabled:cursor-not-allowed disabled:opacity-60",

          // Variants
          {
            "bg-button-primary text-text-white hover:bg-button-hover focus:ring-(--color-button-primary)":
              variant === "primary",

            "border border-border-secondary text-text-tag hover:bg-background-secondary focus:ring-(--color-stroke-tertiary)":
              variant === "outline",

            "text-text-primary focus:ring-(--color-button-active)":
              variant === "toggle",

            "bg-button-tag text-button-text-light hover:bg-button-hover focus:ring-(--color-button-button-tag)":
              variant === "tag",
          },

          // Toggle active / inactive states
          variant === "toggle" &&
            (isActive
              ? "bg-(--color-button-active) text-white"
              : "bg-button-inactive text-text-secondary hover:bg-background-tertiary"),

          // Sizes
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

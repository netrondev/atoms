import { type InputHTMLAttributes, type DetailedHTMLProps } from "react";
import { cn } from "./cn";

export function Input(
  props: DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >,
) {
  return (
    <input
      {...props}
      value={props.value}
      className={cn(
        "accent-primary-500 rounded border border-neutral-300 bg-white p-2 focus:border-blue-400 focus:outline-none",
        "dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200",
        props.disabled && "opacity-30",
        props.className,
      )}
    />
  );
}

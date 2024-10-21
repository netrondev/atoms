import { type DetailedHTMLProps, type SelectHTMLAttributes } from "react";
import { cn } from "./cn";
import { Loading } from "./Loading";

export function Select(
  props: DetailedHTMLProps<
    SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  > & { loading?: boolean },
) {
  const { loading, ...rest } = props;

  return (
    <>
      <select
        {...rest}
        className={cn(
          "accent-primary-500 rounded border border-neutral-300 bg-white p-2 focus:border-blue-400 focus:outline-none",
          props.className,
        )}
      />
      {loading && <Loading />}
    </>
  );
}

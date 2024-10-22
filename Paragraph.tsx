import { ButtonHTMLAttributes, DetailedHTMLProps, HTMLAttributes } from "react";

export function Paragraph(
  props: DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  >,
) {
  return <p {...props} />;
}

export function P(
  props: DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  >,
) {
  return <Paragraph {...props} />;
}

"use client";

import { ReactNode } from "react";

import styles from "./styles.module.scss";

export const Button = ({
  tagName = "button",
  href,
  children,
  ariaLabel,
  customClass,
  onClick = () => {},
}: {
  tagName?: "button" | "a";
  href?: string;
  ariaLabel?: string;
  customClass?: string;
  children: ReactNode;
  onClick?: () => void;
}) => {
  const Component = tagName;

  return (
    <Component
      href={href}
      aria-label={ariaLabel}
      className={`${styles.button} ${customClass}`}
      onClick={onClick}
    >
      {children}
    </Component>
  );
};

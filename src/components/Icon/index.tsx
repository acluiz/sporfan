"use client";

import { useEffect, useState } from "react";

import styles from "./styles.module.scss";

export const Icon = ({
  name,
  color,
  size,
}: {
  name: string;
  color: string;
  size: string;
}) => {
  const [svgContent, setSvgContent] = useState("");

  useEffect(() => {
    fetch(`/icons/${name}.svg`)
      .then((res) => res.text())
      .then((data) => setSvgContent(data));
  }, [name]);

  return (
    <div
      className={`
        ${styles.icon} 
        ${styles[`icon--${color}`]}
        ${styles[`icon--${size}`]}
      `}
      dangerouslySetInnerHTML={{ __html: svgContent }}
    />
  );
};

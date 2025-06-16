import React from "react";

interface StyleSheet {
  fontFamily: string;
}

interface BoxProps {
  children: React.ReactNode;
  tag: any;
  styleSheet: StyleSheet;
}

export default function Box({ children, styleSheet, tag }: BoxProps) {
  const Tag = tag || "div";

  return <Tag style={styleSheet}>{children}</Tag>;
}

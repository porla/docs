import React from "react";
import styles from "./styles.module.css";

export default function Since({ children }: { children: React.ReactNode }) {
  return (
    <span className={styles.since} title={`Added in ${children}`}>
      {children}
    </span>
  );
}

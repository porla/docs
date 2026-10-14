import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type Kind = "changed" | "deprecated";

const LABELS: Record<Kind, string> = {
  changed: "Changed in",
  deprecated: "Deprecated in",
};

function VersionNote({
  kind,
  version,
  extra,
  children,
}: {
  kind: Kind;
  version: string;
  extra?: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <div className={clsx(styles.note, styles[kind])} data-kind={kind} data-version={version}>
      <span className={styles.badge}>
        {LABELS[kind]} {version}
      </span>
      {(children || extra) && (
        <div className={styles.text}>
          {children}
          {extra}
        </div>
      )}
    </div>
  );
}

// <Changed in="v0.51.1">Now returns a table: `[1]` is the IP, `[2]` the port.</Changed>
export function Changed({ in: version, children }: { in: string; children?: React.ReactNode }) {
  return <VersionNote kind="changed" version={version}>{children}</VersionNote>;
}

// <Deprecated in="v0.52.0" use="write_header" removal="v1.0.0" />
export function Deprecated({
  in: version,
  use,
  removal,
  children,
}: {
  in: string;
  use?: string;
  removal?: string;
  children?: React.ReactNode;
}) {
  const extra = (use || removal) && (
    <span>
      {use && <>Use <code>{use}</code> instead.</>}
      {use && removal && " "}
      {removal && <>Will be removed in {removal}.</>}
    </span>
  );

  return <VersionNote kind="deprecated" version={version} extra={extra}>{children}</VersionNote>;
}
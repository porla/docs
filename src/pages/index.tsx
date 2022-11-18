import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button button--lg margin-right--md"
            to="/install/docker">
            Install now ⚡️
          </Link>
          <Link
            className={"button button--outline button--secondary button--md"}
            to="/introduction"
          >
            Learn more
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="A high performance BitTorrent client">
      <HomepageHeader />
      <main style={{textAlign: "center"}}>
        <img src="/img/porla-wnd.png" style={{maxWidth: "1024px"}} />
      </main>
    </Layout>
  );
}

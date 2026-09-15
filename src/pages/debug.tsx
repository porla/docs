import React, { useEffect } from 'react';
import Layout from '@theme/Layout';

export default function Hello() {
  useEffect(() => {
    const initSQLite = async () => {
      try {
        const sqlite3InitModule = await import('@sqlite.org/sqlite-wasm');
        const sqlite3 = await sqlite3InitModule.default();
      } catch (err) {
        console.error(err);
      }
    };
    initSQLite();
  }, []);

  return (
    <Layout title="Hello" description="Hello React Page">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '20px',
        }}>
        <p>
          Edit <code>pages/helloReact.js</code> and save to reload.
        </p>
      </div>
    </Layout>
  );
}
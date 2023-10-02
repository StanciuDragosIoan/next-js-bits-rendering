import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>NextJS Rendering Methods</title>
        <meta name="description" content="NextJS Rendering Methods" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <Link href="https://nextjs.org">Next.js!</Link> rendering
          project!
        </h1>

        <p className={styles.description}>
          Check the below links and the
          <code className={styles.code}>/pages</code> directory
        </p>

        <div className={styles.grid}>
          <Link href="/ssg" className={styles.card} target="_blank">
            <h2>SSG &rarr;</h2>
            <p>
              Find in-depth information about Statically Generated Pages in
              NextJS.
            </p>
          </Link>

          <Link href="/ssghttp" className={styles.card}>
            <h2>SSG with data fetch &rarr;</h2>
            <p>
              Learn how NextJS allows you to fetch data and inject it in
              statically generated pages
            </p>
          </Link>

          <Link href="/ssr" className={styles.card}>
            <h2>SSR &rarr;</h2>
            <p>All you need to know about Server Side Rendering.</p>
          </Link>

          <Link href="/isr" className={styles.card}>
            <h2>ISR &rarr;</h2>
            <p>
              Learn about Incremental Static Generation and data revalidation
            </p>
          </Link>

          <Link href="/csr" className={styles.card}>
            <h2>CSR &rarr;</h2>
            <p>
              Last but not least comes Client Side Rendering (never forget the
              basics!)
            </p>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <Link
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </Link>
      </footer>
    </div>
  );
}

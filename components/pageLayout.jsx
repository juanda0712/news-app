import Head from 'next/head';
import Link from 'next/link';

export default function PageLayout({ children, title = 'NewsApp' }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="The best news page in the world" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <nav>
          <div>
            <Link href="/">News App</Link>
          </div>
          <div>
            <ul>
              <li>
                <Link href="/about">About</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <main>{children}</main>
    </>
  );
}

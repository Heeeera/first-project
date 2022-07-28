import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import mainImage from '../public/main.png';

export const siteTitle = 'Heera Choi';

export default function Layout({ children, name, img }) {
  return (
    <div className="container mx-auto">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          property="og:description"
          content="Welcome to my home!"
        />
        <meta
          property="og:image"
          content={mainImage}
        />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <header>
        <div className="flex flex-col items-center">
          <Image
            priority
            src={img}
            className="rounded-full"
            height={144}
            width={144}
            alt={name}
          />
          <h1 className="text-4xl font-extrabold tracking-tighter my-4">{name}</h1>
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
}
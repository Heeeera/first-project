import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import profile from '../public/profile.jpg';
import mainImage from '../public/main.png';

const name = 'Heera Choi';
export const siteTitle = 'Heera Choi';

export default function Layout({ children, home }) {
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
        {home ? (         
          <div className="flex flex-col items-center">
            <Image
              priority
              src={profile}
              className="rounded-full"
              height={144}
              width={144}
              alt={name}
            />
            <h1 className="text-4xl font-extrabold tracking-tighter my-4">{name}</h1>
          </div>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src={profile}
                  className="rounded-full"
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className="text-3xl my-4">
              <Link href="/">
                <a className="text-inherit">{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
    </div>
  );
}
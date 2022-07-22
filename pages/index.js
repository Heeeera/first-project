import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import Button from '../components/Button';
import gitLogo from '../public/github.png';

export default function Home() {
  const menu = ["💁‍♀️About Me", "🎶Favorites","💖I'm seoyoung"];
  const url = ["/aboutMe", "/favorite", "/seoyoung"];

  return (
    <div className="flex items-center min-h-screen">
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className="flex flex-col items-center text-lg my-4">
          <p className="mb-5">Hello, Welcome to my home!</p>
          <p>👋👋👋</p>
          <div className="pb-5">{menu.map((data, idx) => <Button key={idx} name={data} url={url[idx]}/>)}</div>
          <Link href="https://github.com/Heeeera" passHref>
            <a className="pt-3"><Image src={gitLogo} height='49' width='49' alt="git"/></a>
          </Link>
        </section>
      </Layout>
    </div>
  );
}
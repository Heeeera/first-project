import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import Button from '../components/Button';
import utilStyles from '../styles/utils.module.css';
import gitLogo from '../public/github.png';

export default function Home() {
  const menu = ["💁‍♀️About Me", "🎶Favorites"];
  const url = ["/information", "/favorite"];

  return (
    <div style={{minHeight:'100vh', display:'flex', alignItems: 'center'}}>
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className={utilStyles.headingMd}>
          <p>Hello, Welcome to my home!</p>
          <p>👋👋👋</p>
          <div style={{paddingBottom: '20px'}}>{menu.map((data, idx) => <Button key={idx} name={data} url={url[idx]}/>)}</div>
          <Link href="https://github.com/Heeeera" passHref>
            <a style={{paddingTop:'10px'}}><Image src={gitLogo} height='49' width='49' alt="git"/></a>
          </Link>
        </section>
      </Layout>
    </div>
  );
}
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import Button from '../components/Button';
import utilStyles from '../styles/utils.module.css';
import gitLogo from '../public/github.png';
export default function Home() {
  const menu = ["💁‍♀️기본 정보", "🎶좋아하는 것"];
  const url = ["/information", "/favorite"];

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>안녕하세요. 저의 사이트에 오신 것을 환영합니다.</p>
        <p>👋👋👋</p>
        <div className={utilStyles.button}>{menu.map((data, idx) => <Button key={idx} name={data} url={url[idx]}/>)}</div>
        {/* <div style={{fontSize:'15px', padding: '20px'}}>📧 heeeeera5487@gmail.com</div> */}
        <Link href="https://github.com/Heeeera" passHref>
          <a><Image src={gitLogo} height='49' width='49' alt="git"/></a>
        </Link>
      </section>
    </Layout>
  );
}
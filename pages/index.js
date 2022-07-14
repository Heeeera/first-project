import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Button from '../components/Button';

export default function Home() {
  const menu = ["💁‍♀️기본 정보", "🎶좋아하는 것", "📝방명록"];

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>안녕하세요. 저의 사이트에 오신 것을 환영합니다.</p>
        <p>👋👋👋</p>
        <div className={utilStyles.button}>{menu.map(idx => <Button name={idx}/>)}</div>
      </section>
    </Layout>
  );
}
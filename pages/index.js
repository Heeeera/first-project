import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import Layout, { siteTitle } from '../components/layout';
import Button from '../components/Button';
import gitLogo from '../public/github.png';

export const Container = styled.div`
  background-color: #FFDEB4;
  font-family: "Arial", sans-serif;
`;

const ContentContainer = styled.div`
  background-color: #FFB4B4;
  border-radius: 30px;
  min-height: 30vh;
  padding: 0.5rem;
  max-width: 600px;
  margin: 0 auto;
  @media screen and (max-width: 500px){
    max-width: 80vw;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 500px){
    max-width: 80vw;
    flex-direction: column;
`;

export default function Home() {
  const menu = ["💁‍♀️About Me", "🎶Favorites","💖I'm seoyoung"];
  const url = ["/aboutMe", "/favorite", "/seoyoung"];

  return (
    <Container>
      <div className="flex items-center min-h-screen">
        <Layout home>
          <Head>
            <title>{siteTitle}</title>
          </Head>
          <ContentContainer>
            <section className="flex flex-col items-center text-lg my-4">
              <p className="mb-5">Hello, Welcome to my home!</p>
              <p>👋👋👋</p>
              <ButtonContainer>{menu.map((data, idx) => <Button key={idx} name={data} url={url[idx]}/>)}</ButtonContainer>
            </section>
          </ContentContainer>
          <div className="flex flex-col items-center">
            <Link href="https://github.com/Heeeera" passHref>
              <a className="pt-3"><Image src={gitLogo} height='49' width='49' alt="git"/></a>
            </Link>
          </div>
        </Layout>
      </div>
    </Container>
  );
}
import Head from 'next/head';
import styled from 'styled-components';
import Layout from '../components/layout';
import Button from '../components/Button';
import { ContentContainer } from './index';
import profile from '../public/profile.jpg';

const AboutContainer = styled(ContentContainer)`
    padding: 1.5rem 0;
`;  

function AboutMe() {
    const name = "Heera Choi"
    return (
        <div className="min-h-screen max-w-screen mx-auto flex flex-col">
            <div className="flex items-center justify-center h-24 text-2xl font-extrabold">
                <div> 💁‍♀️About Me</div>
            </div>
            <Layout name={name} img={profile}>
                <AboutContainer>
                    <div className="text-base font-semibold text-center pb-8">
                        <div>Handong Global University</div>
                        <div>School of Global Entrepreneurship and ICT</div>
                    </div>                
                    <section className="flex flex-col items-center">
                        <div className="text-sm font-semibold py-3">Major</div>
                        <div>ICT Convergence / Visual and Performing Arts</div>
                        <div className="text-sm font-semibold py-3">Skills</div>
                        <div>💻 Python, Javascript, HTML, CSS</div>
                        <div>📽️ Premiere Pro, After Effects</div>
                    </section>
                </AboutContainer>
                <div className="flex justify-center items-center pt-5"><Button name="Home" url="/"/></div>
            </Layout>
        </div>
    );
};

export default AboutMe;
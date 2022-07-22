import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/layout';
import Button from '../components/Button';
import profile_jsy from '../public/profile_jsy.jpg';
import gitLogo from '../public/github.png';

function Seoyoung() {
    return (
        <div className="min-h-screen max-w-screen mx-auto flex flex-col">
            <div className="flex items-center justify-center h-24 text-2xl font-extrabold">
                <div> 💖I am seoyoung</div>
            </div>
            <div className="flex flex-col items-center">
                <Image className="rounded-full"
                    src={profile_jsy}
                    height={144}
                    width={144}
                    alt="img"
                />
                <div className="text-base font-semibold text-center py-8">
                    <div>Handong Global University</div>
                    <div>School of Global Entrepreneurship and ICT</div>
                </div>                
                <section className="flex flex-col items-center">
                    <div className="text-sm font-semibold py-3">Major</div>
                    <div>ICT Convergence / UX Engineering</div>
                    <div className="text-sm font-semibold py-3">Skills</div>
                    <div>💻 Python, Javascript, HTML, CSS</div>
                    <div>📽️ Figma, Illustrator, Photoshop, Unity</div>
                </section>
                <Link href="https://github.com/JeeSeoyoung" passHref>
                    <a className="pt-5"><Image src={gitLogo} height='49' width='49' alt="git"/></a>
                </Link>
                <div className="flex justify-center items-center"><Button name="Home" url="/"/></div>
            </div>
        </div>
    );
};

export default Seoyoung;
import Head from 'next/head';
import Layout from '../components/layout';
import Button from '../components/Button';
import utilStyles from '../styles/utils.module.css';
import profile_jsy from '../public/profile_jsy.jpg';
import Image from 'next/image';
import styles from '../components/layout.module.css';
import Link from 'next/link';
import gitLogo from '../public/github.png';

function Seoyoung() {
    return (
        <div className={utilStyles.mainContainer}>
            <div style={{minHeight:'15vh'}} className={utilStyles.favContainer}>
                <div> 💖I am seoyoung</div>
            </div>
            <div className={styles.container}>
                <Image className={utilStyles.borderCircle}
                    src={profile_jsy}
                    height={144}
                    width={144}
                    alt="img"
                />
                <div className={utilStyles.contentTitle}>Handong Global University<br/>
                School of Global Entrepreneurship and ICT</div><br/>
                
                <section className={utilStyles.contents}>
                    <div className={utilStyles.contentTitle}>Major</div>
                    <div>ICT Convergence / UX Engineering</div>
                    <div className={utilStyles.contentTitle}>Skills</div>
                    <div>💻 Python, Javascript, HTML, CSS</div>
                    <div>📽️ Figma, Illustrator, Photoshop, Unity</div>
                </section>
                <Link href="https://github.com/JeeSeoyoung" passHref>
                    <a style={{paddingTop:'10px'}}><Image src={gitLogo} height='49' width='49' alt="git"/></a>
                </Link>
                <div className={utilStyles.homeButton}><Button name="Home" url="/"/></div>
            </div>
        </div>
    );
};

export default Seoyoung;
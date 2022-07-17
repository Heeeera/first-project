import Head from 'next/head';
import Layout from '../components/layout';
import Button from '../components/Button';
import utilStyles from '../styles/utils.module.css';


function Information() {
    return (
        <div className={utilStyles.mainContainer}>
            <div style={{minHeight:'15vh'}} className={utilStyles.favContainer}>
                <div> 💁‍♀️About Me</div>
            </div>
            <Layout home>
                <div className={utilStyles.contentTitle}>School of Global Entrepreneurship and ICT</div><br/>
                <section className={utilStyles.contents}>
                    <div className={utilStyles.contentTitle}>Major</div>
                    <div>ICT Convergence / Visual and Performing Arts</div>
                    <div className={utilStyles.contentTitle}>Skills</div>
                    <div>💻 Python, Javascript, HTML, CSS</div>
                    <div>📽️ Premiere Pro, After Effects</div>
                </section>
                <div className={utilStyles.homeButton}><Button name="Home" url="/"/></div>
            </Layout>
        </div>
    );
};

export default Information;
import Link from 'next/link';
import utilStyles from '../styles/utils.module.css';

function Button({name, url}) {

    return (
        <Link href={url} passHref>
            <button className={utilStyles.button}>{name}</button>
        </Link>
    );
};

export default Button;
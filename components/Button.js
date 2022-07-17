import Link from 'next/link';

function Button({name, url}) {

    return (
        <Link href={url} passHref>
            <button
                style={{
                    width: '150px',
                    height: '50px',
                    backgroundColor: 'white',
                    border: '2px solid darkgray',
                    borderRadius: '10px',
                    margin: '10px',
                    marginTop: '10px',
                    fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
                    fontSize: '16px'
                }}
            >{name}</button>
        </Link>
    );
};

export default Button;
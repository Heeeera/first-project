import Link from 'next/link';

function Button({name, url}) {

    return (
        <Link href={url} passHref>
            <button className="w-40 h-12 bg-white border-2 border-solid border-gray-500 rounded-lg mt-5 mb-2.5 mx-2.5 text-sm" >{name}</button>
        </Link>
    );
};

export default Button;
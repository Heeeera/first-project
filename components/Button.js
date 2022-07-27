import Link from 'next/link';
import styled from 'styled-components';

const StyledButton = styled.button`
    width: 10rem;
    height: 3rem;
    background-color: white;
    border: 2px solid #FFDEB4;
    border-radius: 10px;
    margin: 1.25rem 0.625rem 0.652rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
    &:hover {
        border: 3px solid #B2A4FF;
    } 
`;

function Button({name, url}) {
    return (
        <Link href={url} passHref>
            {/* <button className="w-40 h-12 bg-white border-2 border-solid border-gray-500 rounded-lg mt-5 mb-2.5 mx-2.5 text-sm" >{name}</button> */}
            <StyledButton>{name}</StyledButton>
        </Link>
    );
};

export default Button;
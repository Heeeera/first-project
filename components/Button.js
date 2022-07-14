function Button({name}) {

    return (
        <button
            style={{
                width: '180px',
                height: '50px',
                backgroundColor: 'white',
                border: '2px solid darkgray',
                borderRadius: '10px',
                margin: '10px',
                marginTop: '20px',
                fontFamily: 'NanumSquare'
            }}
        >{name}</button>
    );
};

export default Button;
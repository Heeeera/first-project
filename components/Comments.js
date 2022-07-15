
function Comments({contents}) {
    const reverseData = contents.slice(0).reverse();

    return (
        <>
            {
                reverseData.map((data, idx) => 
                    <p 
                        key={idx}
                        style={{
                            border: '2px solid',
                            borderRadius: '10px',
                            backgroundColor: 'beige'
                        }}
                    >
                        <div
                            style={{
                                fontFamily: 'NanumSquare',
                                fontSize: '16px',
                                fontWeight: 'bold',
                                marginTop: '10px',
                                padding: '10px',
                            }}
                        >{data.name}</div>
                        <div
                            style={{
                                fontFamily: 'NanumSquare',
                                fontSize: '16px',
                                marginBottom: '10px',
                                paddingBottom: '10px',
                                paddingLeft: '10px',
                                paddingRight: '10px'
                            }}  
                        >{data.content}</div>
                    </p>
                )
            }
        </>
    )
    
}

export default Comments;
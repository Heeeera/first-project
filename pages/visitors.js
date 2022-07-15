import React, { useState, useEffect } from 'react';
import Comments from '../components/Comments';

function Visitors() {
    const [name, setName] = useState(null);
    const [comment, setComment] = useState(null);
    const [contents, setContents] = useState([]);
    const [toggle, setToggle] = useState(false);

    const handleOnChange = (e) => {
        const type = e.target.name
        if (type === 'name'){setName(e.target.value)}
        else if (type === 'comment'){setComment(e.target.value)}
    };
    const onSubmit = (e) => {
        e.preventDefault();
        const param = {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({name:name, content: comment})
        };

        fetch('http://localhost:3333/comments', param)
        .then(type => type.json())
        .then(result =>{
          console.log(result);
          setName("");
          setComment("");
        });
        setToggle(!toggle);
    };

    useEffect(() => {
        fetch('http://localhost:3333/comments')
        .then(type => type.json())
        .then(result =>{
        setContents(result);
      });
    }, [toggle])
    
    return (
        <div style={{width: '60%', margin: 'auto', paddingTop: '20px'}}>
            <form
                onSubmit={onSubmit}
            >
                <div>
                    <label>이름　</label>
                    <input
                        name="name"
                        value={name}
                        onChange={handleOnChange}
                        placeholder='  이름(별명)'
                        style={{
                            border: '1px solid gray',
                        }}
                        required
                    />
                </div>
                <br/>
                <div style={{display:'flex', flexDirection:'column'}}>
                    <p>댓글</p>
                    <input
                        name="comment"
                        value={comment}
                        onChange={handleOnChange}
                        placeholder='  내용 입력'
                        style={{
                            border: '1px solid gray',
                            height: '100px'
                        }}
                        required
                    />
                </div>
                <br/>
                <div style={{display:'flex', flexDirection:'column', alignItems: 'center'}}>
                    <button 
                        style={{
                            width:'100px',
                            padding: '8px',
                            borderRadius: '10px',
                            border: '0px',
                            backgroundColor: 'lightblue',
                        }}
                        type='submit'
                    >등록</button>
                </div>
            </form>
            <br/><br/>
            <Comments contents={contents}/>
        </div>
    );
};

export default Visitors;
import React, { useEffect, useState } from 'react'
import { fakeFetch } from '../api/fakeFetch6';

const Comments = () => {
    const[commentsData, setCommentsData] = useState();

    const fetchData = async () => {
        const res = await fakeFetch("https://example.com/api/comments");
        console.log(res)
        const {status, data} = res;
        if(status === 200){
            setCommentsData(data.comments)
        }
    }

    const handleDelete = (index) => {
        setCommentsData((prevComments) =>
          prevComments.filter((i) => i !== index)
        );
      };

      
    useEffect(()=>{
        fetchData();
    },[])
  
      
      return (
        <div>
          <h1>Comments</h1>
          {commentsData?.map(({ name, text }, index) => (
            <div key={index}> {/* Add a unique key for each comment */}
              <h2>{name}</h2>
              <p>{text}</p>
              <button onClick={() => handleDelete(index)}>delete</button>
            </div>
          ))}
        </div>
      );
}

export default Comments;
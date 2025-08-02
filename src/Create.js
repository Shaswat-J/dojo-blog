import { useState } from "react";
import { useHistory } from "react-router-dom";
const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Shaswat');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();


    const handlesubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };
        
        setIsPending(true);
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers:{"Content-type":"application/json"},
            body:JSON.stringify(blog)
        }).then(() => {
            console.log("New blog added");
            setIsPending(false);
            history.push('/');
        });
    }
    return ( 
        <div className="create">
            <h2>Add a new Blog</h2>
            <form onSubmit={handlesubmit}>
                <label>Blog title:</label>
                <input type="text" required
                value ={title} 
                onChange={(e)=>setTitle(e.target.value)}/>
                <label>Blog body:</label>
                <textarea required
                value={body}
                onChange={(e)=>setBody(e.target.value)}></textarea>
                <label>Blog author:</label>
                <select
                value={author}
                onChange={(e)=>setAuthor(e.target.val)}
                >
                    <option value ="Shaswat">Shaswat</option>
                    <option value ="Alex">Alex</option>
                    <option value ="Sam">Sam</option>
                    </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding blog.....</button>}
                <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p>
            </form>
        </div>
     );
}
 
export default Create;
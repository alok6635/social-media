import { useContext, useRef, } from "react";
import { postListStoreData } from "../../store/PostListStore";

const CreatePost = () => {
  const { addpost } = useContext(postListStoreData);

  const inpRef = useRef();
  const textRef = useRef();
  const idRed = useRef();
  const reactionRef = useRef();
  const hashRef = useRef()

  const handleForm = (e) => {
    e.preventDefault();

    fetch('https://dummyjson.com/posts/add',{
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
          title: inpRef.current.value, 
          body: textRef.current.value,
          userId:idRed.current.value,
          reactions:reactionRef.current.value,
          tags:hashRef.current.value.split(' ')
      })
    })
    .then(res=>res.json())
    .then((data)=>addpost(data))

    inpRef.current.value = '',
    textRef.current.value = '';
    idRed.current.value = '';
    reactionRef.current.value='';
    hashRef.current.value='';
  }

  return (
    <>
      <form className="form_cover" onSubmit={handleForm}>
        <div className="mb-3">
          <label className="form-label">Number of user id</label>
          <input type="number" className="form-control" ref={idRed} />
        </div>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input type="text" className="form-control" placeholder="Enter title here" ref={inpRef} />
        </div>
        <div className="mb-3">
          <label className="form-label">Post</label>
          <textarea cols={15} rows={5} placeholder='Enter content here' ref={textRef}></textarea>
        </div>
        <div className="mb-3">
          <label className="form-label">Number of reactions</label>
          <input type="number" className="form-control" ref={reactionRef} />
        </div>
        <div className="mb-3">
          <label className="form-label">Enter hash tag here</label>
          <input type="text" className="form-control" ref={hashRef} />
        </div>

        <button type="submit" className="btn btn-primary">post</button>
      </form>
    </>
  )
}
export default CreatePost;
import { useContext } from "react";
import Posts from "./Posts";
import { postListStoreData } from "../../store/PostListStore";
import Welcome from "../Welcome";


const PostWrap = () => {
    const { postList,loading } = useContext(postListStoreData);

  

    return (
        <>
        {loading && <h2>Loading...</h2>}
            {
             !loading &&  postList.length == 0 && <Welcome/>
            }
            {
               !loading && postList.map((item, index) => <Posts item={item} key={index} index={index}/>)}
        </>
    )
}
export default PostWrap;
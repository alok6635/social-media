import { useContext } from "react";
import { postListStoreData } from "../../store/PostListStore";

const Posts = ({ item, index }) => {
    const { deletepost } = useContext(postListStoreData);

    const handleDelete = (index) => {
        deletepost(index)
    }

    return (
        <>
            <div className="post">
                <div className="card cardgroup">
                    <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">{item.body}</p>
                        <ul className='hash_data'>
                            {
                                item.tags.map((item,index) => {
                                    return <li key={index}>
                                        <button type="button" className="btn btn-primary btn-sm">{item}</button>
                                    </li>
                                })
                            }

                        </ul>
                        <p className='reaction'>this para like {item.reactions} people</p>
                    </div>
                </div>
                <i className="bi bi-trash deleteIcon" onClick={() => handleDelete(index)}></i>
            </div>
        </>
    )
}
export default Posts;
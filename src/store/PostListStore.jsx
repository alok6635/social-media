import { createContext, useEffect, useReducer, useState } from "react";

export const postListStoreData = createContext({
    postList:[],
    addpost:()=>{},
    deletepost:()=>{},
    getDefaultPost:()=>{},
    
})

const postListReducer=(state,action)=>{
   if(action.type == 'ADD POST'){
     return [action.payload,...state]
   }
   else if(action.type=='DELETE'){
      return state.filter((item,id)=>id !==action.payload)
   }
   else if(action.type=='FETCH_DATA'){
       return [...state,...action.payload]
   }
}

const PostStore = ({ children }) => {

    const[postList,dispatch]=useReducer(postListReducer,[]);
     const [loading, setLoading] = useState(false);

    useEffect(()=>{
        const  controler=new AbortController();
        const signal=controler.signal;
        setLoading(true)
        fetch('https://dummyjson.com/posts',{signal})
            .then(res => res.json())
            .then((result) => {
                getDefaultPost(result.posts)
                setLoading(false)
            });
            return(()=>{
                controler.abort();
            })
    },[])


    function addpost(formData){
        dispatch({
            type:'ADD POST',
            payload:formData
        })

      
    }
    function deletepost(index){
       dispatch({
        type:'DELETE',
        payload:index
       })
    }

    const getDefaultPost=(fetchData)=>{
        dispatch({
            type:'FETCH_DATA',
            payload:fetchData
        })
    }


    return (
        <>
            <postListStoreData.Provider value={{
                postList:postList,
                addpost:addpost,
                deletepost:deletepost,
                getDefaultPost,
                loading
                }}>
                {children}
            </postListStoreData.Provider>
        </>
    )
}
export default PostStore;


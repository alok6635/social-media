import { useState } from "react";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import PostWrap from "./components/posts/PostWrap";
import SideBar from "./components/sidebar/SideBar";
import CreatePost from "./components/createpost/CreatePost";
import PostStore from "./store/PostListStore";

const App = () => {
const[tab,setTab]=useState('Home')
  return (
    <>
   <PostStore>
      <Header/>
      <div className="wrapper">
        <SideBar  tab={tab} setTab={setTab}/>
        {tab === 'Home' ? <div className="postWrap"><PostWrap/></div> : <CreatePost/>}
      </div>
      <Footer/>
   </PostStore>
    </>
  )
}
export default App;
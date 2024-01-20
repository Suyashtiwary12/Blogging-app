import './App.css'
import Header from './components/header'
import Sidebar from './components/sidebar'
import Footer from './components/footer'
import Post from './components/post'
import Createblog from './components/createblog'
import "bootstrap/dist/css/bootstrap.min.css"
import { useState } from 'react'
import PostListProvider from './store/post-list-store'
function App() {
  let[currBar,setcurBar]=useState("Home");
  let [Cnt,setcnt]=useState(false);
  return (
    <>
     <PostListProvider>
     <Header Cnt={Cnt} setcnt={setcnt}></Header>
     <div className='sidebar'>
      {(Cnt)?<Sidebar currBar={currBar} setcurBar={setcurBar} />: null}
      <div className="kg-main">
      {(currBar==="Home")? <Post></Post> : <Createblog></Createblog>}
      <Footer></Footer>
      </div>
      </div>
      </PostListProvider>
    </>
  )
}

export default App

import { useEffect, useState } from "react"
import BlogList from './BlogList.js'
function Home() {

    const [blogs,setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
      ])
    
    const handleDelete = (blogId) => {
        setBlogs(blogs.filter(blog => blog.id !== blogId))

    }
    useEffect(()=>{
        console.log("123")   
    },[])


    return (
        <div className="home">
           <BlogList blogs={blogs} title="blogs" handleDelete={handleDelete}/>
        </div>
    )
}
export default Home
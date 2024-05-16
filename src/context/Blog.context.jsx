import { onSnapshot } from "firebase/firestore";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { postColRef } from "../config/firebase.config";



export const BlogContext = createContext()

export const BlogProvider = ({children})=>{

    const [blogs, setBlogs] = useState(null)

    useEffect(()=>{
        return onSnapshot(postColRef, snapshot=>{
            const blog = snapshot.docs.map( elm => {
                return {
                    ...elm.data(),
                    id: elm.id
                }
            })
            setBlogs(blog)
        })
    },[])


    const value = {
        blogs
    }

    return (
        <BlogContext.Provider value={value}>
            {children}
        </BlogContext.Provider>
    )
}


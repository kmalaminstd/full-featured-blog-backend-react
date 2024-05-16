import React, { useContext } from 'react'
import { BlogContext } from '../context/Blog.context'
import { deleteDoc, doc } from 'firebase/firestore'
import { postColRef } from '../config/firebase.config'
import { toast } from 'react-toastify'

function AllPosts() {

  const {blogs} = useContext(BlogContext)

  const deletePost  = async (id)=>{
    const docRef = doc(postColRef, id)
    try{
      await deleteDoc(docRef)
      toast.success("Post Deleted Successfully")
    }catch(err){
      console.log(err);
      toast.error("Something went wrong")
    }
  }


  return (
    <>

      <h2 className="mb-2 mt-0 text-center text-2xl font-medium leading-tight text-primary">All Posts</h2>

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            PostTitle
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Post Image
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Category
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>

                  {
                    blogs && 
                    blogs.map((blog)=>

                      <tr key={blog.id} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                          <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              {blog.postTitle}
                          </th>
                          <td className="px-6 py-4 h-24 w-24">
                              <img src={blog.featureImg} className="object-cover" alt="" />
                          </td>
                          <td className="px-6 py-4 font-bold">
                              {blog.postCategory}
                          </td>

                          <td className="px-6 py-4">
                              <p href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer" onClick={()=>deletePost(blog.id)}>DELETE</p>
                          </td>
                      </tr>
                    )
                  }



                </tbody>
            </table>
        </div>

    </>
  )
}

export default AllPosts
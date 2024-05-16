import {useState, useRef, useMemo, useContext} from 'react'
import JoditEditor from 'jodit-react'
import { postColRef, storage } from '../../config/firebase.config'
import { toast } from 'react-toastify'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { v4 as uuid } from 'uuid'
import { Timestamp, addDoc, serverTimestamp } from 'firebase/firestore'
import {AuthContext} from '../../context/Auth.context'
import { useNavigate } from 'react-router-dom'




function PostForm() {
    const {currentUser} = useContext(AuthContext)
    const editor = useRef(null)
    const navigate = useNavigate()
    const [content, setContent] = useState('')
    const [data, setData] = useState({
        postTitle: '',
        postCategory: ''
    })
    // console.log(currentUser);



    const handleSubmit = (e)=>{
        e.preventDefault()

        const bucketRef = ref(storage, `blogImage/${ uuid() + data.postImg.name}`)

        if(data.postCategory && data.postTitle && content && data.postImg){
            toast.success("Post Uploaded")

            if(data.postImg){
                uploadBytes(bucketRef, data.postImg)
                .then((snapshot)=>{
                    toast.success("Post Uploaded Successfully")
                    getDownloadURL(snapshot.ref)
                    .then(url =>{
                        addDoc(postColRef, {
                            content: content,
                            postTitle: data.postTitle,
                            postCategory: data.postCategory,
                            featureImg: url,
                            postId: uuid(),
                            superUser: 'Admin',
                            trending: false,
                            top: false,
                            hot: false,
                            featured: false,
                            createdAt: Timestamp.fromDate(new Date())
                        }).then(()=>{


                            
                            navigate('/all-posts')
                        }).catch((err)=>{
                            toast.error("Post Upload Failed")
                            console.log(err.code);
                            console.log(err.msessage);
                        })
                    }).catch((err)=>{
                        console.log(err.code);
                        console.log(err.msessage);
                        console.log(err);
                    })
                }).catch((err)=>{
                    
                    console.log(err.message);
                    console.log(err.code);
                })
            }else{
                addDoc(postColRef, {
                    content,
                    postTitle: data.postTitle,
                    postCategory: data.postCategory,
                    postId: uuid(),
                    superUser: 'Admin',
                    trending: false,
                    top: false,
                    hot: false,
                    featured: false
                }).then(()=>{
                    toast.success("Post Uploaded Successfully")
                    navigate('/all-posts')
                }).catch(err=>{
                    console.log(err.code);
                    console.log(err.message);
                })
            }

        }else{
            toast.error("Invalid Field")
        }
    }

    const handleChange = (e)=>{
        setData({
            ...data,
            [e.target.name]: e.target.type === 'file' ? e.target.files[0] : e.target.value
        })
    }

  return (
    <>
        <div className="bg-white p-4 rounded-xl shadow-md w-[95%] mx-auto my-5">
                <h2 className="text-center text-3xl mb-2">Make a Post</h2>

            <form onSubmit={handleSubmit}>

                
                <div className="flex gap-3 flex-col">
                    
                    <input value={data.postTitle} type="text" placeholder="Post Title" className="w-full border outline-none border-lime-300 px-4 py-2" onChange={handleChange} name="postTitle" />
                    <JoditEditor
                        className="border border-lime-300"
                        ref={editor}
                        
                        value={content}
                        onChange={cont=>setContent(cont)}
                    />

                    <select name="postCategory" id="" className="w-full border outline-none border-lime-300 px-4 py-2 cursor-pointer" value={data.postCategory} onChange={handleChange}>
                        <option value="" className="w-full border outline-none border-lime-300 px-4 py-2 cursor-pointer">Select Categroy</option>
                        <option value="education" className="w-full border outline-none border-lime-300 px-4 py-2 cursor-pointer">Education</option>
                        <option value="health" className="w-full border outline-none border-lime-300 px-4 py-2 cursor-pointer">Health</option>
                        <option value="lifeHacks" className="w-full border outline-none border-lime-300 px-4 py-2 cursor-pointer">Life Hacks</option>
                        <option value="programming" className="w-full border outline-none border-lime-300 px-4 py-2 cursor-pointer">Programming</option>
                        <option value="travel" className="w-full border outline-none border-lime-300 px-4 py-2 cursor-pointer">Travel</option>
                        <option value="history" className="w-full border outline-none border-lime-300 px-4 py-2 cursor-pointer">History</option>
                        <option value="sports" className="w-full border outline-none border-lime-300 px-4 py-2 cursor-pointer">Sports</option>
                        <option value="life-story" className="w-full border outline-none border-lime-300 px-4 py-2 cursor-pointer">Life Story</option>
                        <option value="science" className="w-full border outline-none border-lime-300 px-4 py-2 cursor-pointer">Science</option>
                        <option value="technology" className="w-full border outline-none border-lime-300 px-4 py-2 cursor-pointer">Technology</option>
                        <option value="short-stories" className="w-full border outline-none border-lime-300 px-4 py-2 cursor-pointer">Short Stories</option>
                    </select>

                    <input type="file" accept="image/*" className="w-full border outline-none border-lime-300 px-4 py-2" onChange={handleChange} name="postImg" />
                </div>

                <button className="bg-lime-300 mt-2 w-full cursor-pointer py-2">Submit</button>
                
            </form>

            
           
        </div>
    </>
  )
}

export default PostForm
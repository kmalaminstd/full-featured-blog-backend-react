import {useState, useRef, useMemo} from 'react'
import JoditEditor from 'jodit-react'

function AddPostForm() {

    const editor = useRef(null)
    const [content, setContent] = useState('')

    // const config = useMemo(
    //     {
    //         readonly: false,
    //         placeholder: 'Start Typing'
    //     },
        
    // )

  return (
    <>
        <div className="bg-white p-4 rounded-xl shadow-md w-[95%] mx-auto my-5">
            <form>
                <h2 className="text-center text-3xl mb-2">Make a Post</h2>

                
                <div className="flex gap-3 flex-col">
                    <input type="text" placeholder="Post Title" className="w-full border outline-none border-lime-300 px-4 py-2"  />
                    <JoditEditor
                        className="border border-lime-300"
                        ref={editor}
                        config={
                            {
                                height: "330px",
                                placeholder: "Start Typing",
                                readonly: false
                            }
                        }
                        value={content}
                        tanIndex={1}
                    />

                    <select name="" id="" className="w-full border outline-none border-lime-300 px-4 py-2 cursor-pointer">
                        <option value="" className="w-full border outline-none border-lime-300 px-4 py-2 cursor-pointer">Selecte Categroy</option>
                        <option value="" className="w-full border outline-none border-lime-300 px-4 py-2 cursor-pointer">Programming</option>
                        <option value="" className="w-full border outline-none border-lime-300 px-4 py-2 cursor-pointer">Education</option>
                        <option value="" className="w-full border outline-none border-lime-300 px-4 py-2 cursor-pointer">Health</option>
                    </select>
                </div>

                <button className="bg-lime-300 mt-2 w-full cursor-pointer py-2">Submit</button>
                
            </form>

            
        </div>
    </>
  )
}

export default AddPostForm
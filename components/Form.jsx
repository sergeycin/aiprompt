import Link from 'next/link'
import React from 'react'

const Form = ({type, post, setPost, submitting, handleSubmit}) => {
  return (
   <section className='w-full max-w-full flex-center justify-center flex-col'>
<div className="flex flex-col items-center justify-center  text-center">
  <h1 className='head_text text-4xl font-bold text-orange-500'>
    <span className='blue_gradient'> {type} Post</span>
  </h1>
  <p className='desc max-w-md mt-4 text-lg'>{type} and share amazing prompts with world, and let your imagination run wild with any AI-powered platform</p>
</div>


    <form
      onSubmit={handleSubmit}
      className="mt-10 w-full mx-auto max-w-2xl flex  flex-col gap-7 glassmorphism"
    > 
 
 <div className="flex flex-center  flex-col items-center justify-center ">
  <label htmlFor="" className="mb-4">
    <span className='font-satoshi font-semibold text-base text-gray-700'>Your AI Prompt</span>
  </label>
  <textarea 
    value={post.prompt} 
    onChange={(e) => setPost({...post, prompt: e.target.value })} 
    placeholder="Write your prompt here" 
    required 
    className='form_input p-4 h-64 w-1/2 rounded-lg shadow-md'
  >             
  </textarea>
</div>


<div className="flex flex-col items-center justify-center">
  <label htmlFor="" className="mb-4">
    <span className='font-satoshi font-semibold text-base text-gray-700'>Your Tag</span>
  </label>
  <input 
    value={post.tag} 
    onChange={(e) => setPost({...post, tag: e.target.value })} 
    placeholder="#tag" 
    required 
    className='form_input p-2 h-10 w-1/2 rounded-lg shadow-md'
  />             
</div>
<div className='flex justify-center mx-3 mb-5 gap-4'>
  <Link href="/" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">Cancel</Link>
</div>

<div class="flex justify-center">
  <button type="submit" disabled={submitting} class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">{submitting ? `${type}...}` : type }</button>
</div>


    </form>

   </section>
  )
}

export default Form
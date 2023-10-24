import PromptCard from "./PromptCard"

const Profile = ({name,desc,data,handleEdit, handleDelete}) => {
  return (
    <section className="w-full">
<h1 className="head_text text-center text-4xl font-bold"> 
  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800">{name}</span> 
  Profile
</h1>
<p className="desc text-center text-lg">{desc}</p> 

      <div className='mt-10 prompt_layout'>
 
 {data.map((post) => (
   <PromptCard key={post._id} post={post} handleEdit={() => handleEdit && handleEdit(post)} handleDelete={() => handleDelete && handleDelete(post)}/>
 ))}
</div>
    </section>
  )
}

export default Profile
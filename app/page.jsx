import Feed from "@components/Feed"

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-red-500 text-2xl text-center">Discover & Share
        <br />
        <span className="text-black text-center">AI-Powred Prompts</span>
        </h1>
    <p className="desc text-center" >
        Promptopia is an open-source AI prompting tool for modern world to discover, create and share creative prompts
    </p>
    <Feed />
    </section>
  )
}

export default Home
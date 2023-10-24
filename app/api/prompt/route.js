import { connectTodDB } from "@utils/database"
import Prompt from '@models/prompt'


export const GET = async (request) => {
    try {
        await connectTodDB()
        const prompts = await Prompt.find({}).populate('creator')

        return new Response(JSON.stringify(prompts), {
            status: 200
        })
    }catch(error) {
       
        return new Response("Error", {
            status: 500
        })

    }

}
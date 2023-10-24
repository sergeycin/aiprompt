import mongoose from 'mongoose'

let isConnected = false; // trac the connection

export const connectTodDB = async() =>{
    mongoose.set('strictQuery', true)

    if(isConnected){
        console.log('mongo connected')

    }

    try{
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "promptopia",
            useNewUrlParser: true,
            useUnifiedTopology: true,
            
        })

        isConnected = true;

        console.log('mongo connect')
    } catch(error){
        console.log(error)
    }
}
import mongoose from 'mongoose';

export const Connection =()=>{
    mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("Database connected"))
    .catch(err => console.log(err));
    
    mongoose.connection.on('error', (err) => {
        console.error(`Database connection error: ${err}`);
    });
}
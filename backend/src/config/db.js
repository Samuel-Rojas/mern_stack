import mongoose from 'mongoose';


export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URI);
        
        console.log('MONGODB CONNECTED SUCCESSFULLY');
    } catch (error) {
        console.error('Error during connection: ', error);
        process.exit(1);
    }
}
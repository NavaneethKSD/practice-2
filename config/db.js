const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const conn = await mongoose.connect("mongodb+srv://mnavaneeth7:scyQ6NswRjhwdniU@cluster0.5mhre.mongodb.net/Practice-1")
        console.log(`mongoDB connected: ${conn.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
        
    }
}

module.exports = connectDB 
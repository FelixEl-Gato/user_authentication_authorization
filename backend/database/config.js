import mongoose from "mongoose";

const dbMongoConnection = async () => {
  try {
    mongoose.set("strictQuery", true);
    await mongoose.connect(process.env.DB_CNN, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    console.log("DB Online");
  } catch (error) {
    console.log(error);
    throw new Error("Error a la hora de iniciar la BD ver logs");
  }
};

export default dbMongoConnection;
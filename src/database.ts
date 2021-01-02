import mongoose, { ConnectOptions} from 'mongoose'
import config from "./config";

(async () => {
  try {
    const mongooseOptions: ConnectOptions = {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true
    }
    const db = await mongoose.connect(`mongodb://${config.MONGO_HOST}/${config.MONGO_DATABASE}`, mongooseOptions);
    console.log('Conectado a la BD:', db.connection.name);
  } catch (error) {
    console.error(error);
  }
})()
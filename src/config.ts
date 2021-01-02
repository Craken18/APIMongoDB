import dotenv from 'dotenv'
dotenv.config();

export default{
  MONGO_DATABASE: process.env.MONGO_DATABASE || 'videos',
  MONGO_HOST: process.env.MONGO_HOST || 'localhost',
  PORT: process.env.PORT || '3000',
}
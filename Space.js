import mongoose from 'mongoose';
const schema = new mongoose.Schema({name:{type:String,required:true},category:String,description:String,seatsAvailable:Number,totalSeats:Number,image:String,status:String,amenities:[String],location:String},{timestamps:true});
export default mongoose.model('Space',schema);

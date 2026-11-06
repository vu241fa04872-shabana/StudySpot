import mongoose from 'mongoose';
const schema = new mongoose.Schema({name:String,year:String,space:String,comment:String,rating:{type:Number,min:1,max:5,default:5},date:String},{timestamps:true});
export default mongoose.model('Review',schema);

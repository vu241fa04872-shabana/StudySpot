import mongoose from 'mongoose';
const entry = new mongoose.Schema({day:String,time:String,subject:String},{_id:false});
const schema = new mongoose.Schema({year:{type:String,unique:true,required:true},entries:[entry]},{timestamps:true});
export default mongoose.model('Timetable',schema);

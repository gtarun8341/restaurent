import mongoose from "mongoose";

const schema = mongoose.Schema;
const PublisherSignSchema = new schema(
{
    marketName: { type: String, required: true },
    picture: { type: String },  // Assuming picture is stored as filename
    email: { type: String, required: true },
    password: { type: String, required: true },
    confirmPassword: { type: String, required: true }

    // posts: [{
  
    //     marketName: String,
    //     title: String,
    //     price: String,
    //     picture: {
    //         data: Buffer
    //     }}]

  
   

    //notifications:[]


}
);

 export const signPublisherModel = mongoose.model('signedPublisher', PublisherSignSchema);
 export default signPublisherModel;

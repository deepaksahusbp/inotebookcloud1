const mongoose = require("mongoose");
const mongoURI = "mongodb+srv://deepaksahusbp1:Deepak123%40@cluster0.sgros3y.mongodb.net/inotebook?retryWrites=true&w=majority";

//   const { MongoClient, ServerApiVersion } = require("mongodb");
//   const uri =
//     "mongodb+srv://<deepaksahusbp1>:<Deepak123@>@cluster0.sgros3y.mongodb.net/?retryWrites=true&w=majority";
//   const client = new MongoClient(uri, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     serverApi: ServerApiVersion.v1,
//   });

//using in local host = mongodb://localhost:27017/inotebook?directConnection=true
//using in atlas = mongodb+srv://<deepaksahusbp1>:<Deepak123@>@cluster0.sgros3y.mongodb.net/?retryWrites=true&w=majority
  
 const connectToMongo = () => {
      mongoose.connect(mongoURI,{}).then(() => {
          console.log("Conneted to MongoDB Atlas Successfully...");
      }).catch((err) => console.log("Connection Failed with Atlas"));

      
    //   client.connect((err) => {
    //     const collection = client.db("test").collection("devices");
    //     // perform actions on the collection object
    //     //client.close();
    //   });
    
  //   mongoose.connect(mongoURI,()=>{
  //     console.log("Connected to MongoDB Successfully");
  // })


};
module.exports = connectToMongo;

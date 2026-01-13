let mongodbUrl = process.env.MONGODB_URL;
if(!mongodbUrl){
    throw new Error("Mongodb is not Connected ") ; 
}
const cached = global.mongoose ; 
if(!cached){
cached = global.mongoose={conn:null}
   cached=global.mongoose={conn:null , promise:null}
}
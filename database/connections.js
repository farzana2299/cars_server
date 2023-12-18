const mongoose=require('mongoose')

mongoose.connect(process.env.base_url,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("________Mongodb Atlas Connected_________");
}).catch((err)=>{
    console.log(`........mogodb connection error.........${err}`);
})
const mongoose=require("mongoose")


        mongoose.connect('mongodb+srv://thenikhilsingh27:8860580802@nrwdata.ud8vnoo.mongodb.net/NRWDATABASE', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }).then(() =>{
            console.log('Connected to MongoDB');
    }).catch ((error) =>{
        console.error('Connection to MongoDB failed:', error);
    })


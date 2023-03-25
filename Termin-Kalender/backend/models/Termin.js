

import mongoose from "mongoose";
const schema = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    datum:{
        type:String,
        required:true,
    },
    uhr:{
        type:String,
        required:true,
    },
    beschreibung:{
        type:String,
        required:true,
    }
})

const Termin =mongoose.model("Termin",schema)

export default Termin

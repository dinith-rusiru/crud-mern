const mongoose= require('mongoose');


const productSchema= new mongoose.Schema({
pname:{type:String,required:true},
prize:{type:Number,required:true},
details:{type:String,required:true},

})

const employeeSchema= new mongoose.Schema({
    name:{type:String,required:true},
    age:{type:Number,required:true},
    details:{type:String,required:true},
    
    })







const Product=mongoose.model('Product',productSchema);
const Employee=mongoose.model('Employee',employeeSchema);


module.exports={Product,Employee};


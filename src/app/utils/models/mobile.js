const { default: mongoose } = require("mongoose");



const MobileSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,

    },
   
    model: {
        type: String,
        required: true,
        unique: true
    }
},{timestamps: true})

const MobileModel = mongoose.models.mobile || mongoose.model("mobile", MobileSchema);
export default MobileModel;
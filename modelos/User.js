import mongoose, { model } from "mongoose";

const esquema = mongoose.Schema({
    nombre:{
        type: String,
        require: [true, "Este campo es requerido"],
        trim: true,
        minlength: 5,
        maxlength: [55, "Minimo 5 caracteres y Maximo 55"]
    },
    edad:{
        type:Number,
        require: [true, "Este campo es requerido"],
        trim: true,
        min: [1, "No púedes colocar un año de edad"],
        max: [99, "Maximo 99 años"]
    },
    family: { type:Array,default:[]}
},{
    timestamps: true
})

let modeloUsuario;

try {
    modeloUsuario: mongoose.model('Usuario');
} catch (error) {
    modeloUsuario = mongoose.model('Usuario',esquema)
}

export default modeloUsuario;


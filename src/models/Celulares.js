import { Schema, model } from "mongoose";

const celularEsquema = new Schema(
    {
        clave:{
            type:Number,
            required: true,
            unique: true,
            trim: true,
        },
        marca:{
            type:String,
            required: true,
        },
        precio:{
            type:Number,
            required: true
        },
        fechaLanzamiento:{
            type: Date,
        },
        ram:{
            type:Number,
            required: true
        },
        almacenamiento:{
            type:Number,
            required: true
        },
        cantCamaras:{
            type:Number,
            required: true
        }
    },
    {
        timestamps: true,
        versionKey: false

    }
);
// Se crea el modelo de datos como quiero que se llame la collection
export default model("Celular", celularEsquema)
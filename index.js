import mongoose from "mongoose"
import express from "express"
import "dotenv/config"
import modeloUsuario from './modelos/User.js';

const app = express();
app.use(express.json());

try {
    await mongoose.connect(process.env.CONNECTION).then(() =>console.log("Conectado"))
    app.listen(3000, ()=> {
        console.log("Servidor esta corriendo");
    })
} catch (error) {
    console.log("error");

}

app.get('/api/users', async (req,res)=> {
    try {
        const usuarios = await modeloUsuario.find({});
        res.status(200).json({message: 'Lista de usuarios',usuarios})
    } catch (error) {
        console.log(error)
        res.status(400).json({message: error.message ?? 'Error de el Servidor'})
    }
});

app.post('/api/newuser', async (req,res)=> {
    const {body:cuerpo} = req;
    try {
        console.log(body);
        const nuevoUsuario = await modeloUsuario.create({
            ...cuerpo
        });
        res.status(200).json({message: 'Usuario creado exitosamente',nuevoUsuario})
    } catch (error) {
        res.status(400).json({message: error.message ?? 'Error de el Servidor'})
    }
});

app.get('/',function (req,res){
    res.send('Home page');
})
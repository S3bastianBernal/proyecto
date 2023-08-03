const express = require('express'); 
const cors = require('cors');
const {dbConnection} = require('../database/config.js')

class Server {
    constructor(){
        this.app = express();

        this.port = process.env.PORT
        this.usuariosPath = "/api/usuarios";
        this.authPath = "/api/auth";

        this.connectDB();
        this.middleware();
        this.routes();
    }
    async connectDB(){
        await dbConnection();
    }
    middleware(){
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static('public'));
    }

    routes(){
        this.app.use(this.authPath, require('../routes/auth.routes.js'))
        this.app.use(this.usuariosPath, require('../routes/usuario.routes.js'))
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`server Running on port ${this.port}`);
        });
    }
}

module.exports = Server
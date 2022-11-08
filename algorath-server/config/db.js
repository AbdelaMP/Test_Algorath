const mongoose = require('mongoose');

const conectarDB = async () => {

    try {

        await mongoose.connect('mongodb://localhost:27017/algorath', {
            useNewUrlParser: true,
            useUnifiedTopology: true
            })
        console.log('BD Conectada');
        
    } catch (error) {   
        console.log(error);
        process.exit(1); // Detenemos la app
    }

}

module.exports = conectarDB
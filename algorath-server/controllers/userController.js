const { application } = require('express');
const User = require('../models/User');

exports.getUsuarios = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users)
    }catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
};

exports.getUsuarioId = async (req, res) => {

    try {

        let user = await User.findById(req.params.id);

        if(!user) {
            res.status(404).json({ msg: 'No existe el usuario' })
        }
       
        res.json(user);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
};


exports.createUsuario = async (req, res) => {
    
    try {
        let user;

        // Creamos nuestro producto
        user = new User(req.body);

        await user.save();
        res.send(user);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
};


exports.updateUsuario = async (req, res) => {

    try {
        const { name, connections } = req.body;
        let user = await User.findById(req.params.id);

        if(!user) {
            res.status(404).json({ msg: 'No existe el user' })
        }

        user.name = name;
        user.connections = connections;

        user = await User.findOneAndUpdate({ _id: req.params.id },user, { new: true} )
        res.json(user);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
};


exports.deleteUsuario = async (req, res) => {

    try {
        let user = await User.findById(req.params.id);

        if(!user) {
            res.status(404).json({ msg: 'No existe el user' })
        }
       
        await User.findOneAndRemove({ _id: req.params.id })
        res.json({ msg: 'Usuario eliminado con exito' });
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
};


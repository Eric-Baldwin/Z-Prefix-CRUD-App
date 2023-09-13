const knex = require('../knexConnection');

module.exports = {

    createUser: async (req, res) => {
        console.log("Request body:", req.body);
        try {
            const newUser = {
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                username: req.body.username,
                password: req.body.password
            };

            await knex('users').insert(newUser);
            res.status(201).json({ message: 'User created successfully' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },


    getAllUsers: async (req, res) => {
        try {
            const users = await knex('users').select();
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    getUserById: async (req, res) => {
        try {
            const user = await knex('users').where('id', req.params.id).first();
            if (user) {
                res.status(200).json(user);
            } else {
                res.status(404).json({ message: 'User not found' });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    updateUser: async (req, res) => {
        try {
            await knex('users').where('id', req.params.id).update(req.body);
            res.status(200).json({ message: 'User updated successfully' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    deleteUser: async (req, res) => {
        try {
            await knex('users').where('id', req.params.id).delete();
            res.status(200).json({ message: 'User deleted successfully' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
};

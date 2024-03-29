const knex = require('../knexConnection');

module.exports = {

    createItem: async (req, res) => {
        console.log("Request body:", req.body);
        try {
            const latestUser = await knex('users').orderBy('created_at', 'desc').first();
            if (!latestUser) {
                return res.status(400).json({ message: 'No users available to associate with the item' });
            }

            const newItem = {
                user_id: latestUser.id,
                item_name: req.body.item_name,
                description: req.body.description,
                quantity: req.body.quantity
            };

            await knex('items').insert(newItem);
            res.status(201).json({ message: 'Item created successfully' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    getAllItems: async (req, res) => {
        try {
            const items = await knex('items').select();
            res.status(200).json(items);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    getItemById: async (req, res) => {
        try {
            const item = await knex('items').where('id', req.params.id).first();
            if (item) {
                res.status(200).json(item);
            } else {
                res.status(404).json({ message: 'Item not found' });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    updateItem: async (req, res) => {
        try {
            await knex('items').where('id', req.params.id).update(req.body);
            res.status(200).json({ message: 'Item updated successfully' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    deleteItem: async (req, res) => {
        try {
            await knex('items').where('id', req.params.id).delete();
            res.status(200).json({ message: 'Item deleted successfully' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
};

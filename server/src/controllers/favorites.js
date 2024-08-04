const { User } = require('../models/User');
const { Tea } = require('../models/Data');
const { Router } = require('express');



const favorites = Router();


favorites.post('/add-favorite', async (req, res) => {
    const { userId, teaId } = req.body;
    console.log(userId, teaId)

    try {
        const user = await User.findById(userId);
        const tea = await Tea.findById(teaId);

        const result = await Tea.findById(teaId).lean();

        if (!user.favorite.includes(teaId)) {
            user.favorite.push(teaId);
            await user.save();

            if (!tea.favorite.includes(userId)) {
                tea.favorite.push(userId);
                await tea.save();
            }
        }
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

favorites.post('/remove-favorite', async (req, res) => {
    const { userId, teaId } = req.body;

    try {
        const user = await User.findById(userId);
        const tea = await Tea.findById(teaId);

        const result = await Tea.findById(teaId);

        user.favorite = user.favorite.filter(id => id.toString() !== teaId);
        await user.save();

        tea.favorite = tea.favorite.filter(id => id.toString() !== userId);
        await tea.save();

        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }

});

favorites.get('/:userId', async (req, res) => {

    try {
        const { userId } = req.params;
        const user = await User.findById(userId).populate('favorite');

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.json(user.favorite);
    } catch (error) {
        console.error('Error fetching favorites:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = { favorites }
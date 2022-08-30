const router = require('express').Router();
const { getCards, postCard, deleteCard, likeCard, dislikeCard } = require('../controllers/cards');

//GET cards
router.get('/cards', getCards);

//POST card
router.post('/cards', postCard);

//DELETE card
router.delete('/cards/:cardId', deleteCard);

//LIKE card
router.put('/cards/:cardId/likes', likeCard);

//DISLIKE card
router.delete('/cards/:cardId/likes', dislikeCard);

module.exports = router;
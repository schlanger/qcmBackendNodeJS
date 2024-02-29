const router = require('express').Router();

const {
    getAllQuestions,
    getQuestionById,
    createQuestion,
    updateQuestionById,
    deleteQuestionById
} = require('../controllers/questions.controller');


router.get('/questions', getAllQuestions); 

router.get('/questions/:id', getQuestionById);

router.post('/questions', createQuestion);

router.put('/questions/:id', updateQuestionById);

router.delete('/questions/:id', deleteQuestionById);

module.exports = router;

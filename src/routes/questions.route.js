const router = require('express').Router();

const {
    getAllQuestions,
    getQuestionById,
    createQuestion,
    //updateQuestionById,
    //deleteQuestionById
} = require('../controller/questions.controller');


router.get('/', getAllQuestions); 

router.get('/:id', getQuestionById);

router.post('/create', createQuestion);
/*

router.put('/update/:id', updateQuestionById);

router.delete('/delete/:id', deleteQuestionById);*/

module.exports = router;

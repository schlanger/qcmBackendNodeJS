const router = require('express').Router();

const {
    getResponseByIdQuestion,

} = require('../controller/reponses.controller');


router.get('/:id', getResponseByIdQuestion);


module.exports = router;

const questionModel = require('../models/questions.model');

 // Récupérer l'ensemble des questions

getAllQuestions = (request,response) => {
    questionModel.getAllQuestions((error, data) => {   
        if (error)
            response.status(500).send({
                message: error.message || "Some error occurred while retrieving questions."
            });
        else 
            response.send(data);
    });
};

// Récupérer une question par son id
getQuestionById = (request, response) => {
    questionModel.getQuestionById((error, results) => {
        if (error) {
            response.status(500).send({
                message: 
                error.message ||
                'Erreur lors de la récupération de la question'
            });
        } else {
            response.send(results);
        }
    });
};
module.exports = {
    getAllQuestions,
    getQuestionById
};
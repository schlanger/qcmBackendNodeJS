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
    questionModel.getQuestionById(request.params.id,(error, results) => {
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
createQuestion = (request,response) => {
    if (!request.body) {
        response.status(400).send({
            message: "Content can not be empty!"
        });
    }

    const question = new questionModel.QuestionConstructor({
        id: request.body.id,
        intitule: request.body.intitule
    });

    questionModel.createQuestion(question,(error, data) => {   
        if (error)
            response.status(500).send({
                message: error.message || "Some error occurred while creating the question."
            });
        else 
            response.send(data);
    });
}
updateQuestionById = (request,response) => {
    if (!request.body) {
        response.status(400).send({
            message: "Content can not be empty!"
        });
    }

    questionModel.updateQuestionById(request.params.id, new questionModel.QuestionConstructor(request.body),(error, data) => {   
        if (error)
            response.status(500).send({
                message: error.message || "Some error occurred while updating the user."
            });
        else 
            response.send(data);
    });
}
module.exports = {
    getAllQuestions,
    getQuestionById,
    createQuestion,
    updateQuestionById

};
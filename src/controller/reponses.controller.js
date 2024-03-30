const reponseModel = require("../models/reponses.model");

getResponseByIdQuestion = (request, response) => {
    reponseModel.getResponseByIdQuestion(request.params.id,(error, results) => {
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
    getResponseByIdQuestion
};
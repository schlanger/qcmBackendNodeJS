const database = require('../db/db-connection.js');
 

const QuestionConstructor = function(question) {
    this.id = question.id;
    this.intitule = question.intitule;
};
// Récupérer toutes les questions
getAllQuestions = result_bdd_request => {
    database.query("SELECT * FROM questionnaire.question", (error,response) => {
        if (error) {
            result_bdd_request(error);
        }
        // Le résultat de la requête est renvoyé
        result_bdd_request(null, response);
    });
};


// Récupérer les questions  par leur id

getQuestionById = (id, result_bdd_request) => {
    database.query("SELECT * FROM questionnaire.question WHERE id = $1", [id], (error, response) => {
        if (error) {
            result_bdd_request(error);
        }
        // Le résultat de la requête est renvoyé
        result_bdd_request(null, response);
    });
};
module.exports = {  
    getAllQuestions,
    getQuestionById,
    QuestionConstructor
};
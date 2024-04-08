const database = require('../db/db-connection.js');
const ResponseConstructor = function(response)
{
   this.id = response.id
   this.titre = response.titre;
   this.correct = response.correct;
   this.question_id = response.question_id;

};

// Récupérer toutes les réponses en fonction de l'id de la question

getResponseByIdQuestion = (id, result_bdd_request) => {
    database.query("SELECT * FROM questionnaire.reponse WHERE question_id = $1", [id], (error, response) => {
        if (error) {
            result_bdd_request(error);
        }
        // Le résultat de la requête est renvoyé
        result_bdd_request(null, response);
    });
};


module.exports = {
    getResponseByIdQuestion,
    ResponseConstructor
};

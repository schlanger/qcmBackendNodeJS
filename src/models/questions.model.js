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
createQuestion = (user, result_bdd_request) => {
    const { intitule } = user; // Assurez-vous d'avoir les mêmes noms de colonnes que dans votre table

    database.query(
        "INSERT INTO questionnaire.question (intitule) VALUES ($1)",
        [intitule], // Passer les valeurs à insérer dans le même ordre que les colonnes
        (error, response) => {
            if (error) {
                result_bdd_request(error);
            }
            // Le résultat de la requête est renvoyé
            result_bdd_request(null, response);
        }
    );
}

// Mettre à jour une question

updateQuestionById = (id, question, result_bdd_request) => {
    database.query(
        "UPDATE questionnaire.question SET intitule = $1 WHERE id = $2",
        [question.intitule, id],
        (error, response) => {
            if (error) {
                result_bdd_request(error);
            }
            // Le résultat de la requête est renvoyé
            result_bdd_request(null, response);
        }
    );
}






module.exports = {  
    getAllQuestions,
    getQuestionById,
    createQuestion,
    updateQuestionById,
    QuestionConstructor
};
//getArticles est la fonction qui se charge d'afficher l'intégralité des articles
const getArticles = (req, res) => {
    res.status(200).json({
        message: "Voir les articles"
    })
}

//postArticles est la fonction qui se charge de creer un nouvel article
const postArticles = (req, res) => {
    res.status(200).json({
        message: "Creer un article"
    })
}

//putArticles est la fonction qui se charge de modifier un article déjà existant
const putArticles = (req, res) => {
    res.status(200).json({
        message: `Modifier la vidéo dont l'identifiant est ${req.params.id}`
    })
}

//deleteArticles est la fonction qui se charge de supprimer un article déjà existant
const deleteArticles = (req, res) => {
    res.status(200).json({
        message: `Supprimer la vidéo dont l'identifiant est ${req.params.id}`
    })
}


/**
 * Avec le module.exports, nous exportons toutes les différentes  
 * fonctions afin de les importés dans les fichiers où nous en auront besoin
 */
module.exports = {
    getArticles,
    postArticles,
    putArticles,
    deleteArticles
}
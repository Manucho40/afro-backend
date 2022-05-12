//getSpotlight est la fonction qui se charge d'afficher l'ensemble des spotlights
const getSpotlight = (req, res) => {
    res.status(200).json({
        message: 'Voir les vidéos'
    })
}

//postSpotlight est la fonction qui se charge de créer un nouveau spotlight
const postSpotlight = (req, res) => {
    res.status(200).json({
        message: 'Créer les vidéos'
    })
}

//postSpotlight est la fonction qui se charge de supprimer un spotlight déjà existant
const deleteSpotlight = (req, res) => {
    res.status(200).json({
        message: `Supprimer le secteur d'activité dont l'identifiant est ${req.params.id}`
    })
}

/**
 * Avec le module.exports, nous exportons toutes les différentes  
 * fonctions afin de les importés dans les fichiers où nous en auront besoin
 */
module.exports = {
    getSpotlight,
    postSpotlight,
    deleteSpotlight

}
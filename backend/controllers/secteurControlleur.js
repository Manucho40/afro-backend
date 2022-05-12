//getSecteur est la fonction qui se charge d'afficher l'ensemble des secteur d'activité
const getSecteur = (req, res) => {
    res.status(200).json({
        message: "Voir les secteurs d'activités"
    })
}

//postSecteur est la fonction qui se charge de créer un nouveau secteur
const postSecteur = (req, res) => {
    res.status(200).json({
        message: "Créer un secteur d'activité"
    })
}

//putSecteur est la fonction qui se charge de modifier un secteur déjà existant
const putSecteur = (req, res) => {
    res.status(200).json({
        message: `Modifier le secteur d'activité dont l'identifiant est ${req.params.id}`
    })
}

//deleteSecteur est la fonction qui se charge de supprimer un secteur déjà existant
const deleteSecteur = (req, res) => {
    res.status(200).json({
        message: `Supprimer le secteur d'activité dont l'identifiant est ${req.params.id}`
    })
}


/**
 * Avec le module.exports, nous exportons toutes les différentes  
 * fonctions afin de les importés dans les fichiers où nous en auront besoin
 */
module.exports = {
    getSecteur,
    postSecteur,
    putSecteur,
    deleteSecteur

}
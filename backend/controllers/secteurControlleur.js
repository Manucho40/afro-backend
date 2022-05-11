const getSecteur = (req, res) => {
    res.status(200).json({
        message: "Voir les secteurs d'activités"
    })
}
const postSecteur = (req, res) => {
    res.status(200).json({
        message: "Créer un secteur d'activité"
    })
}
const putSecteur = (req, res) => {
    res.status(200).json({
        message: `Modifier le secteur d'activité dont l'identifiant est ${req.params.id}`
    })
}
const deleteSecteur = (req, res) => {
    res.status(200).json({
        message: `Supprimer le secteur d'activité dont l'identifiant est ${req.params.id}`
    })
}



module.exports = {
    getSecteur,
    postSecteur,
    putSecteur,
    deleteSecteur

}
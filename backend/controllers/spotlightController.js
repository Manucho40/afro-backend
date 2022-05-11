const getSpotlight = (req, res) => {
    res.status(200).json({
        message: 'Voir les vidéos'
    })
}
const postSpotlight = (req, res) => {
    res.status(200).json({
        message: 'Créer les vidéos'
    })
}
const deleteSpotlight = (req, res) => {
    res.status(200).json({
        message: `Supprimer le secteur d'activité dont l'identifiant est ${req.params.id}`
    })
}

module.exports = {
    getSpotlight,
    postSpotlight,
    deleteSpotlight

}
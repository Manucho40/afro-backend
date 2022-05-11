const getAfropreneurs = (req, res) => {
  res.status(200).json({message: 'Voir les Afropreneurs'})

}

const postAfropreneurs = (req, res) => {
    res.status(200).json({
        message: 'Creer un Afropreneurs'
    })
}
const putAfropreneurs = (req, res) => {
    res.status(200).json({
        message: `Modifier l'afropreneur dont l'identifiant est ${req.params.id}`
    })
}

const deleteAfropreneurs = (req, res) => {
    res.status(200).json({
        message: `Supprimer l'afropreneur dont l'identifiant est ${req.params.id}`
    })
}

module.exports = {
    getAfropreneurs,
    postAfropreneurs,
    putAfropreneurs,
    deleteAfropreneurs
}
//getAfropreneurs est la fonction qui se charge de voir l'intégralité des afropreneurs
const getAfropreneurs = (req, res) => {
  res.status(200).json({message: 'Voir les Afropreneurs'})

}

//postAfropreneurs est la fonction qui se charge de créer de nouveau  afropreneur
const postAfropreneurs = (req, res) => {
    res.status(200).json({
        message: 'Creer un Afropreneurs'
    })
}

//putAfropreneurs est la fonction qui se charge de modifier un afropreneur déjà existant
const putAfropreneurs = (req, res) => {
    res.status(200).json({
        message: `Modifier l'afropreneur dont l'identifiant est ${req.params.id}`
    })
}

//deleteAfropreneurs est la fonction qui se charge de supprimer un afropreneur déjà existant
const deleteAfropreneurs = (req, res) => {
    res.status(200).json({
        message: `Supprimer l'afropreneur dont l'identifiant est ${req.params.id}`
    })
}

/**
 * Avec le module.exports, nous exportons toutes les différentes  
 * fonctions afin de les importés dans les fichiers où nous en auront besoin
 */

module.exports = {
    getAfropreneurs,
    postAfropreneurs,
    putAfropreneurs,
    deleteAfropreneurs
}
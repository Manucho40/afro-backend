const getArticles = (req, res) => {
    res.status(200).json({
        message: "Voir les articles"
    })
}

const postArticles = (req, res) => {
    res.status(200).json({
        message: "Creer un article"
    })
}
const putArticles = (req, res) => {
    res.status(200).json({
        message: `Modifier la vidéo dont l'identifiant est ${req.params.id}`
    })
}
const deleteArticles = (req, res) => {
    res.status(200).json({
        message: `Supprimer la vidéo dont l'identifiant est ${req.params.id}`
    })
}



module.exports = {
    getArticles,
    postArticles,
    putArticles,
    deleteArticles
}
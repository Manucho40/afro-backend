const express = require('express'); //Affectation de la librairie express dans la constante express.
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000; // Affectation du port sur lequel notre application sera écouté à la constant PORT
const app = express();

app.use('/api/afropreneurs', require('./routes/afropreneurRoutes'))
app.use('/api/articles', require('./routes/articleRoutes'))
app.use('/api/secteurs', require('./routes/secteurRoutes'))
app.use('/api/spotlights', require('./routes/spotlightRoutes'))

app.listen(port, () => {
   console.log(`Server started on port ${port}`) 
})

const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require("cookie-parser")

let corsOptions = {origin:'*'};

app.use(cookieParser());
app.use(cors(corsOptions));

app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

const gamesRouter = require('./routes/games_route');
const gameTypesRouter = require('./routes/game_types_route');
const suggestionsRouter = require('./routes/suggestions_route');
const runsRouter = require('./routes/runs_route');
const runCatsRouter = require('./routes/run_categories_route');
const usersRouter = require('./routes/users_route');
const platformsRouter = require('./routes/platforms_route');
const containsRunRouter = require('./routes/contains_run_route');

app.use('/api/games', gamesRouter);
app.use('/api/game_types', gameTypesRouter);
app.use('/api/suggestions', suggestionsRouter);
app.use('/api/runs', runsRouter);
app.use('/api/run_categories', runCatsRouter);
app.use('/api/users', usersRouter);
app.use('/api/platforms', platformsRouter);
app.use('/api/contains_run', containsRunRouter);

//The 404 Route (ALWAYS Keep this as the last route)
app.get('*', (req, res) => {
    res.status(404).render("error");
});

app.listen(8000,function(){
    console.log("Live at Port 8000");
});

module.exports = app;
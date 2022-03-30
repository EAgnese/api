const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require("cookie-parser")

let corsOptions = {origin:'*'};

const cookie_secret = "dashldhe128ewhgcvasdy7et2hvhwytt2"
app.use(cookieParser(cookie_secret));
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

app.use('/games', gamesRouter);
app.use('/game_types', gameTypesRouter);
app.use('/suggestions', suggestionsRouter);
app.use('/runs', runsRouter);
app.use('/run_categories', runCatsRouter);
app.use('/users', usersRouter);
app.use('/platforms', platformsRouter);
app.use('/contains_run', containsRunRouter);

//The 404 Route (ALWAYS Keep this as the last route)
app.get('*', (req, res) => {
    res.status(404);
    res.json({ error: "Not found" })
});

app.listen(process.env.PORT || 5000,function(){
    console.log("Live at Port 5000");
});

module.exports = app;
const http = require('http');
const mongoose = require('mongoose');
const { loadPlanetsData } = require('./models/planets.model');
const app = require('./app');

const PORT = process.env.PORT || 8000;
const MONGO_URL = 'mongodb+srv://tanmay:wzUqyNJYb7RH40GF@tanmayster.rhku3mf.mongodb.net/MySiya?retryWrites=true&w=majority&appName=tanmayster';

const server = http.createServer(app);

mongoose.connection.once('open', () => {
    console.log('MongoDB connection is ready...');
});

mongoose.connection.on('error', (err) => {
    console.error(err);
});

async function startServer() {
    try {
        await mongoose.connect(MONGO_URL);
        await loadPlanetsData();

        server.listen(PORT, () => {
            console.log(`Listening on port ${PORT}...`);
        });
    } catch (err) {
        console.error(`Error starting the server: ${err}`);
    }
}

startServer();

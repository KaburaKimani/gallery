var config = {}

//MongoDB Atlas connection strings
config.mongoURI = {
    production: 'mongodb+srv://iqraali3:lpSksCDnhMA2cqA0@cluster0.6hsfv26.mongodb.net/lizdb?retryWrites=true&w=majority',
    development: 'mongodb+srv://iqraali3:lpSksCDnhMA2cqA0@cluster0.6hsfv26.mongodb.net/lizdb-dev?retryWrites=true&w=majority',
    test: 'mongodb+srv://iqraali3:lpSksCDnhMA2cqA0@cluster0.6hsfv26.mongodb.net/lizdb-test?retryWrites=true&w=majority',
}

module.exports = config;

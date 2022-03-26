module.exports = {
    mongoose: {
        url: `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.ldofq.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`,
        options: { useNewUrlParser: true }
    }
}
const mongoose = require("mongoose");

const uri = "mongodb://admin:admin@localhost:27017/trabalho?authSource=trabalho";

mongoose.connect(uri, {
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true
});


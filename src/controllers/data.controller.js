const mongo = require('../../mongo');

exports.createCollection = async (req, resizeBy, next) => {
    try {
        const collectionName = req.body.collection_name;
        
        const client = mongo.connectDB();
        await client.createCollection(collectionName);

        return res.status(201).send({"Mensagem": "Collection criada com sucesso"});
    } catch (error) {
        return res.status(500).send({"error": error});
    }
}
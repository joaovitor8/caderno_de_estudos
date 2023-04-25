#Instalando MongoDB: pip install pymongo

import pymongo as pyM

cliente = pyM.MongoClient("")

#criar uma coleção usando o pymongo
db = cliente.test
collection = db.test_collection

post = {
  "author": "Mike",
  "Text": "Meu primiro mongoDB",
  "tags": ["mongodb", "python", "pymongo"]
}


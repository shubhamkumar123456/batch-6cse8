// Mongodb --> is a popular open source document oriented No-sql database. instead of using  tables and rows like traditional database, it uses  JSON like object to store data.

// Database --> collection --> data(document)

// collection --> collection is agrouping of mongodb  documents. it is equivalent  of a table in  relational database

// Document--> a document is a record in mongodb collection and the basic unit of data in mongodb.


// Commands--> 

// 1) to view or show all data base -->  show dbs

// 2)create a new Database or use any existing Database --> use DatabaseName

// 3) create a collection  --> db.createCollection('collectionName')

// 4)insert Data  --> insert single Data --> db.collectionName.insertOne({key:value})
                //-->insert multiple Data --> db.collectionName.insertMany([{key:value}, {key:value}])

// Delete Data from collection-->
        // a) delete single Data --> db.collectionName.deleteOne({key:value})
        // a) delete Multiple Data --> db.collectionName.deleteMany({key:value})

// delete a collection --> db.collectionName.drop()
// delete Database --> db.dropDatabase()

// other filter --> 
// find in nested object-->
// example -->  db.users.find({"details.city":"kanpur"})



let users = [ 
        {
           name:"three",
           email:"three@gmail.com",
           password:"1234567",
           details:{
                house:11,
                city:"kanpur",
                state:"up"
           }     
        },
        {
           name:"four",
           email:"four@gmail.com",
           password:"1234567",
           details:{
                house:11,
                city:"kanpur",
                state:"up"
           }     
        },
        {
           name:"five",
           email:"five@gmail.com",
           password:"1234567",
           details:{
                house:11,
                city:"lucknow",
                state:"up"
           }     
        },

]


// other filter method --> gt, gte , eq ,ne ,lt lte 

// db.collectionName.find({price:{$gte:35000}})
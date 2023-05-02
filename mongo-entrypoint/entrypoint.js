var db = connect("mongodb://mongoadmin:mongoadmin@localhost:27017/admin");

db = db.getSiblingDB('funnel'); // we can not use "use" statement here to switch db

db.createUser(
    {
        user: "mongouser",
        pwd: "mongouser",
        roles: [ { role: "readWrite", db: "funnel"} ],
        passwordDigestor: "server",
    }
)
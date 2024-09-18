import { MyDatabaseClassic } from "./db/my-database-classic";

const myDatabaseClassic = MyDatabaseClassic.getIntance();
myDatabaseClassic.add({ name: "luiz", age: 8 });
myDatabaseClassic.add({ name: "maria", age: 8 });
myDatabaseClassic.add({ name: "ricardo", age: 8 });

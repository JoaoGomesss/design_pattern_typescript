import { MyDatabaseClassic } from "./db/my-database-classic";
import "./module-a";

const myDatabaseClassic = MyDatabaseClassic.getIntance();
myDatabaseClassic.add({ name: "fracico", age: 8 });
myDatabaseClassic.add({ name: "mariana", age: 8 });
myDatabaseClassic.add({ name: "riquelme", age: 8 });
myDatabaseClassic.show();

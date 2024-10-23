import { Buyer } from "./buyer";
import { Mediator } from "./mediator";
import { Seller } from "./seller";

const mediator = new Mediator();

const seller1 = new Seller();
seller1.addProduct({ id: "1", name: "Camiseta", price: 50.0 });
seller1.addProduct({ id: "2", name: "Boné", price: 35.0 });

const seller2 = new Seller();
seller2.addProduct({ id: "3", name: "Jaqueta", price: 70.5 });
seller2.addProduct({ id: "4", name: "Calça", price: 80.99 });

mediator.addSeller(seller1, seller2);

const buyer = new Buyer(mediator);
buyer.viewProducts();
buyer.buy("1");
buyer.buy("3");

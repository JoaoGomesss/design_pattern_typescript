import { CeoBudgetHandler } from "./ceo-budget-handler";
import { CustomerBudget } from "./customer-budget";
import { DirectorBudgetHandler } from "./director-budget-handler";
import { ManagerudgetHandler } from "./manager-budget-handler";
import { SellerBudgetHandler } from "./seller-budget-handler";

const customerBudget = new CustomerBudget(6001);

const seller = new SellerBudgetHandler();
seller
  .setNextHandler(new ManagerudgetHandler())
  .setNextHandler(new DirectorBudgetHandler())
  .setNextHandler(new CeoBudgetHandler());

seller.handle(customerBudget);
console.log(customerBudget);

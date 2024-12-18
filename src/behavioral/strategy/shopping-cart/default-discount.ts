import { DiscountStrategy } from "./discout-strategy";
import { EcommerceShoppingCart } from "./ecommerce-shopping-cart";

export class DefaultDiscount extends DiscountStrategy {
  protected discount = 0;

  getDiscount(cart: EcommerceShoppingCart): number {
    const total = cart.getTotal();

    if (total >= 100 && total < 200) {
      this.discount = 10;
    }

    if (total >= 200 && total < 300) {
      this.discount = 20;
    } else if (total >= 200) {
      this.discount = 30;
    }

    return total - total * (this.discount / 100);
  }
}

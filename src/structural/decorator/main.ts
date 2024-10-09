import { ProductCustomizedDecorator } from "./product/product-customized.decorator";
import { ProductDecorator } from "./product/product-decorator";
import { ProductStampDecorator } from "./product/product-stamp-decorator";
import { TShirt } from "./product/t-shirt";

const tShirt = new TShirt();
const decoratedTShirt = new ProductDecorator(tShirt);
const stampTShirt = new ProductStampDecorator(tShirt);
const stampTShirtOnBackAndFront = new ProductStampDecorator(stampTShirt);
const customizedTShirt = new ProductCustomizedDecorator(tShirt);

console.log(tShirt.getPrice());

console.log(decoratedTShirt.getPrice());

console.log(stampTShirt.getPrice(), stampTShirt.getName());

console.log(
  stampTShirtOnBackAndFront.getPrice(),
  stampTShirtOnBackAndFront.getName()
);

console.log(customizedTShirt.getName(), customizedTShirt.getPrice());

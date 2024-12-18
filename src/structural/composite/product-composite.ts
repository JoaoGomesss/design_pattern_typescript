export abstract class ProductComponent {
  abstract getPrice(): number;
}

export class ProductLeaf extends ProductComponent {
  constructor(public name: string, public price: number) {
    super();
  }

  getPrice(): number {
    return this.price;
  }
}

export class ProductComposite extends ProductComponent {
  private children: ProductComponent[] = [];

  add(...products: ProductComponent[]): void {
    products.forEach((product) => this.children.push(product));
  }

  remove(product: ProductComponent): void {
    const productIndex = this.children.indexOf(product);
    if (productIndex !== -1) this.children.splice(productIndex, 1);
  }

  getPrice(): number {
    return this.children.reduce((sum, child) => sum + child.getPrice(), 0);
  }
}

const pen = new ProductLeaf("Caneta", 4);
const smartphone = new ProductLeaf("Smartphone", 1000);
const tShirt = new ProductLeaf("Camisa", 40);

const productBox = new ProductComposite();
productBox.add(pen, smartphone, tShirt);

const anotherProductBox = new ProductComposite();

const mouse = new ProductLeaf("Logitech", 60);
const headset = new ProductLeaf("Razer", 60);

anotherProductBox.add(mouse, headset);

productBox.add(anotherProductBox);

console.log(productBox);
console.log(productBox.getPrice());

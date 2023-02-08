import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/cart.service';
import { NotificationService } from 'src/app/notification.service';
import { IProduct, IProductCart } from 'src/app/product';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  
  /** ATTRIBUTES **/
  product: IProduct | undefined;
  quantity = 1;

  /** CONSTRUCTOR **/
  constructor(
    private productService: ProductsService,
    private router: ActivatedRoute,
    private notificationService: NotificationService,
    private cartService: CartService
  ) { }

  /** METHODS **/
  ngOnInit(): void {
    const routeParams = this.router.snapshot.paramMap;
    // route params comes as a string or null => convert to Number (0 = not exists)
    const productId = Number(routeParams.get("id"));
    this.product = this.productService.getById(productId);
  }

  addToCart() {
    this.notificationService.notify("O produto foi adicionado ao carrinho com sucesso");
    // Setting product info
    const product: IProductCart = {
      ...this.product!,
      quantity: this.quantity
    }
    // Add product to cart
    this.cartService.addToCart(product);
  }

}

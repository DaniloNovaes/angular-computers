export interface IProduct {
    id: number;
    description: string;
    price: number;
    paymentOption: string;
    stockQuantity: number;
    image: string;
}

export interface IProductCart extends IProduct {
    quantity: number;
}

export const products: IProduct[] = [
    { id: 1, description: "Mouse gamer", price: 439.00, paymentOption: "Pagamento exclusivamente em pix", stockQuantity: 10, image: "./assets/mouse-3.jpg" },
    { id: 2, description: "Headset Gamer FPS", price: 599.99, paymentOption: "Pagamento exclusivamente em pix", stockQuantity: 10, image: "./assets/headset-2.jpg" },
    { id: 3, description: "Teclado gamer", price: 200.10, paymentOption: "Pagamento exclusivamente em pix", stockQuantity: 10, image: "./assets/teclado-gamer.jpg" },
    { id: 4, description: "Duas placas de Vídeo", price: 18449.99, paymentOption: "Pagamento exclusivamente em pix", stockQuantity: 10, image: "./assets/video-card.jpg" },
    { id: 5, description: "Processador Ryzen", price: 1000, paymentOption: "Pagamento exclusivamente em pix", stockQuantity: 10, image: "./assets/processor.jpg" },
    { id: 6, description: "HD 1TB", price: 499.99, paymentOption: "Pagamento exclusivamente em pix", stockQuantity: 10, image: "./assets/hd.jpg" }, 
    { id: 7, description: "Monitor Apple3", price: 1200.50, paymentOption: "Pagamento exclusivamente em pix", stockQuantity: 10, image: "./assets/monitor-1.jpg" },
    { id: 8, description: "Macbook Air 2022 M1", price: 2500, paymentOption: "Pagamento exclusivamente em pix", stockQuantity: 10, image: "./assets/laptop-1.jpg" },
    { id: 9, description: "Macbook Air 2023 M2", price: 4500, paymentOption: "Pagamento exclusivamente em pix", stockQuantity: 10, image: "./assets/laptop-2.jpg" },
    { id: 10, description: "Fone Bluetooth", price: 299.99, paymentOption: "Pagamento exclusivamente em pix", stockQuantity: 10, image: "./assets/headset-1.jpg" },
    { id: 11, description: "Headset para músicos", price: 399.99, paymentOption: "Pagamento exclusivamente em pix", stockQuantity: 10, image: "./assets/headset-3.jpg" },
    { id: 12, description: "Mouse com fio", price: 20, paymentOption: "Pagamento exclusivamente em pix", stockQuantity: 10, image: "./assets/mouse-1.png" },
    { id: 13, description: "Mouse Bluetooth", price: 200, paymentOption: "Pagamento exclusivamente em pix", stockQuantity: 10, image: "./assets/mouse-2.jpg" },
    { id: 14, description: "Mouse pequeno", price: 50, paymentOption: "Pagamento exclusivamente em pix", stockQuantity: 10, image: "./assets/mouse-4.jpg" },
    { id: 15, description: "Teclado preto", price: 159.99, paymentOption: "Pagamento exclusivamente em pix", stockQuantity: 10, image: "./assets/keyboard-2.jpg" },
    { id: 16, description: "Teclado branco", price: 749.99, paymentOption: "Pagamento exclusivamente em pix", stockQuantity: 10, image: "./assets/keyboard-1.jpg" },
   
]
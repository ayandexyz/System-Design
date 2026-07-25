class InventoryManager {
  private stock: Map<string, number>;

  constructor() {
    this.stock = new Map([
      ["LAPTOP", 10],
      ["PHONE", 25],
      ["TABLET", 15],
    ]);
  }

  checkStock(productId: string, quantity: number): boolean {
    return (this.stock.get(productId) ?? 0) >= quantity;
  }

  reduceStock(productId: string, quantity: number): void {
    this.stock.set(productId, this.stock.get(productId)! - quantity);
  }
}

class NotificationService {
  sendOrderConfirmation(customerEmail: string, orderId: string, total: number): void {
    console.log(`Email to ${customerEmail}: Order ${orderId} confirmed. Total: $${total.toFixed(1)}`);
  }
}

class OrderProcessor {
  private inventoryManager: InventoryManager;
  private notificationService: NotificationService;
  private orderCounter = 0;

  constructor(inventoryManager: InventoryManager, notificationService: NotificationService) {
    this.inventoryManager = inventoryManager;
    this.notificationService = notificationService;
  }

  placeOrder(productId: string, quantity: number, customerEmail: string): void {
    if (!this.inventoryManager.checkStock(productId, quantity)) {
      console.log(`Insufficient stock for ${productId}`);
      return;
    }
    this.inventoryManager.reduceStock(productId, quantity);
    const total = quantity * 100.0;
    this.orderCounter++;
    const orderId = `ORD-${this.orderCounter}`;
    this.notificationService.sendOrderConfirmation(customerEmail, orderId, total);
  }
}

const inventory = new InventoryManager();
const notifications = new NotificationService();
const processor = new OrderProcessor(inventory, notifications);
processor.placeOrder("LAPTOP", 2, "alice@example.com");
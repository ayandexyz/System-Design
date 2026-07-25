// Before: One class doing three unrelated jobs
class OrderService {
    private inventory: Map<string, number> = new Map([
        ["LAPTOP", 10],
        ["PHONE", 25],
        ["TABLET", 15],
    ]);
    private orders: string[] = [];

    placeOrder(productId: string, quantity: number, customerEmail: string): void {
        // Responsibility 1: Inventory check
        const stock = this.inventory.get(productId) ?? 0;
        if (stock < quantity) {
            console.log(`Insufficient stock for ${productId}`);
            return;
        }

        // Responsibility 2: Order processing
        const pricePerUnit = 100.0;
        const total = pricePerUnit * quantity;
        const orderId = `ORD-${this.orders.length + 1}`;
        this.orders.push(orderId);

        // Responsibility 3: Update inventory
        this.inventory.set(productId, stock - quantity);

        // Responsibility 4: Send notification
        console.log(`Email to ${customerEmail}: Order ${orderId} confirmed. Total: $${total}`);
    }
}

// TODO: Refactor into OrderProcessor, InventoryManager, and NotificationService.

// After refactoring, usage should look like:
const inventory = new InventoryManager();
const notifications = new NotificationService();
const processor = new OrderProcessor(inventory, notifications);
processor.placeOrder("LAPTOP", 2, "alice@example.com");
interface ShippingStrategy {
   calculateCost(order: Order): number;
}
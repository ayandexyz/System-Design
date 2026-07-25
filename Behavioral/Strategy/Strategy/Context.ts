class ShippingCostService {
   private strategy: ShippingStrategy;

   // Constructor to set initial strategy
   constructor(strategy: ShippingStrategy) {
       this.strategy = strategy;
   }

   // Method to change strategy at runtime
   setStrategy(strategy: ShippingStrategy): void {
       console.log("ShippingCostService: Strategy changed to " + strategy.constructor.name);
       this.strategy = strategy;
   }

   calculateShippingCost(order: Order): number {
       if (!this.strategy) {
           throw new Error("Shipping strategy not set.");
       }
       const cost = this.strategy.calculateCost(order);
       console.log("ShippingCostService: Final Calculated Shipping Cost: $" + cost +
                  " (using " + this.strategy.constructor.name + ")");
       return cost;
   }
}
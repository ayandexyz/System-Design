class ECommerceAppV2 {
   static main(): void {
       const order1 = new Order();

       // Create different strategy instances
       const flatRate: ShippingStrategy = new FlatRateShipping(10.0);
       const weightBased: ShippingStrategy = new WeightBasedShipping(2.5);
       const distanceBased: ShippingStrategy = new DistanceBasedShipping(5.0);
       const thirdParty: ShippingStrategy = new ThirdPartyApiShipping(7.5, 0.02);

       // Create context with an initial strategy
       const shippingService = new ShippingCostService(flatRate);

       console.log("--- Order 1: Using Flat Rate (initial) ---");
       shippingService.calculateShippingCost(order1);

       console.log("\n--- Order 1: Changing to Weight-Based ---");
       shippingService.setStrategy(weightBased);
       shippingService.calculateShippingCost(order1);

       console.log("\n--- Order 1: Changing to Distance-Based ---");
       shippingService.setStrategy(distanceBased);
       shippingService.calculateShippingCost(order1);

       console.log("\n--- Order 1: Changing to Third-Party API ---");
       shippingService.setStrategy(thirdParty);
       shippingService.calculateShippingCost(order1);

       // Adding a NEW strategy is easy:
       // 1. Create a new class implementing ShippingStrategy (e.g., FreeShippingStrategy)
       // 2. Client can then instantiate and use it:
       //    const freeShipping: ShippingStrategy = new FreeShippingStrategy();
       //    shippingService.setStrategy(freeShipping);
       //    shippingService.calculateShippingCost(primeMemberOrder);
       // No modification to ShippingCostService is needed!
   }
}
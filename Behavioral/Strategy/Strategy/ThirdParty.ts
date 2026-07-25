class ThirdPartyApiShipping implements ShippingStrategy {
   private readonly baseFee: number;
   private readonly percentageFee: number;

   constructor(baseFee: number, percentageFee: number) {
       this.baseFee = baseFee;
       this.percentageFee = percentageFee;
   }

   calculateCost(order: Order): number {
       console.log("Calculating with Third-Party API strategy.");
       // Simulate API call
       return this.baseFee + (order.getOrderValue() * this.percentageFee);
   }
}
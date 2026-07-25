class WeightBasedShipping implements ShippingStrategy {
   private readonly ratePerKg: number;

   constructor(ratePerKg: number) {
       this.ratePerKg = ratePerKg;
   }

   calculateCost(order: Order): number {
       console.log("Calculating with Weight-Based strategy ($" + this.ratePerKg + "/kg)");
       return order.getTotalWeight() * this.ratePerKg;
   }
}
class FlatRateShipping implements ShippingStrategy {
   private rate: number;

   constructor(rate: number) {
       this.rate = rate;
   }

   calculateCost(order: Order): number {
       console.log("Calculating with Flat Rate strategy ($" + this.rate + ")");
       return this.rate;
   }
}
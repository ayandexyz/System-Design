class DistanceBasedShipping implements ShippingStrategy {
   private ratePerKm: number;

   constructor(ratePerKm: number) {
       this.ratePerKm = ratePerKm;
   }

   calculateCost(order: Order): number {
       console.log("Calculating with Distance-Based strategy for zone: " + order.getDestinationZone());
       switch (order.getDestinationZone()) {
           case "ZoneA":
               return this.ratePerKm * 5.0;
           case "ZoneB":
               return this.ratePerKm * 7.0;
           default:
               return this.ratePerKm * 10.0;
       }
   }
}
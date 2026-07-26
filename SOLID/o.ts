class ShippingCostCalculator {
    calculate(shippingType: string, weight: number): number {
        if (shippingType === "Standard") {
            return weight * 1.5;
        } else if (shippingType === "Express") {
            return weight * 3.0;
        } else if (shippingType === "Overnight") {
            return weight * 5.0;
        } else if (shippingType === "International") {
            return weight * 10.0;
        }
        throw new Error(`Unknown shipping type: ${shippingType}`);
    }
}

// Usage
const calculator = new ShippingCostCalculator();
console.log(`Standard: $${calculator.calculate("Standard", 2.0)}`);
console.log(`Express: $${calculator.calculate("Express", 2.0)}`);

// TODO: Define a ShippingStrategy interface with a calculateCost(weight) method.
// TODO: Create concrete implementations for each shipping type.
// TODO: Refactor ShippingCostCalculator to accept a ShippingStrategy.
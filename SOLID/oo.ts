interface ShippingStrategy {
    calculate(weight: number): number;
}

class StandardShipping implements ShippingStrategy{
    calculate(weight: number): number{
        return weight * 1.5;
    }
} 

class ExpressdShipping implements ShippingStrategy {
    calculate(weight: number){
        return weight * 3.0;
    }
}

class OvernightShipping implements ShippingStrategy {
    calculate(weight: number){
        return weight * 5.0;
    }
}

class InternationalShipping implements ShippingStrategy {
    calculate(weight: number){
        return weight * 10.0;
    }
}

class ShippingCostCalculator {
    calculate(method: ShippingStrategy , weight: number): number{
        return method.calculate(weight);
    }
}

//usage

const shipping = new ShippingCostCalculator();
const x = shipping.calculate(new OvernightShipping(), 20);
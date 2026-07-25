class FitnessData implements FitnessDataSubject {
   private steps: number;
   private activeMinutes: number;
   private calories: number;

   private readonly observers: FitnessDataObserver[] = [];

   registerObserver(observer: FitnessDataObserver): void {
       this.observers.push(observer);
   }

   removeObserver(observer: FitnessDataObserver): void {
       const index = this.observers.indexOf(observer);
       if (index > -1) {
           this.observers.splice(index, 1);
       }
   }

   notifyObservers(): void {
       for (const observer of this.observers) {
           observer.update(this);
       }
   }

   newFitnessDataPushed(steps: number, activeMinutes: number, calories: number): void {
       this.steps = steps;
       this.activeMinutes = activeMinutes;
       this.calories = calories;

       console.log("\nFitnessData: New data received – Steps: " + steps +
           ", Active Minutes: " + activeMinutes + ", Calories: " + calories);

       this.notifyObservers();
   }

   dailyReset(): void {
       this.steps = 0;
       this.activeMinutes = 0;
       this.calories = 0;

       console.log("\nFitnessData: Daily reset performed.");
       this.notifyObservers();
   }

   // Getters
   getSteps(): number { return this.steps; }
   getActiveMinutes(): number { return this.activeMinutes; }
   getCalories(): number { return this.calories; }
}
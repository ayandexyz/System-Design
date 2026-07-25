class LiveActivityDisplay implements FitnessDataObserver {
   update(data: FitnessData): void {
       console.log("Live Display → Steps: " + data.getSteps() +
           " | Active Minutes: " + data.getActiveMinutes() +
           " | Calories: " + data.getCalories());
   }
}
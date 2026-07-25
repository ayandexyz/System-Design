class FitnessDataNaive {
   private steps: number;
   private activeMinutes: number;
   private calories: number;

   // Direct, hardcoded references to all dependent modules
   private liveDisplay = new LiveActivityDisplayNaive();
   private progressLogger = new ProgressLoggerNaive();
   private notificationService = new NotificationServiceNaive();

   newFitnessDataPushed(newSteps: number, newActiveMinutes: number, newCalories: number): void {
       this.steps = newSteps;
       this.activeMinutes = newActiveMinutes;
       this.calories = newCalories;

       console.log("\nFitnessDataNaive: New data received - Steps: " + this.steps +
           ", ActiveMins: " + this.activeMinutes + ", Calories: " + this.calories);

       // Manually notify each dependent module
       this.liveDisplay.showStats(this.steps, this.activeMinutes, this.calories);
       this.progressLogger.logDataPoint(this.steps, this.activeMinutes, this.calories);
       this.notificationService.checkAndNotify(this.steps);
   }

   dailyReset(): void {
       // Reset logic...
       if (this.notificationService) {
           this.notificationService.resetDailyNotifications();
       }
       console.log("FitnessDataNaive: Daily data reset.");
       this.newFitnessDataPushed(0, 0, 0); // Notify with reset state
   }
}
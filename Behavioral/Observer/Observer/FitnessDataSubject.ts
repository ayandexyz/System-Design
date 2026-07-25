interface FitnessDataSubject {
   registerObserver(observer: FitnessDataObserver): void;
   removeObserver(observer: FitnessDataObserver): void;
   notifyObservers(): void;
}
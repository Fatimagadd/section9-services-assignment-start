
export class CounterService {

  activeToInactiveCounter=0;
  inactiveToActiveCounter=0;

  constructor() { }

  incrementActiveToInactive(){
    this.activeToInactiveCounter++;
    console.log("activeToInactiveCounter = ", this.activeToInactiveCounter);
  }

  incremenInactiveToActive(){
    this.inactiveToActiveCounter++;
    console.log("inactiveToActiveCounter = ", this.inactiveToActiveCounter);
  }
}

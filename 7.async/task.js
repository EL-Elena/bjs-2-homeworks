class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.intervalId = null;
  }
  
  addClock(time, callback) {
    if (!time || !callback) {
      throw new Error('Отсутствуют обязательные аргументы');
    }
    
    if (this.alarmCollection.find(i => i.time === time)){
      console.warn('Уже присутствует звонок на это же время');
    } 
    
    this.alarmCollection.push({callback, time, canCall: true});
  }

  removeClock(time) {
    this.alarmCollection = this.alarmCollection.filter(i => i.time !== time);
  }

  getCurrentFormattedTime(){
    let timeNow = new Date().toLocaleTimeString().slice(0,-3);
    return timeNow;
  }

  start() {
    if (this.intervalId != null){
      return;
    }

    this.intervalId = setInterval(() => {
      this.alarmCollection.forEach(i => {
        if (i.time ===  this.getCurrentFormattedTime() && i.canCall === true) {
          i.canCall = false;
          i.callback();
        }
      });
    }, 1000);
  }

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  resetAllCalls() {
    this.alarmCollection.forEach(i => i.canCall = true);
  }
  
  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}

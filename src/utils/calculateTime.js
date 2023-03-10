
export const TimeCalculator=(postTime)=>{
    const postTimestamp = new Date(postTime);
    const now = new Date();
    const elapsedTime = now - postTimestamp;
    const elapsedSeconds = Math.round(elapsedTime / 1000);
    if (elapsedSeconds < 60) {
      return elapsedSeconds + " second" + (elapsedSeconds == 1 ? "" : "s") + " ago";
    }
    
    const elapsedMinutes = Math.round(elapsedSeconds / 60);
    if (elapsedMinutes < 60) {
      return elapsedMinutes + " minute" + (elapsedMinutes == 1 ? "" : "s") + " ago";
    }
    
    const elapsedHours = Math.round(elapsedMinutes / 60);
    if (elapsedHours < 24) {
      return elapsedHours + " hour" + (elapsedHours == 1 ? "" : "s") + " ago";
    }
    
    const elapsedDays = Math.round(elapsedHours / 24);
    if (elapsedDays < 7) {
      return elapsedDays + " day" + (elapsedDays == 1 ? "" : "s") + " ago";
    }
    
    const elapsedWeeks = Math.round(elapsedDays / 7);
    if (elapsedWeeks < 4) {
      return elapsedWeeks + " week" + (elapsedWeeks == 1 ? "" : "s") + " ago";
    }
    
    const elapsedMonths = Math.round(elapsedDays / 30);
    if (elapsedMonths < 12) {
      return elapsedMonths + " month" + (elapsedMonths == 1 ? "" : "s") + " ago";
    }
    
    const elapsedYears = Math.round(elapsedDays / 365);
    return elapsedYears + " year" + (elapsedYears == 1 ? "" : "s") + " ago";
    
}


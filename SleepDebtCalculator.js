const getSleepHours = day => {
    if (day === 'monday') {
    return 6;
  } else if (day === 'tuesday') {
    return 7;
  } else if (day === 'wednesday') {
    return 9;
  } else if (day === 'thursday') {
    return 8;
  } else if (day === 'friday') {
    return 5;
  } else if (day === 'saturday') {
    return 10;
  } else if (day === 'sunday') {
    return 11;
  } 
};

const getActualSleepHours = () => {
return (
getSleepHours('monday') + 
getSleepHours('tuesday') + 
getSleepHours('wednesday') + 
getSleepHours('thursday') + 
getSleepHours('friday') + 
getSleepHours('saturday') + 
getSleepHours('sunday') 
) }

const getIdealSleepHours = () => {
  const idealHours = 8 ;
  return idealHours * 7;
}


const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();

if (actualSleepHours > idealSleepHours) {
    console.log("นอนเยอะปัย นอนเกินไปตั้ง" + (actualHoursofSleep - idealSleepHours) + "ชั่วโมงที่ต้องการนอน");
  } else if (actualSleepHours < idealSleepHours) {
    console.log("นอนน้อยไปนะเนี่ย นอนขาดไปตั้ง" +
        (idealSleepHours - actualSleepHours) + "ชั่วโมงที่ต้องการนอน");
  } else {
    console.log("เก่งมากเจ้าโบ้");
  };
};

calculateSleepDebt()


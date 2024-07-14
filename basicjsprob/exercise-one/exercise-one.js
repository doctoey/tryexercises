// 1. ลบเครื่องหมาย ! ออกจากส่วนท้ายของสตริง
// ตัวอย่าง
// remove("Hi!") 			ผล "Hi"
// remove("Hi!!!")			ผล "Hi!!"
// remove("!Hi") 			ผล "!Hi"
// remove("!Hi!") 			ผล "!Hi"
// remove("Hi! Hi!") 		ผล "Hi! Hi"
// remove("Hi") 			ผล "Hi"

export const remove1 = (str) => {
  if (str.endsWith("!")) {
    return str.slice(0, str.length - 1);
  }
  return str;
};

export const remove2 = (str) => {
  return str.replace(/!$/, "");
};

export const remove3 = (str) => {
    // แปลงสตริงเป็นอาร์เรย์ของตัวอักษรด้วย split("")
    const arr = str.split("");
  
    // ตรวจสอบว่าตัวสุดท้ายของอาร์เรย์เป็น ('!')
    if (arr[arr.length - 1] === "!") {
      // ถ้าเป็นจริง ให้ลบตัวสุดท้ายของอาร์เรย์ออกด้วย pop()
      arr.pop();
    }
  
    // นำอาร์เรย์ที่ได้มาเชื่อมกลับเป็นสตริงด้วย join("")
    return arr.join("");
  };
  

export const remove4 = (str) => {
  return str.endsWith("!") ? str.substring(0, str.length - 1) : str;
};

export const remove5 = (str) => {
  return str.endsWith("!") ? str.slice(0, -1) : str;
};

export const remove6 = (str) => {
  return str.replace(/!$/, "");
};

export const remove7 = (str) => {
  return str.split("").reduce((acc, char, i, arr) => {
    if (i === arr.length - 1 && char === "!") return acc;
    return acc + char;
  }, "");
};

export const remove8 = (str) => {
  const arr = str.split("");
  if (arr[arr.length - 1] === "!") {
    arr[arr.length - 1] = "";
  }
  return arr.join("");
};
export const remove9 = (str) => {
  let arr = [...str];
  if (arr[arr.length - 1] === "!") {
    arr.pop();
  }
  return arr.join("");
};

export const remove10 = (str) => {
  return str.lastIndexOf("!") === str.length - 1 ? str.slice(0, -1) : str;
};

export const remove11 = (str) => {
  return str.replace(/!$/, (match) => (match ? "" : match));
};

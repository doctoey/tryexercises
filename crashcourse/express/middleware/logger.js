function logger(req, res, next) { // สร้าง middleware ของเราเอง โดยมี req, res, next ใน parameter next คือ function ที่เราจะเรียกใช้เมื่อเราเสร็จการทำงานของ middleware นี้แล้ว 
    console.log(`[Logger] : ${req.method} ${req.url}`)
    next(); // เรียกใช้ next() เพื่อให้ไปทำ middleware ต่อไป
}

module.exports = logger; // export ให้นำไปใช้งานได้
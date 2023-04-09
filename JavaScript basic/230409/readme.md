# JS Practice

## Installation

install package โดยใช้คำสั่งค่อไปนี้ 

```bash
npm install
```

---

## Structure

แต่ละ folder คือโจทย์ 1 ข้อ ประกอบด้วย 3 ไฟล์คือ
- `index.js`
    - 📝 ใช้ในการทำโจทย์
- `question.md` 
    - 👀 ใช้ในการดูโจทย์
- `index.test.js`
    - ❌❌❌ ใช้ในการ test ห้ามแก้ไข ❌❌❌

---

## Run

สามารถทดสอบไฟล์ของตัวเองเมื่อทำเสร็จแล้วโดยใช้คำสั่งนี้ใน terminal

```bash
node  ./ชื่อโฟล์เดอร์/index.js
```

เช่น หากต้องการ run โจทย์ข้อที่ 1

```bash
node ./1/index.js
```
เช่น หากต้องการ run โจทย์ข้อที่ 5

```bash
node ./5/index.js
```

หรือลง extension **code runner**

https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner

---

## Test

หากทำโจทย์เสร็จแล้วต้องการ Test ให้ใช้คำสั่งนี้ใน terminal (การเว้นวรรคมีผลต่อคำสั่ง ระวังเว้นวรรคผิด)

```bash
npm test -- ชื่อโฟล์เดอร์/index.test.js
```

เช่น หากต้องการ test โจทย์ข้อที่ 1

```bash
npm test -- 1/index.test.js
```

เช่น หากต้องการ test โจทย์ข้อที่ 4

```bash
npm test -- 4/index.test.js
```
---

## License

[MIT](https://choosealicense.com/licenses/mit/)
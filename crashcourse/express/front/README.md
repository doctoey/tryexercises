จริงๆ แล้วทั้ง `restaurants` และ `getProducts` สามารถใช้ `async/await` ได้ทั้งคู่ แต่วิธีการที่คุณใช้ `useEffect` ในที่นี้ไม่ใช่เรื่องของการใช้ `async/await` หรือวิธีการเรียกฟังก์ชัน `getRestaurants` หรือ `getProducts` นั่นเอง

ตัวอย่างนี้เป็นส่วนของการใช้ `useEffect` และ `async/await` ในทั้ง `restaurants` และ `getProducts`:

1. การใช้ `useEffect` สำหรับ `restaurants`:

```javascript
useEffect(() => {
  const getRestaurants = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/apis/restaurants",
        { crossdomain: true }
      );
      console.log(response.data);
      const restaurants = response.data;
      setRestaurants(restaurants);
    } catch (error) {
      console.error(error);
    }
  };
  getRestaurants();
}, []);
```

2. การใช้ `async/await` ใน `getProducts`:

```javascript
const getProducts = async () => {
  try {
    const response = await axios.get("https://dummyjson.com/products", {
      crossdomain: true,
    });
    console.log(response.data);
    const products = response.data.products;
    setProducts(products);
  } catch (error) {
    console.error(error);
  }
};

useEffect(() => {
  getProducts();
}, []);
```

การทำงานของ `useEffect` คือที่นั่น เมื่อ component ถูก mount (ตอนที่ component ถูก render แล้วโผล่ใน DOM) ฟังก์ชันที่ใส่ใน `useEffect` จะถูกเรียก และถ้าเราใส่ฟังก์ชันที่เป็น `async` อย่าง `getRestaurants` หรือ `getProducts` เราสามารถใช้ `await` ในการรอให้ Promise ในฟังก์ชันทำงานเสร็จก่อนถึงจะทำคำสั่งถัดไปได้

ในที่นี้ การที่ `restaurants` ทำงานได้โดยไม่ต้องใช้ `async/await` เพราะรอให้ `axios.get` ทำงานจบแล้วจึงให้ค่ากลับมา ซึ่งเป็นแบบนี้เป็นการใช้ `Promise` ในลักษณะที่ไม่ต้องใช้ `async/await` ตรงนี้ แต่ถ้าคุณต้องการก็สามารถใช้ได้เช่นกัน

สรุปแล้ว ทั้ง `restaurants` และ `getProducts` สามารถใช้ `async/await` ได้ และวิธีการใช้ `useEffect` ไม่ได้มีผลต่อนี้ ที่ผลักผันเป็นเรื่องอื่นๆ ที่อาจจะต้องดูที่โค้ดที่ไม่ได้แสดงทำให้เรารู้ว่าผลักผันนี้มาจากไหน

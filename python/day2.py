# เฉลยการบ้าน
# รับค่ามา 4 ข้อมูล
num1 = (input("หมายเลข 1 คือ: "))
num2 = (input("หมายเลข 2 คือ: "))
num3 = int(input("หมายเลข 3 คือ: "))
num4 = int(input("หมายเลข 4 คือ: "))

# นำหมายเลขที่ 1 มาเรียงกับหมายเลขที่ 2
result1 = int(num1 + num2) # ทำเป็น str ก่อน จะได้เอามา join ได้ แล้วแปลงเป็น int

# นำหมายเลขที่ 3 มาบวกกับหมายเลขที่ 4
result2 = num3 + num4

# หาร
final_result = result1 / result2

# ปริ้น
print(f"หมายเลขที่ 1 เรียงต่อกับหมายเลขที่ 2 เท่ากับ : {result1}")
print(f"หมายเลขที่ 3 + หมายเลขที่ 4 เท่ากับ : {result2}")
print(f"The final result is: {final_result}")

# ---

# หาพื้นที่ส่วนที่แรเงา
# radius: 4

r = int(input("radius: "))
# อันดับแรก หาที่พื้นที่สี่เหลี่ยมก่อน
# สอง หาพื้นที่ของวงกลม
# สาม หาพื้นที่ส่วนที่แรเงา

# เส้นผ่านศูนย์กลาง r*2

sq = (r*2)**2
circle = (22/7)*r**2 #พาย อาร์ กำลังสอง
shade = sq - circle #เงา สี่เหลี่ยม ลบ วงกลม

# print(f"Squre area: {sq.2f}") syntax error
# print(f"circle area: {circle.2f}")
# print(f"shade area: {shade.2f}")

print(f"Square area: {sq:.2f}")
print(f"Circle area: {circle:.2f}")
print(f"Shaded area: {shade:.2f}")

# ---
# รับจำนวนคี่จากผู้ใช้
num1 = int(input("จำนวนคี่ระหว่าง 1 ถึง 15(1): "))
num2 = int(input("จำนวนคี่ระหว่าง 1 ถึง 15(2): "))

# ตรวจสอบว่าจำนวนเป็นจำนวนคี่และอยู่ในช่วง 1 ถึง 15
# ถ้าเป็นเลขคู่ จะทำงานต่อจนกว่าจะกรอกเลขคี่
# ใช้ or เพราะ จริงแค่เงื่อนไขเดียว while loop จะทำงาน
while (num1 % 2 == 0) or (num1 < 1 or num1 > 15):
    num1 = int(input("กรุณาใส่จำนวนคี่ระหว่าง 1 ถึง 15(1): "))

while (num2 % 2 == 0) or (num2 < 1 or num2 > 15):
    num2 = int(input("กรุณาใส่จำจำนวนคี่ระหว่าง 1 ถึง 15(2): "))

result = num1 * num2

print(f"{num1} * {num2} = {result}")
# ----
amount = int(input("เงิน: "))

# ใบเทา
count_1000 = amount // 1000
amount %= 1000
print(f"ใบเทา: {count_1000} ใบ")

# ใบม่วง
count_500 = amount // 500
amount %= 500
print(f"ใบม่วง: {count_500} ใบ")

# ใบแดง
count_100 = amount // 100
amount %= 100
print(f"ใบแดง: {count_100} ใบ")

# ใบฟ้า
count_50 = amount // 50
amount %= 50
print(f"ใบฟ้า: {count_50} ใบ")

# ใบเขียว
count_20 = amount // 20
amount %= 20
print(f"ใบเขียว: {count_20} ใบ")

# เศษ
print(f"เศษ {amount} บาท")

# ใบเทา = bank //1000 = 7
# ใบม่วง = bank - (ใบเทา x1000) // 500 = 0
# ใบแดง = bank - (ใบเทา x1000) - (ใบม่วง x500) // 100 = 2
# ใบฟ้า = bank -  (ใบเทา x1000) - (ใบม่วง x500) - (ใบแดงx 100 ) // 50 = 1
# ใบเขียว  = bank -  (ใบเทา x1000) - (ใบม่วง x500) - (ใบแดงx 100 ) - (ใบฟ้า x 50) // 20 = 0

# 7257 // 1000 หารเอาผล ได้ 7 ใบเทา
# 257 // 500 หารเอาผล ได้ 0 ใบม่วง
# 257 // 100 หารเอาผล ได้ 2 
# 57 // 50 ได้ 1
# เศษ 7
sid = input("Student id : ")
name = input("Name : ")
age = int(input("Age : "))
mid = float(input("Midterm : "))
fi = float(input("Final : "))

score = mid + fi

print("%s, %d years woi!! You have %.2f points" % (name, age, score))



# 
# first_name = input("Enter your first name: ")
# last_name = input("Enter your last name: ")

# print("Hello... %s, %s" % (first_name, last_name))


first_name = input("Enter your first name: ")
last_name = input("Enter your last name: ")

# print(f"Hello... {first_name}, {last_name}")
# print("Hello...." , first_name ,",", last_name) ผิด

# 
fn = input("First name: ")
sn = input("Surname: ")
birth = int(input("Year of birth: "))
weight = float(input("Weight: "))
height = float(input("Height: "))

current_year = 2567

age = current_year - birth
bmi = int(weight / ((height/100) ** 2) )

print(f"Hi, {fn} {sn}. You are {age} years old.")
print(f"Your weight is {weight:.2f}, height is {height:.2f} and your BMI is {bmi}.")


# 
# มา 4 จ่าย 3
num_customers = int(input("Enter number of customers: "))
price_per_head = int(input("Enter price per head: "))   

# คำนวณราคาที่ลูกค้าต้องจ่าย
total_price = ((num_customers // 4) * 3 + (num_customers % 4)) * price_per_head 
# num_customers % 4 ที่หาร 4 ไม่ลงตัวเหลือเศษกี่คน เอาคนมาบวกด้วย

# แสดงผลลัพธ์
print(f"{num_customers} คน จ่าย {total_price} บาท")

# 
# รับค่ามา 4 ข้อมูลเป็นจำนวนเต็ม (int)
num1 = int(input("หมายเลข 1 คือ: "))
num2 = int(input("หมายเลข 2 คือ: "))
num3 = int(input("หมายเลข 3 คือ: "))
num4 = int(input("หมายเลข 4 คือ: "))

# นำหมายเลขที่ 1 มาเรียงกับหมายเลขที่ 2
result1 = int(str(num1) + str(num2)) # ทำเป็น str ก่อน จะได้เอามา join ได้ แล้วแปลงเป็น int

# นำหมายเลขที่ 3 มาบวกกับหมายเลขที่ 4
result2 = num3 + num4

# หาร
final_result = result1 / result2

# ปริ้น
print(f"หมายเลขที่ 1 เรียงต่อกับหมายเลขที่ 2 เท่ากับ : {result1}")
print(f"หมายเลขที่ 3 + หมายเลขที่ 4 เท่ากับ : {result2}")
print(f"The final result is: {final_result}")

# หมายเลข 1 คือ: 
# 5
# หมายเลข 2 คือ: 
# 3
# หมายเลข 3 คือ: 
# 4
# หมายเลข 4 คือ: 
# 7
# หมายเลขที่ 1 เรียงต่อกับหมายเลขที่ 2 เท่ากับ : 53
# หมายเลขที่ 3 + หมายเลขที่ 4 เท่ากับ : 11
# The final result is: 4.818181818181818


# ** Process exited - Return Code: 0 **
# Press Enter to exit terminal

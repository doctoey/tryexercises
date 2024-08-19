# รับ input 2 ตัว
# เลือกว่า บวก ลบ คูณ หาร
# มี input อีก? โดยที่ input เขียนว่า selectoperation

# บวก
def add(n1, n2):
    return n1 + n2

# ลบ
def subtract(n1, n2):
    return n1 - n2

# คูณ
def multiply(n1, n2):
    return n1 * n2

# หาร
def devide(n1, n2):
    return n1 / n2

n1 = int(input("Number 1 : "))
n2 = int(input("Number 2 : "))
print("---- Select operation ----")
print("1.Add")
print("2.Subtract")
print("3.Multiply")
print("4.Devide")

selectoperation = int(input("your choice: "))

# ถ้าเลือก 1 ให้เรียกฟังก์ชัน add
if selectoperation == 1:
    result = add(n1, n2)
    print(result)
# ถ้าเลือก 2 ให้เรียกฟังก์ชัน subtract
elif selectoperation == 2:
    result = subtract(n1, n2)
    print(result)
# ถ้าเลือก 3 ให้เรียกฟังก์ชัน multiply
elif selectoperation == 3:
    result = multiply(n1, n2)
    print(result)
# ถ้าเลือก 4 ให้เรียกฟังก์ชัน devide
elif selectoperation == 4:
    result = devide(n1, n2)
    print(result)

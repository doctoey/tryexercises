# 150k<x<300k => เสียภาษี 5% รายได้ 
# 300k<x<500k => เสียภาษี 10% รายได้ 
# 500k<x<750k => เสียภาษี 15% รายได้ 
# 750k<x<1m => เสียภาษี 20% รายได้ 
# 150k  / 1m contact dep
re = int(input("input revenue: "))

if 150000 < re <= 300000:
    tax = re * 0.05
    print(f"tax 5% must pay {tax:.1f}")
elif 300000 < re <= 500000:
    tax = re * 0.1
    print(f"tax 10% must pay {tax:.1f}")
elif 500000 < re <= 750000:
    tax = re * 0.15
    print(f"tax 15% must pay {tax:.1f}")
elif 750000 < re <= 1000000:
    tax = re * 0.2
    print(f"tax 20% must pay {tax:.1f}")
else:
    print(f"your revenue is {re} pls contact dep")

##----------------------------------##

weight = int(input("input weight (kg): "))
height = float(input("input height (m): "))

bmi = weight / (height ** 2)

if bmi < 18.5:
    print(f"BMI ของคุณคือ {bmi:.1f} ซึ่งต่ำกว่าเกณฑ์")
elif 18.5 <= bmi <= 22.9:
    print(f"BMI ของคุณคือ {bmi:.1f} ซึ่งสมส่วน")
else:
    print(f"BMI ของคุณคือ {bmi:.1f} ซึ่งสูงกว่าเกณฑ์")

##----------------------------------##

# รับข้อมูลจากผู้ใช้ 0 - 99 ถ้าเลขที่รับมาเป็น 50 ได้รับรางวัลที่ 1
# ถ้าเลขที่รับมาเป็น 40-49 หรือ 51-60 ได้รับรางวัลที่ 2
# ถ้าเลขที่รับมาเป็น 30-39 หรือ 61-70 ได้รับรางวัลที่ 3
# ถ้าไม่ได้รางวัล ให้แสดงว่าไม่ได้รับรางวัล
n = int(input("input number: "))

if n == 50:
    print("ได้รับรางวัลที่ 1")
elif (40 <= n <= 49) or (51 <= n <= 60):
    print("ได้รับรางวัลที่ 2")
elif (30 <= n <= 39) or (61 <= n <= 70):
    print("ได้รับรางวัลที่ 3")
else:
    print("ไม่ได้รับรางวัล")

##----------------------------------####----------------------------------##

while True:
    n = int(input("input number (0-99): "))
    
    if 0 <= n <= 99:
        if n == 50:
            print("ได้รับรางวัลที่ 1")
        elif (40 <= n <= 49) or (51 <= n <= 60):
            print("ได้รับรางวัลที่ 2")
        elif (30 <= n <= 39) or (61 <= n <= 70):
            print("ได้รับรางวัลที่ 3")
        else:
            print("ไม่ได้รับรางวัล")
        break 
    else:
        print("กรุณากรอกตัวเลขระหว่าง 0-99")

##----------------------------------##
# จงเขียนโปรแกรมที่รับชื่อ นามสกุล แล้วตรวจสอบมีสระ (a,e,i,o,u) กี่ตัว และแสดงผลลัพธ์ออกมา

name = input("ชื่อ: ")

vowel = 0
alphabet = 0

for s in name:
    if s in 'aeiouAEIOU':
        vowel += 1
    else :
      alphabet += 1

print ("vowel",vowel)
print ("alphabet",alphabet)

##----------------------------------##

# หาค่าของ factorial กำหนดค่าที่รับมาเป็นจำนวนเต็มบวกเท่านั้น และใช้ while loop ในการคำนวณ

n = int(input("input: "))

if n < 0:
    print("กรุณากรอกเฉพาะจำนวนเต็มบวก")
else:
    fact = 1
    count = n
    
    while count > 0:
        fact *= count
        count -= 1
    
    print(f"ค่า factorial ของ {n} คือ {fact}")

##----------------------------------####----------------------------------##
n = int(input("input number: "))

fac = 1
while n >= 1 :
    fac *= n
    if n == 1 :
        print("1 = %d"%fac)
    else :
        print("%d x "%n,end='')
    n -= 1

# กรอกจำนวนรอบในการรับตัวเลข forloop แล้วรับตัวเลขตามจำนวนรอบที่กรอกไว้
# แล้วบวกตัวเลขทั้งหมดที่รับมาแล้วแสดงผลลัพธ์
n = int(input("input a range of number : "))
total = 0
for i in range(n):
    num = int(input("input num %d : " % (i + 1)))
    total += num

print("the total is:", total)

##------------------------------------##

# เขียนโปรแกรมที่หาข้อมูลที่อยู่ใน list โดยผู้ใช้ป้อนค่าได้ตามต้องการ ทำงานได้ 5 ครั้ง พบข้อมูลให้แสดงออกมา ไม่พบให้แสดง “Not Found”

listt = ["Mama", "Ja", "kub", "TEST", "Wip"]
for i in range(5):
    key = input("input name: ")

    if key in listt:
        found = listt.index(key)  # หาเจอจะบอกตำแหน่ง
        print(f"เจอจ้า: {key} at index {found}")
    else:
        found = -1
        print(f"ไม่เจอ, index: {found}")

    print("------------")


########

listt = ["Nita", "Jai", "Rai", "Jang", "Kub"]
for i in range(5):
    key = input("input name: ")
    # key = input("input name: ").capitalize() #ทำให้ตัวแรกเป็นตัวพิมพ์ใหญ่

    if key not in listt:
        found = -1
        print(f"ไม่เจอ, index: {found}")
    else:
        found = listt.index(key)  # หาเจอจะบอกตำแหน่ง
        print(f"เจอจ้า: {key} at index {found}")

    print("------------")

##------------------------------------##

l = []

for i in range(10):
    n = int(input(f"input value {i+1}: ")) 
    l.append(n)

maxx = max(l)
minn = min(l)
print(l)
print(f"ค่าสูงสุด: {maxx}")
print(f"ค่าต่ำสุด: {minn}")

# print("ค่าทั้งหมดในรายการ:")
# for something in l:
#     print(something)

##------------------------------------##
# จงเขียน python โดยรับค่าข้อมูลพนักงาน ได้แก่ รหัส ชื่อ อายุงาน เงินเดือน มาเก็บไว้ในข้อมูลแบบลำดับรายการอย่างใดอย่างหนึ่ง เก็บข้อมูลได้ 10 คน ข้อมูลมาคิดโบนัส เกณฑ์ดังนี้
# 1. อายุงาน ไม่เกิน 5 ปี โบนัส 3 เท่า
# 2. มากกว่า 5 ถึง 10 ปี โบนัส 5 เท่า
# 3. มากกว่า 10 ปี โบนัส 8 เท่า
# แสดงข้อมูทั้งหมดออกมา พร้อมโบนัสที่ได้รับแต่ละคน

l = []

for i in range(2):
    eid = input(f"IDคนที่ {i+1} : ")
    name = input(f"ชื่อคนที่ {i+1} : ")
    year = int(input(f"ทำงานมากี่ปี : "))
    salary = int(input(f"เงินเดือนคนที่ {i+1} : "))
    
    if year <= 5:
        bonus = salary * 3
    elif year < 10:
        bonus = salary * 5
    else:
        bonus = salary * 8
    
    employee = [eid, name, year, salary, bonus]
    l.append(employee)

print("\nข้อมูลพนักงาน:")
print("[ID, ชื่อ, ปี, เงินเดือน, โบน๊าด]")
for emp in l:
    print(emp)
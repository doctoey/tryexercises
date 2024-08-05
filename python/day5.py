# จงเขียนโปรแกรมรับข้อความใดๆ ซึ่งประกอบด้วยตัวอักษรและอักขระพิเศษ ถ้าพบอักขระพิเศษให้นับว่ามีกี่ตัว
# และลบออกจาจกข้อความ แสดงข้อความที่ลบอักขระพิเศษไปแล้วว

name = input("enter ja : ")
clean_string = ""
count = 0
for char in name:
    if char in "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ":
        # if char.isalpha():
        clean_string += char
    else:
        count += 1

print("Your string is:", name)
print("count special char :", count)
print("result:", clean_string)

## -- End -- ##
# จงนำข้อมูลราคาผลไม้ต่อไปนี้สร้างเป็น dictionary พิมพ์ออกมาในรูป dictionary ให้ผู้ใช้ป้อนชื่อผลไม้สองชนิด และให้สรุปราคารวม
fruit = {
    "banana": 35,
    "cherry": 200,
    "apple": 120,
    "lemon": 80,
    "grape": 150,
    "melon": 200,
}
print("fruit dictionary", fruit)

f1 = input("enter fruit1: ").lower()
f2 = input("enter fruit2: ").lower()

total = fruit[f1] + fruit[f2]
print("your selection is %s + %s, cost = %d + %d" % (f1, f2, fruit[f1], fruit[f2]))
print("total", total)

## -- End -- ##
# จงเขียนโปรแกรม รับคำศัพท์ (word) ตั้งแต่ 3 ถึง 5 คำเท่านั้น ถ้าไม่อยู่ในพิสัย ให้วนลูปรับจำนวนคำศัพท์ใหม่ จนกว่าจะได้ข้อมูลที่ต้องการ หลังจากนั้นเก็บไว้ใน dictionary ซึ่งศัพท์จะเป็น key ความยาวศัพท์จะเป็น value แล้วแสดงออกข้อมูล dictionary ทั้งหมดออกมา
word_dict = {}
while True:
    round = int(input("how many words 3 - 5 : "))
    if 3 <= round <= 5:
        break
    else:
        print("Invalid number")
for i in range(round):
    inputword = str(input(f"Enter word {i + 1}: "))
    # count = 0
    count = len(inputword)
    # for char in inputword:
    #     count += 1
    word_dict[inputword] = count
print(word_dict, "total word")

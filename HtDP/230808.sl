;Expression

;3+4
(+ 3 4) ;+(3, 4) ;7
;รันด้วย command r
(+ 3 4 (* 2 3) ) ;13
(/ 12 (* 2 3) ) ;2

;To form an expression
;<value>
;(<premitive> <expression> ...)

(sqr 3) ;9
(sqrt 16) ;4
(sqrt 2) ;#i1.4142135623730951

(sqrt (+ (sqr 3) (sqr 4))) ;5

(- 1 1/3) ; !== (2/3)

(= (- 1 1/3) 2/3) ;true ไมมันตอบงี้ เพราะมันมี type ที่เก็บเป็นเลขเศษส่วน

;Evaluation
(+ 2 (* 3 4) (- (+ 1 2) 3)) ;14
(+ 2 12      (- (+ 1 2) 3)) ;14
(+ 2 12      (- 3       3)) ;14
(+ 2 12      0) ;14
;To evaluate a primitive call:
;1. Reduce expression (operands) to values
;2. Apply primitive (operator) to the values

;Intuitively
;1. left to right
;2. inside to outside

"String literal" ;"String literal"
;primative ของ string
(string-append "หลายตัว" " " "JAA") ;"หลายตัว JAA"
"123" ;"123"
123 ;123
(+ 1 123) ;124
;(+ 1 "123") ;+: expects a number, given "123"

(string-length "ความยาว") ;7
(substring "012345678" 2 4) ;"23"  เริ่มจาก index 2 -> 4-1
(substring "Bookstore" 2 4) ;"ok"
;(substring "Bookstore" 4 10) ;substring: ending index is out of range
;ending index: 10
;valid range: [0, 9]
;string: "Bookstore"

;primitive operator primitive type image
(require 2htdp/image)

(circle 10 "solid" "red") ;solid ระบายทึบ
(rectangle 30 60 "outline" "yellow") ;outline ระบายขอบ
(text "hello" 24 "orange") ;ไม่เหมือน string ปกตินะ


(above (circle 10 "solid" "red")   ;จัดระเบียบ command i
       (circle 20 "solid" "yellow")
       (circle 30 "solid" "green")) ;เรียงบนลงล่าง เป็นหนึ่งรูปภาพ คล้าย sum

(beside (circle 10 "solid" "red")   
       (circle 20 "solid" "yellow")
       (circle 30 "solid" "green")) ;เรียงซ้ายไปขวา เป็นหนึ่งรูปภาพ

(overlay (circle 10 "solid" "red")   
       (circle 20 "solid" "yellow")
       (circle 30 "solid" "green")) ;ทับกัน

;const
(define WIDTH 800)
(define HEIGHT 600)
;to form a constant definition
;(define <name> <expression>

;Evaluation rules for constants definition
;To evaluate constant definition
;- Evaluate the expreesion
;- Record the resulting values as the value
; of the constant with the given name
;- the result is the recorded value

(+ WIDTH HEIGHT) ;1400

;(define DUCK(+ 2 (* 3 4) (- (+ 1 2) 3))) ;14

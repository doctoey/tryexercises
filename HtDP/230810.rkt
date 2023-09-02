;; The first three lines of this file were inserted by DrRacket. They record metadata
;; about the language level of this file in a form that our tools can easily process.
#reader(lib "htdp-beginner-reader.ss" "lang")((modname |230810|) (read-case-sensitive #t) (teachpacks ()) (htdp-settings #(#t constructor repeating-decimal #f #t none #f () #f)))
;;Recap
;(+ 2 (* 3 4) (- (+ 1 2) 3)) ;14
;(+ 2 (* 3 4) (- 3 3)) ;14
;(+ 2 (* 3 4) 0) ;14
;(+ 2 12) ;14
;
;(+ 2 12      (- (+ 1 2) 3)) ;14
;(+ 2 12      (- 3       3)) ;14
;(+ 2 12      0) ;14
;
;;Definition
;;f(x) = 2 * x
;
;;Application
;;f(3) = 2 * 3 = 6
;;f(4) = 2 * 4 = 8
;
;;(define (bulb c)
;;  (circle 40 "solid" c))
;;
;;(above (bulb "red")
;;       (bulb "yellow")
;;       (bulb "green"))
;
;;To form a function definition
;;#;
;
;;To form a function call expresion
;;(<function-name> <expression>...)
;
;;Evaluation rules for function definition
;;To evaluate function definition:
;;   Simply record definition
;;To evaluate a function call
;;- Reduce arguments (operands) to values
;;- Replace function call by
;;  body of the function in which every occurences of
;;  parameters are replaced by coresponding arguments
;
;;(bulb (string-append "re" "d"))
;;(bulb "red")
;;(circle 50 "solid" "red")
;
;
;;Boolean
;#false
;#true
;
;(define WIDTH 800)
;(define HEIGHT 600)
;
;;comparison operator
;;(< WIDTH HEIGHT) ;#false
;;(> WIDTH HEIGHT) ;#true
;;
;;(= 0 2) ;false
;;(= 0 0) ;true
;;(<= 1 0) ;#false
;;
;;(define PRED "Predicates")
;;(string=? "Predicates" PRED) ;true
;;
;;;(define I1 (rectangle 10 20 "solid" "red"))
;;
;;(< (image-width I1)
;;   (image-height I1))
;;
;;;conditional expression
;;(if (< (image-width I1)
;;       (image-height I1))
;;    "tall"
;;    "wide")
;;To form an if expression
;
;;if <expression> ;question (boolean value)
;;<expression> ;#true answer
;;<expression> ;#false answer
;
;;To evaluate an if expression
;;- If the question expression is not a value ,
;;  evaluate and replace it
;;- If the question expression is #true, replace
;;  entire expression with #true answer expression
;;- If the question expression is #false, replace
;;  entire expression with #false answer expression
;;- If the question is not boolean value,
;;  so produce an error
;
;;(define I1 (rectangle 10 20 "solid" "red"))
;;(if (< (image-width I1)
;;       (image-height I1))
;;    (image-width I1)
;;    (image-height I1))
;
;(define (rectangle width height style color)
;  (list width height style color))
;
;(define I1 (rectangle 10 20 "solid" "red"))
;(if (< (first I1) ; Get the width from the rectangle
;       (second I1)) ; Get the height from the rectangle
;    (first I1) ; Use width as the result
;    (second I1)) ; Use height as the result
;
;;(if (< (image-width I1)
;;       (image-height I1))
;;    (image-width I1)
;;    (image-height I1))

(define I1 (rectangle 10 20 "solid" "red"))
(define I2 (rectangle 20 10 "solid" "red"))

(and (> (image-height I1) (image-height I2))
     (< (image-width I1) (image-width I2)))
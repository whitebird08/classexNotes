var name = "emily"

closure example: function goBananas() {
 var a = 'One banana, ';
   function inner() {
     var b = 'Two banana, ';
       function innerMiddle() {
         var c = 'Three banana, ';
           function innerMost() {
             var d = 'Four!';
             return a + b + c + d;
           }
         return innerMost();
       }
      return innerMiddle(); 
   }
 return inner();
}

console.log(goBananas());


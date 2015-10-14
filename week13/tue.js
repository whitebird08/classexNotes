// // Warmup
// // Write a function called toDecimal which takes a binary number and converts it to decimal. Here are some examples:

// //   toDecimal(0); // 0
// //   toDecimal(1); // 1
// //   toDecimal(11); // 3
// //   toDecimal(1000); // 8
// //   toDecimal(1100); // 12

// function toDecimal(num){
//   for(var i=0; i<num.length; i++){
//     num[i] * 2^num[]
//   }
// }

// // 10=(1*2^1) + (0*2^0) = 2+0 = 2
// // 111 = (1*2^2) + (1*2^1) + (1*2^0) = 4+2+1=7
// // 10101= (1*2^4) + (0*2^3) + (1*2^2) + (0*2^1) + (1*2^0)=16+0+4+0+1=21
// // 11110= (1*2^4) + (1*2^3) + (1*2^2) + (1*2^1) + (0*2^0)=16+8+4+2+0=30

// http://www.math.grin.edu/~rebelsky/Courses/152/97F/Readings/student-binary#b2d-a

// Basic Concepts Behind the Binary System

// To understand binary numbers, begin by recalling elementary school math. When we first learned about numbers, we were taught that, in the decimal system, things are organized into columns:

//     H | T | O
//     1 | 9 | 3
// such that "H" is the hundreds column, "T" is the tens column, and "O" is the ones column. So the number "193" is 1-hundreds plus 9-tens plus 3-ones.
// Years later, we learned that the ones column meant 10^0, the tens column meant 10^1, the hundreds column 10^2 and so on, such that

//       10^2|10^1|10^0
//         1 |  9 |  3 
// the number 193 is really {(1*10^2)+(9*10^1)+(3*10^0)}.
// As you know, the decimal system uses the digits 0-9 to represent numbers. If we wanted to put a larger number in column 10^n (e.g., 10), we would have to multiply 10*10^n, which would give 10^(n+1), and be carried a column to the left. For example, putting ten in the 10^0 column is impossible, so we put a 1 in the 10^1 column, and a 0 in the 10^0 column, thus using two columns. Twelve would be 12*10^0, or 10^0(10+2), or 10^1+2*10^0, which also uses an additional column to the left (12).

// The binary system works under the exact same principles as the decimal system, only it operates in base 2 rather than base 10. In other words, instead of columns being

 
//        10^2|10^1|10^0
// they are
//         2^2|2^1|2^0
// Instead of using the digits 0-9, we only use 0-1 (again, if we used anything larger it would be like multiplying 2*2^n and getting 2^n+1, which would not fit in the 2^n column. Therefore, it would shift you one column to the left. For example, "3" in binary cannot be put into one column. The first column we fill is the right-most column, which is 2^0, or 1. Since 3>1, we need to use an extra column to the left, and indicate it as "11" in binary (1*2^1) + (1*2^0).

// Examples: What would the binary number 1011 be in decimal notation? 



// Click here to see the answer

// Try converting these numbers from binary to decimal:

// 10
// 111
// 10101
// 11110
// Remember:
//       2^4| 2^3| 2^2| 2^1| 2^0
//          |    |    |  1  |  0
//          |    | 1  |  1  |  1
//       1  | 0  | 1  |  0  |  1
//       1  | 1  | 1  |  1  |  0



// Write a function that will capitalize not only the first word of the fish in the array, but the second as well.

// var fish = [ "rainbow trout", "smallmouth bass", "white bass", "channel catfish" ]

// capitalizeFish(fish) //-> ["Rainbow Trout", "Smallmouth Bass", "White Bass", "Channel Catfish"]
//////////////////////



<span id="ajaxButton" style="cursor: pointer; text-decoration: underline">
  Make a request
</span>
<script type="text/javascript">
(function() {
  var httpRequest;
  document.getElementById("ajaxButton").onclick = function() { makeRequest('http://jsonip.com'); };///edit here

  function makeRequest(url) {
    httpRequest = new XMLHttpRequest();

    if (!httpRequest) {
      alert('Giving up :( Cannot create an XMLHTTP instance');
      return false;
    }
    httpRequest.onreadystatechange = alertContents;
    httpRequest.open('GET', url);//edit here
    httpRequest.send();
  }

  function alertContents() {
    if (httpRequest.readyState === 4) {
      if (httpRequest.status === 200) {
        alert(httpRequest.responseText);
      } else {
        alert('There was a problem with the request.');
      }
    }
  }
})();
</script>

//for console, just use this
(function() {
  function makeRequest(url) {
    httpRequest = new XMLHttpRequest();

    if (!httpRequest) {
      alert('Giving up :( Cannot create an XMLHTTP instance');
      return false;
    }
    httpRequest.onreadystatechange = alertContents;
    httpRequest.open('GET', url);//edit here
    httpRequest.send();
  }

  function alertContents() {
    if (httpRequest.readyState === 4) {
      if (httpRequest.status === 200) {
        alert(httpRequest.responseText);
      } else {
        alert('There was a problem with the request.');
      }
    }
  }
makeRequest('http://jsonip.com');
})();

undefined


























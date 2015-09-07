what the flexbox.
https://www.youtube.com/playlist?list=PLu8EoSxDXHP7xj_y6NIAhy0wuCd4uVdid


display:flex;
border:10px solid goldenrod;
min-height: 100vh;
flex-direction: row; //reverse/column
flex-wrap: wrap; //nowrap/truewidth
justify-content: flex-start; //end/center  //space between or around axis
align-items: center; //stretch/flex-start/flex-end/baseline //use with height
align-content: center; //stretch/flex-start/flex-end/baseline   //works with cross axis
flex: 1 1 400px; //grow/shrink/basis  
flex-grow://for xtra space
flex-shrink: //for less space
flex-basis: 400px;
flex: 1; //how to proportionally handle xtra or under space //equally distributes
order: 1; // position after all 0's are displayed
align-self: center; //stretch/flex-start/flex-end/baseline

overflow-y:scroll; // for scrolling (can be in a specific section??)
  webkit-overflow-scrolling: touch; //for touch scrolling on phone


npm init
npm install gulp -g
npm install gulp --save-dev
npm install gulp-autoprefixer --save-dev  ///use autoprefixer to comply with older browsers



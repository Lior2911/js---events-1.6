// function h1Alert(){
//   alert("some massage")
// }

// function printToLog(){
//   console.log("lior aytegev")
// }

// function changeSpanColor(){
//   var changeColor = document.getElementById("span")
//   changeColor.style = "color:blue"
// }

// function changeH1Size(){
//   var myH1 = document.getElementById("h1");
//   myH1.style = "font-size:30vw"
// }

// function changeText(){
//   var p1 = document.getElementById("p1")
 
//   p1.innerText = "lorem is life"

// }

// 6.	קבלו מהמשתמש שם בעת עליית האפליקציה, צרו כפתור שבלחיצה מודפס למסך השם.
// *אתגר - קבלו את השם בעזרת input.

//  function pushTheButten(){
//    var myName = prompt("enter your name")
   
//    document.write(myName)
//  }

//  7.	צרו תוכנית שבעת עלייה יוצרת אובייקט של DATE, אם השעה לפני 12 בצהריים, הרקע של החלון יהיה צהוב, אחרת הצבע יהיה כחול. הוסיפו אלמנט של טקסט לחלון, אם השעה לפני 12 בצהריים יהיה רשום יום טוב, אחרי 12 בצהריים יהיה רשום ערב טוב. 
// var myTime = new Date()

// function timeNow(){
//   if (myTime.getHours()<"12"){
//     document.body.style.backgroundColor = "yellow"
//   document.body.innerHTML = "<h1>"+"good day"+"</h1>"
// }
// else{
//   document.body.style.backgroundColor = "blue"
//   document.body.innerHTML = "<h1>"+"good evening"+"</h1>"
// }
// }
// timeNow()

// 8.	צרו תוכנית שבעת עלייה מקבלת מהמשתמש גיל, אם מעל 18 מדפיסה למסך הודעה של ברוכים הבאים למסך באדום אחרת הודעה דומה בכחול. ריחוף מעל הטקסט משנה את הצבע לירוק.
// var userAge = +prompt("enter your age")
// function printNAme(){
//   var myh1 = document.getElementById("h1_")
//   if(userAge>18){
//     myh1.style= "color:red"
//   }
//   else{
//    myh1.style = "color:blue"
//   }
// }
// printNAme()

// function changeColorH1(){
//   document.getElementById("h1_").style="color:green"
// }

// 9.	צרו תוכנית לוטו, התוכנית מקבלת מהמשתמש מספר בין 0 ל - 56 ובעת לחיצה על כפתור מדפיסה אותו למסך, הפעולה קורית 5 פעמים. לאחר מכן, התוכנית מגרילה מספר בין 0 ל 56 ומדפיסה אותו למסך.

function getMoney(){
  var lottoArray = []
  
  for (var i = 0 ; i<5;i++){
   var numFromUser = +prompt("enter number between 0-56")

 }
}

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
// var numArray = [];

// function mainFunc(){
//   var numInput = document.getElementById("user_number");
//   var p_num = document.getElementById("some_p");
//   if(numArray.length<5){
//      p_num.innerText += "number : " + numInput.value + "\n" ;
//      numArray.push(numInput.Value);
//   }
//   else{
//    numInput.disabeled = true;
//   }
 
// }

// function getAndPrint(){
//   var rndNum = Math.floor(Math.random()*57);
//   var rndH3 = document.getElementById("h3_lotto");
//   rndH3.innerText += rndNum;
//   for (var i = 0 ; i < numArray.length; i++){
//     if(rndNum == numArray[i]){
//       document.getElementById("result").innerText = "you win "
//       return ;
//     }
//   }
//   document.getElementById("result").innerText = "you lose"
// }

// 12/

// var arrayNum = [12,43,5,667,564,34,234,5,67,9]
// for (var i = 0 ; i <arrayNum.length ; i++){
// main_div.innerHTML += "<div id= 'div_ " + i +" '>"+arrayNum[i]+"</div>";
// changeColor(i,arrayNum);
  
// }
// function changeColor(index,arrayNum){
//   if(arrayNum[index]%2==0){
//     document.getElementById("div_"+index).style.color = "red"
//   }
//   else{
//     document.getElementById("div_"+index).style.color = "blue"

//   }
// }




// 1.	צרו תוכנית שבעת עלייה מקבלת מהמשתמש שם ותאריך לידה, אם המשתמש מעל 18 מדפיסה למסך הודעה של ברוכים הבאים למסך בכחול ואת שם המשתמש אחרת הודעת אין כניסה באדום עם גיף מתאים( *אתגר - ומרעננת את הדף).
// part1

function getName (){
  var inputName = document.getElementById("inputUserName");
  return inputName.value;
}
function getAge(){
  var inputAge = document.getElementById("inputUserAge");
  return inputAge.value;
}
function getIn(){
  document.getElementById("h1_").innerText = "welcome";
  document.getElementById("h1_").style = "color:blue";
}
function getOut(){
  document.getElementById("h1_").innerText = "go home";
  document.getElementById("h1_").style = "color : red";
  document.body.div.innerHTML = "<img src='https://i.makeagif.com/media/7-23-2015/cxjCsF.gif'>"
}
function getGreen(){
  document.getElementById("h1_").innerText = "welcome";
  document.getElementById("h1_").style = "color:green";
}

function enter(){
 var myDate = new Date("01/01/2004");
 return myDate;
 
}
function mainFunc (){
  if(getAge()>"2004-01-01"){
    getIn();
  }
  else{
    getOut();
  }
  
}
var btn = document.getElementById("saveAge").addEventListener("click",mainFunc);
var h1_first = document.getElementById("h1_").addEventListener("mouseover",getGreen);

// part2
var arrayName = []
function getLastName(){
  var userLastName = document.getElementById("lastName")
  return userLastName.value;
}
function getFirstName(){
  var userFirstName = document.getElementsByClassName("firstName")
  arrayName.push(userFirstName)

  return userFirstName.value;
}




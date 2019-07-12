var century, year, month, day,gender;

function workout(){
  century=document.getElementById("century").value
  year=document.getElementById("year").value
  month=document.getElementById("month").value
  day=document.getElementById("day").value
  dayOfTheWeek=(((century/4)-2*century-1)+((5*year)/4)+((26*(month+1)/10)))+day%7
  return dayOfTheWeek;
}
function checkDayOfTheWeek (){
  //gender=document.getElementById("gender").innerHTML="."
 // var maleNames=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
  var calculate=workout();
  if (calculate==0) {
    document.write("You were born on a Sunday. Your Akan name is: Kwasi");
  } else if (calculate==1){
    document.write("You were born on a Monday. Your Akan name is:"+maleNames[1]);
  } else if (calculate==2){
    document.write("You were born on a Tuesday. Your Akan name is:"+maleNames[2]);
  } else if (calculate==3){
    document.write("You were born on a wednesday.Your Akan name is:"+maleNames[3]);
  } else if(calculate==4){
    document.write("You were born on a Thursday. Your Akan name is:"+maleNames[4]);
  } else if (calculate==5) {
    document.write("You were born on a Friday.Your Akan name is:"+maleNames[5]);
  } else {
    document.write("You were born on a Saturday.Your Akan name is:"+maleNames[6]);
  }
}
//var femaleNames=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]
//     return (((CC/4)-2*CC-1)+((5*YY/4))+((26*(MM+1)/10))+DD)%7
// }
//     var CC =document.getElementById("century").value
//     var YY =document.getElementById("year").value
//     var MM =document.getElementById("month").value
//     var DD =document.getElementById("day").value
//     document.write("akan"+dayOfWeeek());
//   var day=  
//     if (day)
// function gender (){
//   var gen=document.getElementById("century").value;
// // if (gender==male){
// //   document.write("Your name");
// // }
// var e=document.getElementById("keren").innerHTML = gen;
// }
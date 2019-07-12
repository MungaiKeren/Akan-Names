var century, year, month, day;

function workout(){
  century=document.getElementById("century").value
  year=document.getElementById("year").value
  month=document.getElementById("month").value
  day=document.getElementById("day").value
  dayOfTheWeek=(((century/4)-2*century-1)+((5*year/4))+((26*(month+1)/10))+day)%7
  return (Math.floor(dayOfTheWeek));
}
function checkDayOfTheWeek (){
  var calculate = workout();
  var gender=document.getElementById("male").innerHTML;
      document.getElementById("demo").innerHTML=gender;
  if (gender=="male"){
      if (calculate==1) {
    document.write("You were born on a Sunday. Your Akan name is: Kwasi");
  } else if (calculate==2){
    document.write("You were born on a Monday. Your Akan name is: Kwadwo");
  } else if (calculate==3){
    document.write("You were born on a Tuesday. Your Akan name is: Kwabena")
  } else if (calculate==4){
    document.write("You were born on a wednesday. Your Akan name is: Kwaku");
  } else if(calculate==5){
    document.write("You were born on a Thursday. Your Akan name is: Yaw");
  } else if (calculate==6) {
    document.write("You were born on a Friday. Your Akan name is: Kofi");
  } else {
    document.write("You were born on a Saturday.Your Akan name is: Kwame");
  }
  } else {
    gender=document.getElementById("female").innerHTML;
    document.getElementById("demo").innerHTML=gender;
    if (calculate==1) {
      document.write("You were born on a Sunday. Your Akan name is: Akosua");
    } else if (calculate==2){
      document.write("You were born on a Monday. Your Akan name is: Adwoa");
    } else if (calculate==3){
      document.write("You were born on a Tuesday. Your Akan name is: Abenaa")
    } else if (calculate==4){
      document.write("You were born on a wednesday. Your Akan name is: Akua");
    } else if(calculate==5){
      document.write("You were born on a Thursday. Your Akan name is: Yaa");
    } else if (calculate==6) {
      document.write("You were born on a Friday. Your Akan name is: Afua");
    } else {
      document.write("You were born on a Saturday.Your Akan name is: Ama");
    }
  }
}
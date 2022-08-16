

var Num=1102;
var Str="Jay Vasani";
var BooleanVar=true;


document.write("<br/>",Num);
document.write("<br/>",Str);
document.write("<br/>",BooleanVar);


document.write("<br/>",typeof(BooleanVar));



var obj = new Object();
document.write("<br/>"+typeof(obj));
document.write("<br/>"+obj.FirstName+" "+obj.LastName);


var car = {
    modal: "AUDI",
    color: "black",
    doors: 4
}
document.write("<br/>"+car.modal+" "+car.color+" "+car.doors);


var cars = ["AUDI", "Mercedes-Benz", "Volkswagen"];
document.write("<br/>"+cars[2]);
document.write("<br/>"+cars[1]);
document.write("<br/>"+cars[0]);



var Demo = function(){ 
    return "Hello World!"; 
}
document.write("<br/>"+typeof(Demo));
document.write("<br/>"+Demo());




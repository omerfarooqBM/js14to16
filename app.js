var arr=[];

var string=["Misbah","Ibtesam","Hassam","Raza","Arqam"];
var no=[1,2,3,4,5];
var bool=[true,false];
var mixArr=["Hassam",1,true]
var degree=["SSC","HSC","BCS","BS","B.COM","MS","M,Phil","PhD"];
document.write("<h3>Qualification</h3>")
for (i = 0; i<degree.length; i++) {
    document.write(i+") "+degree[i]+"<br>")
}
document.write("<br><br>");

var std=["Micheal","Jhon","Tony"];
var no=[320,230,480];
var totMark=500;
for (i = 0; i < std.length; i++) {
    document.write("Score of "+std[i]+"is"+no[i]+".Percentage: "+(no[i]/500)*100+"%"+"<br>");
    
}
document.write("<br><br>");

var clr=["red","white","blue"];
alert(clr);
var userClr=prompt("Enter the color");
clr.unshift(userClr);
document.write(clr);

var clr=["red","white","blue"];
alert(clr);
var userClr=prompt("Enter the color");
clr.push(userClr);
document.write(clr);

var clr=["red","white","blue"];
alert(clr);
var userClr=prompt("Enter the color");
clr.unshift(userClr);
document.write(clr);

var clr=["red","white","blue"];
alert(clr);
clr.shift(0,1);
document.write(clr);

var clr=["red","white","blue"];
alert(clr);
clr.pop();
document.write(clr);

var clr=["red","white","blue"];
alert(clr);
var userNo=prompt("Enter your no");
var userClr=prompt("Enter the color");
clr.splice(userNo-1,1,userClr);
document.write(clr);

var clr=["red","white","blue"];
alert(clr);
var userNo=prompt("Enter your no");
var userClr=prompt("Enter the color");
var userPlace=prompt("Enter how many no you want to delete");
clr.splice(userNo-1,userPlace,userClr);
document.write(clr);

var noArray=[480,120,320,230];
array=noArray.sort();
document.write("<b>Scores of students</b>:"+noArray+"<br>");
document.write("<b>Ordered scores of student</b>:"+array);

var cities=["Karachi","Lahore","Islamabad","Quetta","Peshawar"]
var selected=cities.slice(1,2)
var selected1=cities.slice(3,4)
document.write("<h3>Cities list:</h3>"+cities);
document.write("<h3>Selected Cities</h3>"+selected+","+selected1);

var joinArr=["This","is","my","cat"];
document.write("<h3>Array:</h3> \n"+joinArr+"<br>");
array=joinArr.join(" ");
document.write("<h3>String:</h3> \n"+array);

var arr=["keyboard","mouse","printer","monitor",];
for(var i=0; i<=3 ;i++){
    document.write("<h4>Out</h4>"+arr[i]+"<br>");
}

var arr=["keyboard","mouse","printer","monitor",].reverse();
for(var i=0; i<=3 ;i++){

    document.write("<h4>Out</h4>"+arr[i]+"<br>");
}

var arr=["Apple","Samsung","Motorola","Nokia","Sony","Haier"];
document.write("<select>")
for(i=0;i<=arr.length;i++){
    document.write("<option>"+arr[i]+"</option>")
}
document.write("</select>");

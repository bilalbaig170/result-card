let obtainMarks = +prompt("enter obtain marks")
let totalMarks = +prompt("enter total marks")

if(obtainMarks > 0 && totalMarks > 0){
if(totalMarks>= obtainMarks){
    var percentage = obtainMarks/totalMarks*100

    document.write("<h1> total marks" +totalMarks+ "</h1>")
    document.write("<h1>obtain marks"+obtainMarks+"</h1>")
    document.write("<h1>percentage"+percentage+"</h1>")

    if(percentage>80 ){
        document.write("<h1>Grade A1</h1>")
    }
    else if(percentage>70 && percentage<=80){
        document.write("<h1>Grade A</h1>")
    }
    else if(percentage>60 && percentage<=70){
        document.write("<h1>Grade B</h1>")
    }
    else if(percentage>50 && percentage<=60){
        document.write("<h1>Grade C</h1>")
    }
    else if(percentage>40 && percentage<=50){
        document.write("<h1>Grade D</h1>")
    }
    else{
        document.write("<h1>Your percentage is poor</h1>")
    }
}
else{
    document.write("obtain marks is wrong")
}


}

else if(obtainMarks==0){
    document.write("fail")
}
else{
    document.write("kindly enter correct data")
}



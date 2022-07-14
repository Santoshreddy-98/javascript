//1//
let a=108
if(a/12==9){
    console.log("yes")
}else {
    console.log("no")
}
//2//
a=12
if(a*3){
    console.log("yes,multiple")
}else{
    console.log("cannot multiply")
}
//3//
x=0
x<0?console.log("it is a positive number"):console.log("it is a negative number")
//4//
let s=60,t=50
s>t?console.log("s is greater number"):console.log("t is greater number")
//9//
let num1=9;
    num2=8;
    num3=11;
    if(num1>num2 && num1>num3){
        console.log("num1 is greatest")
    }
    else if(num2>num3){
        console.log("num2 is greatest")
    }
    else{
        console.log("num3 is greatest")
    }
    //whileloop
    let i=10;
    while(i>=1){
        console.log(i);
        i--;
    }
    //object
    let person={
        name:'santosh',
        salary:65000,
        others:{
            languageknown:'javascript',
        company:'deloitte'
    }
    }
    console.log(person.others.company)

    for(let i=5; i<=15;i++) {
        console.log(i);
    }
    //16 arrays
    let R=[20,50,86]
        s=[23,75,54]
        t=[R+s]
        console.log(...R,...s)

        
        
        
        




console.log("Hello world!");
var a1=10
let b1=120
console.log(a1);
console.log(b1);
//primitive data types
a="sece"
console.log(a)
//check variable type
console.log(typeof(a))
b=true
console.log(b)
//secondary data types or objects
arr=['a',10,true,[20,30],"Sri Eshwar"]
console.log(arr)
//object
obj={
    firstname:"Sri",
    lastname:"Eshwar"
}
console.log(obj)
console.log(typeof(obj))
console.log(obj.firstname,obj.lastname)
//2nd way of declaring object
obj1={}
console.log(obj1)
obj1["dept"]="CSE"
obj1["Sec"]="A"
console.log(obj1)
//3rd way of declaring object
obj2=new Object()
console.log(typeof(obj2))
console.log(obj2)
obj2.count=70
obj2.abs=1
totalpresent=obj2.count-obj2.abs
console.log("Present: ",totalpresent)
console.log(obj2)
//set
set=new Set()
console.log(typeof(set))
console.log(set)
//Giving elements
set1=new Set("hello",1,2)
console.log(set1)
//printing last element
set2=new Set(("hello",1,2,"sece"))
console.log(set2)
//printing all elements
set3=new Set(["hello",1,2,"sece"])
console.log(set3)

//operators
var n=5
var m="5"
console.log(n==m)
//=== consider type also
console.log(n===m)
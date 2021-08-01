

var arr=[-9,8,7,6,5,4,5,-6,7,-3,4,-5,6,1,2,3,-4,0,9,8,-7]

arr.sort(function(a,b){
    if ( a> b){
        return 1
    }else if (a<b){
        return -1
    }else{
        0
    }
})
console.log(arr)

var ourPerson = [
    {
        name:'A',
        age :30
    },
    {
        name:'B',
        age :19
    },
    {
        name:'C',
        age :25
    },
    {
        name:'D',
        age :24
    },
    {
        name:'E',
        age :40
    }
]

ourPerson.sort(function (a,b){
    if (a.age > b.age){
        return 1
    }else if(a.age < b.age){
        return -1
    } else{
        return 0
    }
})
console.log(ourPerson)

// every method 

var everyMethod = [2,4,6,8,10,12,14,16,18,20]

var resultMethod = everyMethod.every(function (value){
    return value %2==0
})
console.log(resultMethod)
var resultMethod = everyMethod.every(function (value){
    return value %2==1
})
console.log(resultMethod)






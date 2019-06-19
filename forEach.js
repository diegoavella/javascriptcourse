var array =[1,2,3,25,123156,211231556,12312]
var suma=0

//Usando la clausula function
/*array.forEach(function(element) {
    console.log(`la suma de array fue :> ${element}`)
    suma =suma+element
});*/


//sin usar la clausula function
array.forEach((element,index) => {
    console.log(`la suma de array fue :> ${element}`)
    console.log(`la suma de array fue :> ${index}`)
    suma =suma+element    
});

//
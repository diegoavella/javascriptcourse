var obj=[
    {
        "nombre":"juan",
        "apellido":"perez",
        "edad":18
    },
    {
        "nombre":"juan",
        "apellido":"perez",
        "edad":20
    },
]

var estudiFinales= obj.map((item, key) => 
{
    if(item.edad >=20){
        item["Adulto"] =true
        return item
    } else 
    {
        item["Adulto"] =false
        return item
    }
}
)
console.log(`El nuevo arreglo es:`,estudiFinales)

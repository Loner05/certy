



let link = "C:\\Users\\JUANF\\Desktop\\certy 7april\\api\\src\\public\\uploads\\Captura de pantalla 2023-12-14 135252.png"


console.log(link.length)
console.log(link.indexOf("\\"))

for(let i=0 ; i < link.length; i++){
    let array =[]
if(link.pop !== '\\') {

array.push(link.pop)

}
console.log(array)

 }
var hora1 = new Date();
var hora = hora1.getHours();
console.log(`sua hora é ${hora}`)
if (hora < 12) {
    console.log("Boa dia");
}else if (hora <= 18) {
    console.log("Boa Tarde");
} else{
    console.log("Boa Noite");
}
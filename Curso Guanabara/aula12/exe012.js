var idade = 14;
console.log(`sua idade ${idade}`);
if (idade < 16) {
    console.log("Não vota");
} else if (idade < 18 || idade > 65)
    console.log("Voto Opcional");
else
    console.log("Obrigatorio");

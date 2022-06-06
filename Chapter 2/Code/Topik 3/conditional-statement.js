const gebetan = {
    name: "Raffi",
    isOnline: true,
    blocked: true
}

console.log("IF");
if (gebetan.isOnline){
    console.log(`Halo, ${gebetan.name}!`);
    console.log("Lagi ngapain nih ?");
}

console.log("\nIF Else");
if (gebetan.isOnline && !gebetan.blocked){
    console.log(`Halo, ${gebetan.name}!`);
    console.log("Lagi ngapain nih ?");
} else {
    console.log("Akun diblokir!");
}


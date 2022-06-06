let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}

const maxFloorLevel = 5;
let floorLevel = 1;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.ceil(max);
    return Math.floor(Math.random() * (max - min + 1) + min)
}

while (floorLevel <= maxFloorLevel) {
    let isSpotles = false;
    console.log("Ngepel lantai",floorLevel);

    // Simulasi peluang lantai Spotles engga setelah dipel
    let goodWill = getRandomInt(0, 1);

    // 0 berarti lantainya ga Spotless setelah dipel
    if (goodWill === 0) isSpotles = true;

    // Kalau lantai udah ngga ada noda, Bisa lanjut ke lantai berikutnya
    if (isSpotles) floorLevel++;
}
console.log("Game dimulai...");
let angka1 = parseInt(process.argv[2]);
let angka2 = parseInt(process.argv[3]);
let angka3 = parseInt(process.argv[4]);
let random = () => Math.floor(Math.random() * 10);
let nyawa = ["FolderSekolah", "FolderGame", "FolderSystem"];
let angkaTebak = random();

function cekNyawa() {
  console.log("Folder anda tersisa :");
  let i = 0;
  for (let folder of nyawa) {
    i += 1;
    console.log(`${i}.${folder}`);
  }
}

const fs = require("fs");
setTimeout(() => {
  console.log(
    "Anda memiliki 3 nyawa, jika anda salah maka kami akan menghapus salah satu dari tiga Folder :"
  );
  for (let folder of nyawa) {
    console.log(folder);
    fs.mkdirSync(folder);
  }
}, 1000);

setTimeout(() => {
  console.log("Saatnya menebak pertama...");
}, 2000);

setTimeout(() => {
  console.log(`Anda menebak angka pertama dengan angka : ${angka1}`);
  console.log("Tebakan pertama jawabannya adalah....");
}, 3000);

setTimeout(() => {
  if (angkaTebak == angka1) {
    console.log(`Selamat anda benar jawabannya : ${angkaTebak}`);
  } else {
    console.log(`Jawaban yang benar adalah ${angkaTebak}`);
    console.log(`Hahaha anda kalah, saya akan menghapus folder anda`);
    fs.rmdirSync(nyawa[0]);
    nyawa.shift();
  }
  setTimeout(() => cekNyawa(), 1000);
}, 8000);

setTimeout(() => {
  console.log("Saatnya menebak kedua...");
}, 11000);

setTimeout(() => {
  console.log(`Anda menebak angka kedua dengan angka : ${angka2}`);
  console.log("Tebakan kedua jawabannya adalah....");
}, 14000);

setTimeout(() => {
  angkaTebak = random();
  if (angkaTebak == angka2) {
    console.log(`Selamat anda benar jawabannya : ${angkaTebak}`);
  } else {
    console.log(`Jawaban yang benar adalah ${angkaTebak}`);
    console.log(`Hahaha anda kalah, saya akan menghapus folder anda`);
    fs.rmdirSync(nyawa[0]);
    nyawa.shift();
  }
  setTimeout(() => cekNyawa(), 1000);
}, 19000);

setTimeout(() => {
  console.log("Saatnya menebak ketiga...");
}, 23000);

setTimeout(() => {
  console.log(`Anda menebak angka ketiga dengan angka : ${angka3}`);
  console.log("Tebakan ketiga jawabannya adalah....");
}, 26000);

setTimeout(() => {
  angkaTebak = random();
  if (angkaTebak == angka3) {
    console.log(`Selamat anda benar jawabannya : ${angkaTebak}`);
  } else {
    console.log(`Jawaban yang benar adalah ${angkaTebak}`);
    console.log(`Hahaha anda kalah, saya akan menghapus folder anda`);
    fs.rmdirSync(nyawa[0]);
    nyawa.shift();
  }
  setTimeout(() => cekNyawa(), 1000);
}, 31000);

setTimeout(() => console.log("Menghitung hasil permainan..."), 33000);

setTimeout(() => {
  if (nyawa.length == 0) {
    console.log(
      "Cih payah sekali anda nebak angka saja tidak ada yang benar sama sekali"
    );
    console.log("Yahahaaha Foldernya ilang kasian amat");
  } else if (nyawa.length == 1 && nyawa.length == 2) {
    console.log(
      `Lumayan juga anda masih memiliki ${nyawa.length} Folder tersisa`
    );
    console.log(
      `Tapi anda gagal menebak angka pada ${3 - nyawa.length} kesempatan`
    );
  } else if (nyawa.length == 3) {
    console.log("Anda Genius....");
    console.log("Selamat anda menang telak kali ini!!!");
  }
}, 40000);

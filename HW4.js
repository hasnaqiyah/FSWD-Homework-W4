/* << Soal Homework W4 FSWD - Function pada Array Javascript >>
Buatlah 100 nilai random (1 sampai 50) pada 1 array
Pecahlah menjadi 2 array berdasarkan indexnya, yakni array pada index genap dan array pada index ganjil, gunakan method push() untuk menambahkan
nilai baru pada array.

Bandingkan kedua buah array, contoh
- Min lebih besar array genap
- Max lebih besar array ganjil
- Total memiliki nilai sama antara array genap dan ganjil
- Rata rata lebih besar array ganjil

Output dari aplikasi:
- Array dengan jumlah index 100
- Array genap dengan jumlah index 50
- Array ganjil dengan jumlah index 50
- Min, Max, Total, Rata rata pada setiap array (genap dan ganjil)
- Perbandingan nilai min, max, total dan rata rata */

//Membuat daftar index array sebanyak 100
const indexArray = Array(100);

const indexGenap = [];
const indexGanjil = [];

//Index Utama
for (let i = 0; i < indexArray.length; i++) {
  indexArray[i] = getRandomInteger(0, 50);
}
for (let i = 0, j = 0, k = 0; i < indexArray.length; i++) {
  console.log("Index Array " + i + " utama = " + indexArray[i]);

//Index Array Genap
   if (i % 2 == 0) {
    indexGenap.push(indexArray[i]);
    console.log(
      "Index Array " + j + " Genap = " + indexGenap[j] + "\n"
    );
    j++;
  }
  //Index Array Ganjil
  else if (i % 2 != 0) {
    indexGanjil.push(indexArray[i]);
    console.log("Index Array " + k + " Ganjil = " + indexGanjil[k] + "\n");
    k++;
  }
}

function generateArray(arrayValue1, arrayValue2) {
  console.log("Urutan Index Array = " + arrayValue1);
  console.log(
    "Nilai terkecil pada Array ini adalah " + arrayMinimal(arrayValue1)
  );
  console.log("Nilai terbesar pada Array ini adalah " + arrayMaximal(arrayValue1));
  console.log(
    "Total nilai pada Array ini adalah " + arrayTotal(arrayValue1)
  );
  console.log(
    "Rata-rata pada Array ini adalah " +
      getAvgArray(arrayValue1)
  );
  console.log("\n");
}

//Cetak hasil-hasil fungsi pada array
generateArray(indexGenap, indexGanjil);
generateArray(indexGanjil, indexGenap);

//Fungsi untuk mendapatkan bilangan bulat random
function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Fungsi mencari nilai minimal dalam array
function arrayMinimal(arrayValue1) {
  let minValue = Infinity;
  index = arrayValue1.length;
  while (index) {
    if (arrayValue1[index] < minValue) minValue = arrayValue1[index];
    index--;
  }
  return minValue;
}

//Fungsi mencari nilai maksimal
function arrayMaximal(arrayValue1) {
  let maxValue = -Infinity;
  index = arrayValue1.length;
  while (index) {
    if (arrayValue1[index] > maxValue) maxValue = arrayValue1[index];
    index--;
  }
  return maxValue;
}

//Fungsi mencari nilai total
function arrayTotal(arrayValue1) {
  let totalValue = 0;
  for (i = 0; i < arrayValue1.length; i++) {
    totalValue += arrayValue1[i];
  }
  return totalValue;
}

//Fungsi mencari nilai rata-rata
function getAvgArray(arrayValue1) {
  let sumValue = arrayValue1.length;
  let totalValue = arrayTotal(arrayValue1);
  return totalValue / sumValue;
}
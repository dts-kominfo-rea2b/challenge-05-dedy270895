const names = ["Halo", "Angel", "Nyoman", "Ketut", "Aisyah"];

// TODO: Fungsi utama
// Menerima 2 parameter: list nama dan callback sort
// Mengembalikan array of string dengan format:
// "1. Nama"
// "2. Nama"
// ...
const sorter = (data,fungsiSort)=>{
      const hasil = fungsiSort(data);
      const hasilx = [];
      for (let i = 0; i < hasil.length; i++) {
        hasilx.push(i+1 + ". "  + hasil[i]);
      }
      return hasilx;
};

// TODO: Fungsi untuk mengurutkan array of string secara ascending
// mengembalikan array yang sudah diurutkan
const sortAscending = (data) =>{
    let dataSortAsc = data.sort();
    return dataSortAsc;
};

// TODO: Fungsi untuk mengurutkan array of string secara descending
// mengembalikan array yang sudah diurutkan
const sortDescending = (data) =>{
  let dataSortDesc = data.sort().reverse();
  return dataSortDesc;
};

// ! JANGAN DIMODIFIKASI
(function main() {
  console.log(sorter?.(names, sortAscending)?.join("\n"));
  console.log(sorter?.(names, sortDescending)?.join("\n"));
})();

module.exports = {
  sorter,
  sortAscending,
  sortDescending,
  names,
};

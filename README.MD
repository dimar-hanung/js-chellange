## Logic JS

### 1. paginationMessage

Buka file `01-paginationMessage.js`

### 2. Module

Buat module yang dalam nya ada function apa saja bebas, dan nanti dapat dipanggil di file lain dengan format seperti ini:

```js
import { exampleFunction, anotherExampleFunction } from "./module.js";
exampleFunction();
```

### 3. statusAktif

Buatlah function dengan 1 parameter \
ketika parameter di isi `0` akan mengembalikan nilai `true` \
ketika parameter di isi `""` akan mengembalikan nilai `false` \
Buat lah function hanya dalam 1 baris.

### 4. Gabungin

Buka `04-gabung.js`, Dari data yang tersedia disitu, buat function yang digunakan untuk menyuplai barang, dan ketika di panggil akan mengembalikan data ini. \
id supplai barang = auto increament.

```js
toko = [
  {
    pemilik: "pak shodiq",
    data_barang: [
      {
        barang: "sprit",
        id: 1
      },
      {
        barang: "cola cola",
        id: 2
      },
      {
        barang: "node breakfast",
        id: 3
      },
      {
        barang: "Aqua",
        id: 4
      }
    ]
  },
  {
    pemilik: "pak kirito",
    data_barang: [
      {
        barang: "bakso",
        id: 1
      },
      {
        barang: "naget",
        id: 2
      },
      {
        barang: "Aqua",
        id: 3
      }
    ]
  }
];
```

### 5. error

Buka `05-error.js`

### 6. Rantai

Buka `06-absurd.js`

### 7. promise

Buatlah cerita yang berhubungan dengan implementasi promise,
setelah itu buat lah code nya untuk implementasi cerita yang sudah dibuat

### 8. array

Array punya 3 sifat methods, berikan masing-masing 2 contoh penggunaan nya

- Mutator methods
- Accessor methods
- Iteration methods

### 9. bagi array - convert ke typeScript juga

Buka `09-bagiArray.js`, setiap kelipatan 5, bagi array menjadi array baru

### 10. Gabung Object - convert ke typeScript

Buka `10-gabungObject.js`, Buat function untuk menggabungkan object\
dan jangan ada error ketika memasukan tipe data salah

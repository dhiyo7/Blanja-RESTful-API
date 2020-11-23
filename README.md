# Blanja-RESTful-API

## About The Project

![](https://3.bp.blogspot.com/-4ZwQDCJTENo/XAopD6qwU1I/AAAAAAAAQsI/pZpGpNKQjGwR3nc67LN3CZKHzaTu_lpkwCLcBGAs/w1200-h630-p-k-no-nu/Blanja.png)

Selamat datang di Blanja API. ini adalah dokumentasi api untuk eksplorasi data yang di generate dari aplikasi *[Postman](https://www.postman.com/)* .

Projek ini adalah projek membuat sebuah Backend untuk halaman web [blanja.netlify.app](https://blanja.netlify.app/) yang mencakup beberapa Endpoint untuk bisa di konsumi sebagai data di bagian web *Blanja*.

#### Built With

- [ExpressJS](https://expressjs.com/)

- [MySQL](https://www.mysql.com/)

#### Scheme Database

![ ](https://res.cloudinary.com/devloops7/image/upload/v1606172024/newBlanja/screenshot-localhost-2020.11.24-05_52_17_npornk.png)

---

## Getting Started

Berikut panduan untuk menjalankan projek ini secara lokal. untuk bisa menjalankan projek secara lokal adapun langkah-langkah yang harus diikuti.

#### Prerequisites

- npm
  
  ```text
  npm install npm@latest -g
  ```

atau bisa menggunakan yarn

- yarn
  
  ```text
  npm install -g yarn
  ```

#### Installation

1. Clone repository

```textile
https://github.com/dhiyo7/Blanja-RESTful-API.git
```

2. Install paket pendukung
- dengan NPM

```textile
npm install
```

- dengan Yarn

```textile
yarn add
```

3. Konfigurasi Database , silahkan sesuaikan pada halaman index.js

```js
const conn = mysql.createConnection({
  host: &#39;localhost&#39;,
  user: &#39;root&#39;,
  password: &#39;&#39;,
  database: &#39;namaDB&#39;
});
```

#### Scheme API

> untuk schema api dan documentasi silahkan klik link di bawah
> 
> [BLANJA API - Publik](https://documenter.getpostman.com/view/6626576/TVewYPbM)



### Contribution

berkontribusi membuat komunitas open source menjadi tempat yang luar biasa untuk belajar, menginspirasi, dan berkreasi. dan dapat memajukan projek ini, sangat diperislahkan dan buat ***branch*** baru yah.



#### LICENSE

Distributed under the MIT License. See [LICENSE](https://github.com/dhiyo7/Blanja-RESTful-API/blob/main/LICENSE) for more information.

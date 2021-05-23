# Tugas Kelompok Adpro A-8

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <h3 align="center">Protheus Service</h3>

  <p align="center">
    Serverless Service for TK Adpro A8
    <br />
    <br />
    <p align="center">Live Site</p>
    <p align="center">https://c1k275902l.execute-api.us-east-1.amazonaws.com/dev/get-signed-url?name={filename}</p>
  </p>
</p>

### Cara Penggunaan
1. Kirim Get Request ke https://c1k275902l.execute-api.us-east-1.amazonaws.com/dev/get-signed-url?name={filename} dengan nama filename yang diinginkan
2. Pastikan input sesuai untuk mendapatkan response 200 dengan payloadnya, contoh payload

```json
    {
        "putUrl": "https://aws.com/images/filename?credential=abc123",
        "getUrl": "https://aws.com/images/filename"
    }
```

3. Upload image ke putUrl yang didapatkan
4. getUrl disimpan ke database untuk suatu saat dipanggil
5. untuk mengambil image yang telah diupload, fetch ke getUrl

### Built With

-   [ExpressJS](https://expressjs.com/)
-   [AWS Lambda](https://aws.amazon.com/id/lambda/)
-   [AWS S3](https://aws.amazon.com/id/s3/)

<!-- GETTING STARTED -->
## Run Locally
### Clone the project

```bash
  git clone https://github.com/MuhammadFadhiil/voucher-app.git
```

Go to the project directory

```bash
  cd voucher-app
```

### MySQL Setup

- MySQL running on your machine
- Create new DB with name voucher-app
- Create 2 table, user & voucher
- Update MySQL connection on backend/src/app.module.ts

### Run Backend Service

```bash
  cd backend
  npm i
  npm run start:dev
```

### Run Frontend Service

```bash
  cd frontend
  npm i
  npm run serve
```
# YouTube Comments Manager

## Purpose

- To build successfully interacting full-stack web application using Docker.

## Structure

![](https://git-static.s3.ap-northeast-2.amazonaws.com/0001.jpg)

## Stacks

- Frontend: Create React App (CRA)
- Backend: Nest JS
- Proxy: Nginx

## API & Routes

> *Notice*: Do NOT create any routes start with `/api` in your React App. Nginx will recognize any requests that start with `/api` as requests to your backend Nest JS app.

### 1. Frontend (React App)

- `/`
- `/comments`

### 2. Backend (Nest JS App)

- `/api/v1/auth`
- `/api/v1/comments`

## License

## Things to do

- Make query optional
# YouTube Comments Manager

## Installation

### 1. Docker (Recommended)

#### Step #1 

Install `docker` from the official website => [Installation Guide](https://docs.docker.com/get-docker/)

#### Step #2

```bash
git clone https://github.com/Bundy-Mundi/youtube-comments-manager.git project

cd project

docker-compose up
```

#### Step #3 

Hit `http://localhost` | `http://localhost:80` on your browser

#### Step #4

Happy hack!

### 2. Manually

#### In Progress ...

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


## Goals

- YouTube comments system is a little bit hard to find and manage. Especially when you want to re-visit the comment that you wrote.
- The Goal is to make comments to be more visible and intuitive using YouTube APIs.

## Features

- [X] View comments and replies by video id.
- [ ] Page pagination.
- [ ] Authentication system.
    - [X] Return access token from YouTube API
    - [ ] Login page (User comment page => You can edit your comments & replies once you logged in)
    - [ ] 
- [ ] Delete and update comments and replies.


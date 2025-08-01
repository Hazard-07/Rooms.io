# Rooms.io

Welcome to **Rooms.io**! This monorepo includes both:

* The **client**: A React Native Expo mobile application.
* The **server**: A Node.js API using Express.js, Prisma ORM, and PostgreSQL, containerized with Docker.

---

## Table of Contents

* [Overview](#overview)
* [Prerequisites](#prerequisites)
* [Getting Started](#getting-started)

  * [Clone the Repository](#clone-the-repository)
  * [Backend Setup (Docker)](#backend-setup-docker)
  * [Client Setup (React Native Expo)](#client-setup-react-native-expo)
* [Running the Application](#running-the-application)

  * [Running the Backend](#running-the-backend)
  * [Running the Client](#running-the-client)
* [Database Management](#database-management)
* [Git Workflow](#git-workflow)
* [Troubleshooting](#troubleshooting)

---

## Overview

**Rooms.io** is a platform for managing hotel rooms. This project includes two main directories:

* `client/`: A React Native Expo app for the mobile UI.
* `server/`: A Node.js API using Express.js, Prisma ORM, and PostgreSQL via Docker Compose.

---

## Prerequisites

Before starting, make sure you have the following installed:

* [Git](https://git-scm.com/downloads)
* [Node.js](https://nodejs.org/en/download/) and npm/yarn
* [Docker Desktop](https://www.docker.com/products/docker-desktop)

---

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/Sasank-V/Rooms.io.git
cd Rooms.io
```

---

### Backend Setup (Docker)

1. Open a terminal and go to the `server/` directory:

```bash
cd server
```

2. Run the backend and database using Docker Compose:

```bash
docker compose up --build
```

This will:

* Build the backend Docker image.
* Pull and start a PostgreSQL database.
* Stream backend and DB logs live.

3. To stop the services:

```bash
Ctrl + C
docker compose down
```

---

### Client Setup (React Native Expo)

1. Open a new terminal and go to the `client/` directory:

```bash
cd client
```

2. Install dependencies:

```bash
npm install
```

3. Configure the API URL:
   Create a `.env` file if needed:

```env
EXPO_PUBLIC_API_URL=http://localhost:3000
# OR, if testing on a real device:
# EXPO_PUBLIC_API_URL=http://192.168.X.X:3000
```

---

## Running the Application

### Running the Backend

```bash
cd server
docker compose up --build
```

To stop:

```bash
docker compose down
```

---

### Running the Client

```bash
cd client
npx expo start
```

Options:

* Scan the QR with Expo Go on a real device
* Press `a` (Android emulator)
* Press `i` (iOS simulator)
* Press `w` (web browser)

---

## Database Management

### Prisma Migrations

With the backend running:

```bash
cd server
docker compose exec backend npx prisma migrate dev --name <migration_name>
```

### Optional: Access the DB

```
npx prisma studio
```

## Git Workflow

To collaborate smoothly, follow this Git structure:

### Branches

* `main`: Stable production code
* `client`: Latest client development
* `server`: Latest server development

### Development Rules

* **Don't push directly** to `main`, `client`, or `server`.
* Create feature branches from `client` or `server` like so:

**Client Example:**

```bash
git checkout client
git pull origin client
git checkout -b client-feature/feature-name
```

**Server Example:**

```bash
git checkout server
git pull origin server
git checkout -b server-feature/feature-name
```

Push your feature branch and make a Pull Request to `client` or `server`.

### Commit Messages

Follow conventional commits:

* [How to write better commits](https://www.freecodecamp.org/news/how-to-write-better-git-commit-messages/)
* [Guide to conventional commits](https://dev.to/snehalkadwe/a-guide-to-git-conventional-commits-35o6)

---

## Troubleshooting

### Common Errors

**Expo or Native Errors:**

```bash
rm -rf node_modules .expo
npm cache clean --force 
npm install 
npx expo start --clear
```

**Route Errors:**
Ensure every route file exports a default React component.

**Docker Issues:**

* Use `docker compose logs` to view logs.
* If DB breaks, run:

  ```bash
  docker compose down -v
  docker compose up --build
  ```

**Database Connection Fails:**

* Confirm `DATABASE_URL` in `docker-compose.yml` is valid.
* Check `db` health logs.

---

**Need help?**
Open an issue on GitHub and we’ll be happy to support you. Happy coding! 🚀


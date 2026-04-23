# Student Team Members Management Application

## 📌 Description

This is a full-stack web application developed to manage student team members.
The application allows users to add, view, and manage team member details, including profile images.

---

## 🚀 Features

* 🏠 Home Page with team name and navigation
* ➕ Add new team members with image upload
* 📋 View all team members in a structured layout
* 🔍 View detailed information of individual members
* 🖼️ Image storage and retrieval from server

---

## 🛠️ Tech Stack

**Frontend:**

* React.js
* React Router
* Axios
* CSS

**Backend:**

* Node.js
* Express.js
* MongoDB (Mongoose)
* Multer (for image upload)

---

## 📂 Project Structure

```
project/
├── backend/
│   ├── models/
│   ├── routes/
│   ├── uploads/
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── README.md
└── .gitignore
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```
git clone <your-repo-link>
cd <your-repo-name>
```

---

### 2. Setup Backend

```
cd backend
npm install
node server.js
```

Server runs on:

```
http://localhost:5000
```

---

### 3. Setup Frontend

```
cd frontend
npm install
npm start
```

Frontend runs on:

```
http://localhost:3000
```

---

## 🔗 API Endpoints

### 1. Add Member

```
POST /members
```

### 2. Get All Members

```
GET /members
```

### 3. Get Member by ID

```
GET /members/:id
```

---

## 🧪 API Testing

You can test APIs in browser or Postman:

* Get all members:

```
http://localhost:5000/members
```

* Get member by ID:

```
http://localhost:5000/members/<id>
```

---

## ▶️ How to Run the Application

1. Start backend server
2. Start frontend application
3. Open browser at:

```
http://localhost:3000
```

---

## ⚠️ Notes

* Ensure MongoDB is running before starting backend
* Uploaded images are stored in the `/uploads` folder
* Do not upload `node_modules` to GitHub

---

## 👥 Team

* Add your team member names here

---

## 📜 License

This project is developed for academic purposes.

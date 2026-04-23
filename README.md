# Student Team Members Management Application

A complete full-stack application to manage student team members with profile details and image uploads.

## Tech Stack

- Frontend: React.js, React Router, Axios
- Backend: Node.js, Express, Multer
- Database: MongoDB, Mongoose

## Project Structure

- `frontend/` - React frontend
- `backend/` - Express backend with MongoDB and uploads
- `README.md`
- `.gitignore`

## Installation

1. Clone or download the project.
2. Open terminal at project root.
3. Install root dependency (for running both):
   - `npm install`
4. Install backend dependencies:
   - `cd backend`
   - `npm install`
5. Install frontend dependencies:
   - `cd ../frontend`
   - `npm install`

## Environment Setup

Create `backend/.env`:

```env
MONGO_URI=mongodb://127.0.0.1:27017/student_team_members
```

## Run the Application

From project root:

- Run backend only: `npm run backend`
- Run frontend only: `npm run frontend`
- Run both together: `npm run dev`

Default URLs:

- Frontend: `http://localhost:3000`
- Backend: `http://localhost:5000`

## API Endpoints

- `POST /members`
  - Create a member with image upload
  - Form-data fields: `name`, `role`, `email`, `contact`, `additionalDetails`, `image`

- `GET /members`
  - Fetch all members

- `GET /members/:id`
  - Fetch a single member by ID

- `DELETE /members/:id`
  - Delete a member by ID (removes their uploaded image file from `backend/uploads` when present)

## Notes

- Uploaded images are stored in `backend/uploads`.
- Image access pattern:
  - `http://localhost:5000/uploads/<filename>`

# StudySpot — Campus Study Space Finder

React + Vite frontend and Express/MongoDB Atlas backend inspired by your reference image.

## Requirements
- Node.js 18+
- MongoDB Atlas cluster (optional; demo data works without it)

## Start backend
```bash
cd backend
cp .env.example .env
# Add your Atlas connection string to MONGODB_URI in .env
npm install
npm run dev
```
API runs at http://localhost:5000.

## Start frontend (second terminal)
```bash
cd frontend
npm install
npm run dev
```
Open http://localhost:5173.

## MongoDB Atlas
Create a cluster, create a database user, allow your IP in Network Access, then paste the Node.js connection string in `backend/.env`. Never expose this URI in frontend code. When `MONGODB_URI` is missing, the API uses in-memory demo data (resets when backend restarts).

## Included screens
Dashboard, spaces browser/search, year-specific timetable editor, recommended spaces, campus map-style view, reviews, profile and space details modal.

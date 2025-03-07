# Real-Time Chat Application

A full-stack real-time chat application with both web and mobile interfaces. This project includes a React frontend, Node.js/Express backend with Socket.IO for real-time communication, and a React Native mobile app.

## Features

- **Real-time messaging** using Socket.IO
- **User authentication** with JWT
- **Private messaging** between users
- **Group chat** functionality
- **Online user status** indicators
- **Responsive design** for web interface
- **Mobile app** built with React Native
- **MongoDB** database for data persistence



### Backend
- Node.js & Express
- MongoDB & Mongoose
- Socket.IO for real-time communication
- JWT for authentication
- bcrypt for password hashing

### Frontend (Web)
- React
- React Router
- Socket.IO Client
- TailwindCSS for styling

### Mobile App
- React Native

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Installation & Setup

1. **Clone the repository**

2. **Install dependencies**
   ```bash
   # Install server dependencies
   npm install
   
   # Install frontend dependencies
   cd frontend
   npm install
   
   # Install mobile app dependencies (optional)
   cd ../ChatApp
   npm install
   ```

3. **Environment Variables**
   Create a `.env` file in the root directory with the following variables:
   ```
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

4. **Run the application**
   ```bash
   # Run backend and frontend concurrently
   npm run server
   
   # In a separate terminal, run the frontend
   cd frontend
   npm run dev
   ```

5. **For mobile app (optional)**
   ```bash
   cd ChatApp
   npm start
   ```

## Deployment

The application is configured for easy deployment. The backend serves the frontend build files, so you can deploy it as a single unit to platforms like Heroku, Render, or Vercel.

## License

ISC
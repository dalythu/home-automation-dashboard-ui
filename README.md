# Smart Home Automation Dashboard

A web dashboard for monitoring and controlling lights across rooms in a home.

The application provides a simple interface to view rooms, manage lights, and trigger automation actions such as turning all lights on or off. The project is built with a React frontend and a Node/Express backend connected to MongoDB.

---

## Repositories

Frontend  
https://github.com/dalythu/home-automation-dashboard-ui

Backend  
https://github.com/dalythu/home-automation-dashboard-api

The frontend communicates with the backend API to retrieve room data and update light states.

---

## Features

- Dashboard showing an overview of rooms and lighting status
- View lights within individual rooms
- Toggle lights on or off
- Add lights to a room
- Remove lights from a room
- Automation controls for turning all lights on or off
- Weather display using the Open-Meteo API

---

## Tech Stack

Frontend

- React
- React Router
- CSS

Backend

- Node.js
- Express
- MongoDB
- Mongoose

External API

- Open-Meteo Weather API

---

## Application Pages

**Dashboard**  
Displays a summary of rooms, occupancy status, and lighting information.

**Rooms**  
Lists all rooms available in the system.

**Room Details**  
Displays the lights in a specific room and allows lights to be toggled, added, or removed.

**Automations**  
Contains automation controls that affect lights across all rooms.

---

## Running the Project

### Start the backend

Clone the backend repository and follow the setup instructions in its README.

The backend API runs locally on:

```
http://localhost:5001
```

---

### Start the frontend

Clone the repository:

```
git clone https://github.com/dalythu/home-automation-dashboard-ui.git
```

Install dependencies:

```
npm install
```

Run the development server:

```
npm run dev
```

Then open the app in your browser.

---

## Future Improvements

This project is intended to grow into a more complete smart home control system. Some planned improvements include:

- Presence-based automations using motion or occupancy sensors so lights can respond automatically when someone enters or leaves a room.
- Integration with Home Assistant to allow the dashboard to control real smart home devices and reflect their live state.
- More advanced automation rules that allow lights and rooms to react to different conditions.
- Improved UI and mobile responsiveness.

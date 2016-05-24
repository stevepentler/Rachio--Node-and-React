# React + Node Starter (for [Heroku](https://www.heroku.com/) deployment) from [alanbsmith](https://github.com/alanbsmith)

### UP & RUNNING
* `npm install`
* `npm start`
* visit `http://localhost:8080/`

#### React Components
  - App  (maintains all state and AJAX calls)
    - Header  (Rachio logo)
    - Device  (device and preloader)
      - All Zones  (maps all device zones)
        - Zone  (Renders Zone specifics)
          - WateringForm  (Renders form based on active state)

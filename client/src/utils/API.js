import axios from "axios";

export default {
  // Gets all cars
  getCars: function() {
    return axios.get("/api/cars");
  },
  // Gets the car with the given id
  getCar: function(id) {
    return axios.get("/api/cars/" + id);
  },
  // Deletes the car with the given id
  deleteCar: function(id) {
    return axios.delete("/api/cars/" + id);
  },
  // Saves a car to the database
  saveCar: function(carData) {
    return axios.post("/api/cars", carData);
  },
  // Saves a user to the database
  saveUser: function(userData) {
    return axios.post("/api/users/signup", userData);
  },
  // Gets all users
  getUsers: function() {
    return axios.get("/api/users");
  },
};

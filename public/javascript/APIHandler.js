const axios = require('axios');
const APIHandler = require('./APIHandler');

const api = new APIHandler('http://localhost:8000');

class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  async getFullList () {
    try {
      const response = await axios.get(`${this.BASE_URL}/characters`);
      return response.data;
    } catch (error) {
      console.error("Error retrieving all characters: ", error);
    }
  }

  async getOneRegister (id) {
    try {
      const response = await axios.get(`${this.BASE_URL}/characters/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error retrieving character Id: ", error);
    }
  }

  async createOneRegister(characterData) {
    try {
      const response = await axios.post(`${this.BASE_URL}/characters`, characterData);
      return response.data;
    } catch (error) {
      console.error("Error creating character: ", error);
    }
  }

  async updateOneRegister(id, characterData) {
    try {
      const response = await axios.put(`${this.BASE_URL}/characters/${id}`, characterData);
      return response.data;
    } catch (error) {
      console.error(`Error updating character with ID ${id}: `, error);
    }
  }

  async deleteOneRegister(id) {
    try {
      const response = await axios.delete(`${this.BASE_URL}/characters/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error deleting character with ID ${id}: `, error);
    }
  }
}

module.exports = APIHandler;
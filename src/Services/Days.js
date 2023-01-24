import api from "./apiConfig.js";

export const getDays = async() => {     
    try{
        const response = await api.get("/days");
        console.log(response);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getDay = async(id) => {    
    try{
        const response = await api.get(`/days/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const createDay = async (dayData) => {
    try {
      const response = await api.post("/days", dayData);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

export const updateDay = async(id, dayData) => {    //update one day's entry
    try{
        const response = await api.put(`/days/${id}`,dayData);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const deleteDay = async (id) => {
    try {
      const response = await api.delete(`/characters/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
import { initStore } from "react-waterfall";
import axios from "axios";

const store = {
  initialState: {
    eventData: [],
    eventDataUser: [],
    listEvent: [],
    mailCategory: [],
    item: []
  },
  actions: {
    addEventDate: ({ eventData }, data) => ({
      eventData: { ...eventData, ...data }
    }),
    addEventAndShare: async ({ eventData }, data) => {
      const res = await axios.post(
        "/api/event",
        Object.assign(eventData, data)
      );
      const body = res.data;
      return {
        eventData: { ...eventData, ...body }
      };
    },
    addParticipant: async ({ item }, data) => {
      const res = await axios.post("/api/item", data);
      const body = res.data;
      return {
        item: { ...item, ...body }
      };
    },
    uploadImage: async ({ eventData }, data) => {
      const res = await axios.post("api/upload", data);
      const body = res.data;
      return {
        eventData: { ...eventData, ...body }
      };
    },
    updateItem: async ({ item }, data) => {
      const res = await axios.put(`/api/item/${data._id}`, data);
      const body = res.data;
      return {
        item: { ...item, ...body }
      };
    },

    updateOption: async ({ eventDataUser }, data) => {
      const res = await axios.put(`/api/event/updateOption/${data._id}`, data);
      const body = res.data;
      return {
        eventDataUser: { ...eventDataUser, ...body }
      };
    },

    deleteItem: async ({ item }, data) => {
      await axios.delete(`/api/item/${data._id}`);
      
    },
    getEvent: async ({ eventDataUser }, id) => {
      const res = await axios.get(`/api/event/${id}`);
      const body = res.data;
      return {
        eventDataUser: { ...eventDataUser, ...body }
      };
    },
    getListEvent: async () => {
      const res = await axios.get("/api/event");
      const body = res.data;
      return {
        listEvent: body
      };
    },
    sendMailCategory: async ({ mailCategory }, data) => {
      const res = await axios.post("/api/sendmail", data);
      const body = res.data;
      return {
        mailCategory: { ...mailCategory, ...body }
      };
    },
    getItem: async ({ item }) => {
      const res = await axios.get("/api/item");
      const body = res.data;
      return {
        item: body
      };
    },
    bring: async ({ eventDataUser }, optionData, data) => {
      const predata = eventDataUser.optionData ? eventDataUser.optionData : "";
      return {
        eventDataUser: {
          ...eventDataUser,
          optionData: [{ optionData, data }, ...predata]
        }
      };
    },
    bringUpdate: async ({ eventDataUser }, optionData, data) => {
      const predata = eventDataUser.optionData ? eventDataUser.optionData : "";
      const popped = predata.slice(1);
      console.log(predata, popped);
      return {
        eventDataUser: {
          ...eventDataUser,
          optionData: [{ optionData, data }, ...popped]
        }
      };
    }
  }
};

export const {
  Provider,
  Consumer,
  actions,
  getState,
  connect,
  subscribe
} = initStore(store);

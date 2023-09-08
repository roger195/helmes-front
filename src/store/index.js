import { createStore } from "vuex";

export default createStore({
  state: {
    sectors: [],
    formData: {
      name: "",
      selectedSectors: [],
      isTermsAccepted: true,
    },
    errors: null,
    success: false,
  },
  getters: {
    getErrors(state) {
      return state.errors;
    },
  },
  mutations: {
    setSectors(state, data) {
      state.sectors = data;
    },
    setFormData(state, data) {
      state.formData = data;
    },
    resetFormData(state) {
      state.formData = {
        name: "",
        selectedSectors: [],
        isTermsAccepted: false,
      };
    },
    setErrors(state, data) {
      state.errors = data;
    },
    setSuccess(state, data) {
      state.success = data;
    },
  },
  actions: {
    async fetchSectors({ commit }) {
      try {
        const response = await fetch("http://localhost:8090/sectors");
        const data = await response.json();
        commit("setSectors", data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
    async fetchPersonSectorsInfo({ commit }) {
      try {
        const response = await fetch(
          "http://localhost:8090/person-sectors-info",
          {
            headers: {
              sessionId: sessionStorage.getItem("sessionId"),
            },
          }
        );
        const data = await response.json();
        commit("setFormData", data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
    async postPersonSectorsInfo({ commit, dispatch }) {
      try {
        if (sessionStorage.getItem("sessionId") === null) {
          dispatch("createSession");
        }
        const response = await fetch(
          "http://localhost:8090/person-sectors-info",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
              sessionId: sessionStorage.getItem("sessionId"),
            },
            body: JSON.stringify(this.state.formData),
          }
        );
        if (response.ok) {
          commit("setErrors", null);
          commit("setSuccess", true);
        } else {
          const data = await response.json();
          console.error("Error submitting form:");
          commit("setErrors", data);
        }
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    },
    async createSession({ commit }) {
      try {
        const response = await fetch("http://localhost:8090/create-session", {
          method: "POST",
          withCredentials: "include",
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        });
        if (response.ok) {
          const data = await response.json();
          commit("resetFormData", null);
          sessionStorage.setItem("sessionId", data.sessionId);
        }
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    },
  },
  modules: {},
});

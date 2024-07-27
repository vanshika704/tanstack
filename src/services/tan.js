import axios from "axios"; //import axios

const apiClient = axios.create({ // variable bnaya apiclient naame se , or axios.create krke usko baseurl dediya jispe humko kaam krna h
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: { // header type dediya 
    "Content-Type": "application/json",
  },
});

export const fetchCardsData = async () => { //function bnaya jo data fetch krega cards ka
  const response = await apiClient.get("/users"); //usme apiclientvariableko.get lgaya jissse hume us url kaa 
  return response.data;
};

export const login = async (email, password) => {
  const response = await apiClient.post("/auth/login", { email, password }); // same login function bnaya data fetch krne ko.
  return response.data;
};

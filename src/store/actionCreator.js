import axios from "axios";

export const verifyDetails = (email, password, data) => {
  return email === data.username && password === data.password;
};

export const isAuthenticated = (value) => {
  return {
    type: "CHECK_AUTH",
    value,
  };
};
export const authenticate = (email, password) => {
  return (dispatch) => {
    axios
      .get(
        `https://my-json-server.typicode.com/siddharth-upamanyu/peekameet-fake-data/credentials`
      )
      .then((response) => {
        console.log(response.data);
        if (verifyDetails(email, password, response.data)) {
          dispatch(isAuthenticated(true));
          console.log("Correct Credentials!");
        } else {
          dispatch(isAuthenticated(false));
          alert("Please enter valid user name and password!");
          console.log("Wrong Credentials!");
        }
      })
      .catch((error) => console.log(error));
  };
};

export const setUserData = (data) => {
  return {
    type: "GET_USER_DATA",
    data,
  };
};

export const getData = () => {
  return (dispatch) => {
    axios
      .get(
        `https://my-json-server.typicode.com/siddharth-upamanyu/peekameet-fake-data/user`
      )
      .then((response) => {
        console.log(response.data);
        dispatch(setUserData(response.data));
      })
      .catch((error) => console.log(error));
  };
};

// import axios from "axios";
// import { setLoading, setUsers, setError } from "../redux/userSlice"; // Import actions

// const API_URL = import.meta.env.REACT_APP_API_URL;

// export const fetchUsers = async (dispatch) => {
//   dispatch(setLoading(true));

//   try {
//     const response = await axios.get(API_URL); // Make the API call
//     if (Array.isArray(response.data)) {
//       dispatch(setUsers(response.data)); // Only set users if it's an array
//     } else {
//       throw new Error("Data format is not an array");
//     }
//   } catch (error) {
//     dispatch(setError(error.message));
//   } finally {
//     dispatch(setLoading(false));
//   }
// };
import axios from "axios";
// import { NodeJS } from "NodeJS";
import { setLoading, setUsers, setError } from "../redux/userSlice";

// var process = NodeJS.process;
// const API_URL = import.meta.env.REACT_APP_API_URL;
// const API_URL = import { NodeJS } from 'n';
// const API_URL = process.env.VITE_API_URL;
const API_URL = import.meta.env.VITE_API_URL;


export const fetchUsers = async (dispatch) => {
  dispatch(setLoading(true));

  try {
    const response = await axios.get(API_URL);
    console.log("API Response:", response.data); // Log to check response format

    // Check if the response contains an array directly or within a field
    if (Array.isArray(response.data)) {
      dispatch(setUsers(response.data));
    } else if (response.data && Array.isArray(response.data.users)) {
      dispatch(setUsers(response.data.users)); // For nested arrays like response.data.users
    } else {
      throw new Error(
        "Data format is not an array or contains unexpected structure"
      );
    }
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};

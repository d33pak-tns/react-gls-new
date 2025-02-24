import axios from "axios";
import { setLoading, setUsers, setError } from "../redux/userSlice";

const API_URL = import.meta.env.VITE_API_URL;


export const fetchUsers = async (dispatch) => {
  dispatch(setLoading(true));

  try {
    const response = await axios.get(API_URL);
    // console.log("API Response:", response.data);

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

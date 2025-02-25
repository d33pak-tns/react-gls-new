import axios from "axios";
import { setLoading, setUsers, setError } from "../redux/userSlice";
import { isArrayData } from "../utils/checkData";

export const apiSection = {
  usersapi: "https://jsonplaceholder.typicode.com/users",
};

export const fetchUsersData = async () => {
  const response = await axios.get(apiSection.usersapi);
  return response.data;
};

export const fetchUsers = async (dispatch) => {
  dispatch(setLoading(true));

  try {
    const users = await fetchUsersData();
    // console.log(`users`, users);

    if (isArrayData(users)) {
      //   console.log(`isArrayData`);
      dispatch(setUsers(users));
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

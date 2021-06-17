import axios from "axios";

export const userLogin = async () => {

  const url = "http://localhost:3000/token"
  const token = localStorage.getItem("token");

  const header = { headers: { token: token, Accept: 'application/json' } }

  try {
    const isToken = await axios.get(url, header)
    return isToken
  } catch (err) {
    return err.response
  }
}

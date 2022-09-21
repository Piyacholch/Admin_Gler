
import axios from "axios";
export default function useApi() {
    const baseURL = "http://localhost:5050";
    const api = axios.create({
        baseURL,
      });
      const fetchActivity = async () => {
        const res = await api.get("/activity");
        return res.data;
      };
      return {
        api,
        fetchActivity
    };
}

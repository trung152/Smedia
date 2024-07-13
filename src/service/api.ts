import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
const RAPID_API_KEY = process.env.NEXT_PUBLIC_RAPID_API_KEY;
const RAPID_API_HOST = process.env.NEXT_PUBLIC_RAPID_API_HOST;

const axiosInstanceRapid = axios.create({
  baseURL: BASE_URL,
 /*  headers: {
    "x-api-key": RAPID_API_KEY,
  }, */
});

export const getSocialAutoLink = async (data: any) => {
  return await axiosInstanceRapid.post(`/social/media`, data);
};

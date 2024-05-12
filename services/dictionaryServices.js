import axios from "axios";
import { API_KEY } from "../configurations";

const getWordMeaning = async ({ queryKey }) => {
  try {
    const response = await axios.get(
      `https://www.dictionaryapi.com/api/v3/references/thesaurus/json/${queryKey[1]}?key=${API_KEY}`
    );

    console.log(response.data, "get weather");
    return response.data;
  } catch (error) {
    console.log("inside error");
    return { status: false };
  }
};

const dictionaryServices = {
  getWordMeaning,
};

export default dictionaryServices;

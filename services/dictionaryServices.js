import axios from "axios";
import { API_KEY } from "../configurations";

const getWordMeaning = async ({ queryKey }) => {
  try {
    //V3
    // const response = await axios.get(
    //   `https://www.dictionaryapi.com/api/v3/references/thesaurus/json/${queryKey[1]}?key=${API_KEY}`
    // );

    const response = await axios.get(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${queryKey[1]}`
    );
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

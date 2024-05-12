import { useState } from "react";
import { useGetMeaning } from "../api/useDictionaryAPI.js";
import { ToastAndroid } from "react-native";

const useDictionaryInputs = () => {
  const [word, setWord] = useState("");

  const { isLoading, data, isError, refetch } = useGetMeaning(word);

  const handleWord = (text) => {
    // event.persist();
    setWord(text);
  };

  const wordSearch = () => {
    if (word === "") {
      ToastAndroid.show("Please enter your word!", ToastAndroid.SHORT);
      return;
    }
    refetch();
  };

  return {
    word,
    isLoading,
    data,
    isError,
    handleWord,
    wordSearch,
  };
};

export default useDictionaryInputs;

import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { StatusBar } from 'expo-status-bar';
import useDictionaryInputs from "../hooks/views/useDictionaryInputs";
import Loading from "../components/Loading";
import { SafeAreaView } from "react-native-safe-area-context";
import WordDetails from "../components/WordDetails";
import styles from "../styles";

const Application = () => {
  const { word, isLoading, data, isError, handleWord, wordSearch } =
    useDictionaryInputs();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter your word here"
          onChangeText={handleWord}
          value={word}
          placeholderTextColor="#888"
        />
        <TouchableOpacity style={styles.searchButton} onPress={wordSearch}>
          <Text style={styles.searchButtonText}>Search</Text>
        </TouchableOpacity>
      </View>
      {data && data.length > 0 ? (
        <WordDetails data={data} />
      ) : data && data.length < 0 && word.trim().length > 0 ? (
        <Text style={styles.notFoundText}>No results found</Text>
      ) : null}
      {isError && (
        <Text style={styles.notFoundText}>Oops! Something went wrong.</Text>
      )}
    </SafeAreaView>
  );
};

export default Application;

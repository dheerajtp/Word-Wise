import React from "react";
import { View, Text } from "react-native";
import styles from "../styles";

const SingleWordDetail = ({ item }) => {
  return (
    <View style={styles.descriptionContainer}>
      <Text style={styles.headword}>{item.word}</Text>
      {item.meanings.map((meaning, index) => (
        <View key={index} style={styles.meaningContainer}>
          <Text style={styles.partOfSpeech}>{meaning.partOfSpeech}</Text>

          {meaning.definitions.map((definition, defIndex) => (
            <View key={defIndex} style={styles.definitionContainer}>
              <Text style={styles.definition}>Meaning : {definition.definition}</Text>

              {definition.synonyms && definition.synonyms.length > 0 && (
                <View style={styles.synonymsContainer}>
                  <Text style={styles.synonymsLabel}>Synonyms:</Text>
                  {definition.synonyms.map((synonyms, synIndex) => (
                    <Text key={synIndex} style={styles.synonyms}>
                      {synonyms.map((synonym, synWordIndex) => (
                        <Text key={synWordIndex}>{`${synonym}${
                          synWordIndex !== synonyms.length - 1 ? ", " : ""
                        }`}</Text>
                      ))}
                    </Text>
                  ))}
                </View>
              )}

              {definition.antonyms && definition.antonyms.length > 0 && (
                <View style={styles.antonymsContainer}>
                  <Text style={styles.antonymsLabel}>Antonyms:</Text>
                  <Text style={styles.antonyms}>
                    {definition.antonyms.join(", ")}
                  </Text>
                </View>
              )}

              {definition.example && (
                <Text style={styles.example}>
                  Example: {definition.example}
                </Text>
              )}
            </View>
          ))}
        </View>
      ))}
      <Text style={styles.sourceUrls}>
        Source URLs: {item.sourceUrls.join(", ")}
      </Text>
    </View>
  );
};

export default SingleWordDetail;

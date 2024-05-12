import React from "react";
import { View, Text } from "react-native";
import styles from "../styles";

const WordDetails = ({ data }) => {
  const { hwi, fl, def, shortdef } = data[0];
  return (
    <View style={styles.descriptionContainer}>
      <Text style={styles.headword}>{hwi.hw}</Text>
      <Text style={styles.partOfSpeech}>{fl}</Text>
      {def.map((definition, index) => (
        <View key={index} style={styles.definitionContainer}>
          <Text style={styles.definition}>
            {definition.sseq[0][0][1].dt[0][1]}
          </Text>
          {definition.sseq[0][0][1].syn_list && (
            <View style={styles.synonymsContainer}>
              <Text style={styles.synonymsLabel}>Synonyms:</Text>
              {definition.sseq[0][0][1].syn_list.map((synonyms, synIndex) => (
                <Text key={synIndex} style={styles.synonyms}>
                  {synonyms.map((synonym, synWordIndex) => (
                    <Text key={synWordIndex}>{`${synonym.wd}${
                      synWordIndex !== synonyms.length - 1 ? ", " : ""
                    }`}</Text>
                  ))}
                </Text>
              ))}
            </View>
          )}
        </View>
      ))}
      {shortdef.length > 0 && (
        <View style={styles.shortdefContainer}>
          <Text style={styles.shortdefLabel}>Short Definitions:</Text>
          {shortdef.map((definition, index) => (
            <Text key={index} style={styles.shortdef}>{`${
              index + 1
            }. ${definition}`}</Text>
          ))}
        </View>
      )}
    </View>
  );
};

export default WordDetails;

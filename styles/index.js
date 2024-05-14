import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginHorizontal: 20,
    marginTop: 20,
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 16,
    color: "#000",
    paddingHorizontal: 10,
  },
  searchButton: {
    backgroundColor: "#000",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
  },
  searchButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  notFoundText: {
    fontSize: 18,
    marginTop: 20,
    textAlign: "center",
  },
  descriptionContainer: {
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  headword: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
  },
  partOfSpeech: {
    fontSize: 16,
    fontStyle: "italic",
    marginBottom: 10,
  },
  definitionContainer: {
    marginBottom: 10,
  },
  definition: {
    fontSize: 18,
    lineHeight: 24,
  },
  synonymsContainer: {
    marginTop: 8,
  },
  synonymsLabel: {
    fontWeight: "bold",
    marginBottom: 3,
  },
  synonyms: {
    fontSize: 16,
    lineHeight: 20,
  },
  shortdefContainer: {
    marginTop: 10,
  },
  shortdefLabel: {
    fontWeight: "bold",
    marginBottom: 3,
  },
  shortdef: {
    fontSize: 16,
    lineHeight: 20,
    marginBottom: 3,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  phonetic: {
    fontSize: 16,
    marginBottom: 5,
  },
  phoneticContainer: {
    marginBottom: 10,
  },
  phoneticText: {
    fontSize: 16,
  },
  phoneticAudio: {
    fontSize: 16,
    color: "blue",
    textDecorationLine: "underline",
  },
  phoneticSourceUrl: {
    fontSize: 14,
    color: "gray",
  },
  phoneticLicenseName: {
    fontSize: 14,
  },
  phoneticLicenseUrl: {
    fontSize: 14,
    color: "blue",
    textDecorationLine: "underline",
  },
  meaningContainer: {
    marginBottom: 15,
  },
  definitionContainer: {
    marginBottom: 10,
  },
  synonymsContainer: {
    marginTop: 5,
  },
  synonymsLabel: {
    fontWeight: "bold",
    marginBottom: 3,
  },
  synonyms: {
    fontSize: 16,
    lineHeight: 20,
  },
  antonymsContainer: {
    marginTop: 5,
  },
  antonymsLabel: {
    fontWeight: "bold",
    marginBottom: 3,
  },
  antonyms: {
    fontSize: 16,
    lineHeight: 20,
  },
  example: {
    fontSize: 16,
    fontStyle: "italic",
    marginTop: 5,
  },
  licenseName: {
    fontSize: 14,
    marginTop: 10,
  },
  licenseUrl: {
    fontSize: 14,
    color: "blue",
    textDecorationLine: "underline",
  },
  sourceUrls: {
    fontSize: 14,
    color: "gray",
    marginTop: 5,
  },
});

export default styles;

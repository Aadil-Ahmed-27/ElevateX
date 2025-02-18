import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f8fa",
    paddingTop: Platform.OS === "ios" ? 40 : 16,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#e6e6e6",
  },
  backButton: {
    paddingRight: 8,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#212529",
  },
  profileContainer: {
    alignItems: "center",
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 12,
    marginBottom: 12,
  },
  name: {
    fontSize: 24,
    fontWeight: "700",
    color: "#212529",
  },
  tagline: {
    fontSize: 16,
    color: "#6c757d",
    marginVertical: 4,
  },
  description: {
    fontSize: 14,
    color: "#495057",
    textAlign: "center",
    marginTop: 12,
    lineHeight: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#212529",
    marginTop: 16,
  },
  analytics: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center", // Center text horizontally
    backgroundColor: "skyblue",
    borderRadius: 10,
    paddingVertical: 8, // Add padding for better appearance
    paddingHorizontal: 16, // Ensure text is centered within
    width: "auto", // Adjust width based on content
    hight: "auto",
  },
  sectionTitle1: {
    fontSize: 18,
    fontWeight: "600",
    color: "#212529",
  },

  detailText: {
    fontSize: 16,
    color: "#6c757d",
    marginVertical: 4,
  },
  postsList: {
    marginTop: 8,
    width: "100%",
  },
  postContainer: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 8,
    marginVertical: 4,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 1 },
  },
  postText: {
    fontSize: 14,
    color: "#212529",
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
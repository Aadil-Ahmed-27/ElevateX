import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
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
    padding: 16,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: "center",
    marginBottom: 12,
  },
  name: {
    fontSize: 24,
    fontWeight: "700",
    color: "#212529",
    textAlign: "center",
  },
  position: {
    fontSize: 16,
    color: "#6c757d",
    textAlign: "center",
    marginVertical: 4,
  },
  description: {
    fontSize: 14,
    color: "#495057",
    textAlign: "center",
    marginBottom: 12,
    lineHeight: 20,
  },
  statusContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 8,
  },
  statusLabel: {
    fontWeight: "600",
    marginRight: 4,
  },
  status: {
    fontStyle: "italic",
  },
  section: {
    marginTop: 16,
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 8,
    color: "#212529",
  },
  sectionContent: {
    fontSize: 14,
    color: "#495057",
    lineHeight: 20,
  },
  skillsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  skillBadge: {
    backgroundColor: "#e9ecef",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    marginRight: 8,
    marginBottom: 8,
  },
  skillText: {
    fontSize: 14,
    color: "#212529",
  },
  educationItem: {
    marginBottom: 8,
  },
  educationInstitution: {
    fontSize: 16,
    fontWeight: "600",
    color: "#212529",
  },
  educationDetails: {
    fontSize: 14,
    color: "#495057",
  },
  // Activity (Posts)
  postCard: {
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#e6e6e6",
    paddingBottom: 16,
  },
  postHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  postAuthorAvatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 8,
  },
  postAuthorInfo: {
    flexShrink: 1,
  },
  postAuthorName: {
    fontWeight: "600",
    fontSize: 14,
    color: "#212529",
  },
  postAuthorHeadline: {
    fontSize: 12,
    color: "#6c757d",
  },
  postAuthorFollowers: {
    fontSize: 12,
    color: "#6c757d",
  },
  postDate: {
    fontSize: 12,
    color: "#adb5bd",
    marginTop: 2,
  },
  postText: {
    fontSize: 14,
    color: "#212529",
    marginBottom: 8,
    lineHeight: 20,
  },
  postImage: {
    width: "100%",
    height: 200,
    borderRadius: 6,
    marginBottom: 8,
    backgroundColor: "#dee2e6",
  },
  postFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  engagementText: {
    fontSize: 12,
    color: "#6c757d",
  },
  engagementIcons: {
    flexDirection: "row",
  },
  iconButton: {
    marginLeft: 16,
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
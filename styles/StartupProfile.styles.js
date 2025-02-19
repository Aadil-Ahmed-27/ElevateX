import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f8fa",
    paddingTop: Platform.OS === "ios" ? 44 : 16,
  },
  scrollContent: {
    paddingBottom: 16,
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingVertical: 12,
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
  coverContainer: {
    width: "100%",
    height: 200,
    backgroundColor: "#e9ecef",
  },
  coverPhoto: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  companyInfoCard: {
    paddingHorizontal: 16,
    marginTop: -40,
    alignItems: "center",
    marginBottom: 16,
  },
  companyLogo: {
    width: 80,
    height: 80,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#fff",
    marginBottom: 8,
  },
  companyName: {
    fontSize: 24,
    fontWeight: "700",
    color: "#212529",
    textAlign: "center",
  },
  companyTagline: {
    fontSize: 16,
    color: "#6c757d",
    textAlign: "center",
    marginVertical: 4,
  },
  infoLine: {
    fontSize: 14,
    color: "#495057",
    textAlign: "center",
    marginBottom: 12,
  },
  actionButtons: {
    flexDirection: "row",
    marginBottom: 16,
  },
  actionButton: {
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginHorizontal: 4,
  },
  messageButton: {
    backgroundColor: "#17a2b8",
  },
  messageButtonText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#fff",
  },
  analyticsButton: {
    backgroundColor: "#0077b5",
  },
  actionButtonText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#fff",
  },
  tabBar: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#e6e6e6",
    marginTop: 8,
  },
  tabItem: {
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  tabItemActive: {
    borderBottomWidth: 3,
    borderBottomColor: "#0077b5",
  },
  tabItemText: {
    fontSize: 14,
    color: "#495057",
    fontWeight: "600",
  },
  tabItemTextActive: {
    color: "#0077b5",
  },
  tabContent: {
    padding: 16,
  },
  placeholderContainer: {
    alignItems: "center",
    justifyContent: "center",
    minHeight: 100,
  },
  placeholderText: {
    color: "#6c757d",
    fontStyle: "italic",
  },
  // Posts styles
  postsList: {
    marginTop: 8,
  },
  postContainer: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 1,
  },
  postHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  postLogo: {
    width: 40,
    height: 40,
    borderRadius: 8,
    marginRight: 8,
  },
  postCompanyName: {
    fontWeight: "600",
    fontSize: 14,
    color: "#212529",
  },
  postDate: {
    fontSize: 12,
    color: "#adb5bd",
  },
  postText: {
    fontSize: 14,
    color: "#212529",
    lineHeight: 20,
    marginBottom: 8,
  },
  postImage: {
    width: "100%",
    height: 200,
    borderRadius: 6,
    marginBottom: 8,
    backgroundColor: "#dee2e6",
  },
  engagementRow: {
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
  // AI Assistant (floating button)
  aiAssistantContainer: {
    position: "absolute",
    bottom: 20,
    left: 20,
    zIndex: 10,
  },
  aiAssistantButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#0077b5",
    padding: 12,
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  aiAssistantText: {
    color: "#fff",
    fontWeight: "600",
    marginLeft: 8,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginTop: 16,
    marginBottom: 8,
    color: "#212529",
    width: "100%",
  },
  detailText: {
    fontSize: 14,
    color: "#495057",
    marginBottom: 12,
    lineHeight: 20,
  },
});

export default styles;
// FeedScreen.styles.js
import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    paddingTop: 8,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  statusInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  timeText: {
    fontSize: 16,
    fontWeight: '500',
  },
  connectionInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  networkIcon: {
    marginHorizontal: 4,
  },
  postContainer: {
    backgroundColor: '#fff',
    borderBottomWidth: 8,
    borderBottomColor: '#f0f2f5',
  },
  userInfo: {
    flexDirection: 'row',
    padding: 12,
    alignItems: 'center',
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 12,
  },
  userTextInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  userTitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  postImage: {
    width: Dimensions.get('window').width,
    height: 400,
    backgroundColor: '#f8f8f8',
  },
  engagementStats: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  reactions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  reactionIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  reactionCount: {
    marginLeft: 8,
    color: '#666',
  },
  commentCount: {
    color: '#666',
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 4,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
  },
  actionText: {
    marginLeft: 8,
    color: '#666',
    fontSize: 14,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  navItem: {
    padding: 8,
  },
});

export default styles;
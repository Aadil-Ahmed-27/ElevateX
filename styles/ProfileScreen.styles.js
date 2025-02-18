// styles/ProfileScreen.styles.ts
import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
  safeContainer: { 
    flex: 1, 
    backgroundColor: '#fff'
  },
  container: { 
    flex: 1, 
    backgroundColor: '#fff'
  },
  profileHeader: { 
    flexDirection: 'row', 
    alignItems: 'flex-start', 
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0'
  },
  profileImageContainer: { 
    width: 80, 
    height: 80, 
    borderRadius: 40, 
    backgroundColor: '#f8f8f8', 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginRight: 16 
  },
  profileImagePlaceholder: { 
    width: 80, 
    height: 80, 
    borderRadius: 40, 
    backgroundColor: '#f0f2f5'
  },
  profileInfoContainer: { 
    flex: 1 
  },
  name: { 
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 4
  },
  headline: { 
    fontSize: 14,
    color: '#666',
    marginTop: 2
  },
  connections: { 
    fontSize: 14,
    color: '#666',
    marginTop: 2
  },
  statsContainer: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0'
  },
  statsText: { 
    color: '#666', 
    fontSize: 14,
    fontWeight: '500'
  },
  buttonsContainer: { 
    flexDirection: 'row', 
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0'
  },
  button: { 
    flex: 1, 
    backgroundColor: '#fff', 
    padding: 12, 
    marginHorizontal: 4, 
    borderRadius: 4, 
    alignItems: 'center', 
    borderWidth: 1, 
    borderColor: '#e0e0e0' 
  },
  buttonText: { 
    color: '#666',
    fontSize: 14,
    fontWeight: '500'
  },
  tabContainer: { 
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    backgroundColor: '#fff'
  },
  tabButton: { 
    flex: 1, 
    padding: 16,
    alignItems: 'center'
  },
  activeTab: { 
    borderBottomWidth: 2, 
    borderBottomColor: '#000'
  },
  tabText: { 
    color: '#666',
    fontSize: 14,
    fontWeight: '500'
  },
  tabContent: { 
    padding: 16,
    backgroundColor: '#fff'
  },
  placeholderText: { 
    color: '#666',
    textAlign: 'center',
    fontSize: 14
  },
  modalItem: { 
    color: '#000',
    fontSize: 14,
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0'
  }
});
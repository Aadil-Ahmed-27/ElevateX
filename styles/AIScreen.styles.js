import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    header: {
      flexDirection: "row",
      alignItems: "center",
      padding: 20,
      borderBottomWidth: 1,
      borderBottomColor: '#e0e0e0',
    },
    headerText: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#000',
      marginLeft: 10,
    },
    headerImage: {
      width: 40,
      height: 40,
      borderRadius: 20,
      borderWidth: 2,
      borderColor: '#e0e0e0',
    },
    chatArea: {
      flex: 1,
      padding: 16,
    },
    messageWrapper: {
      marginVertical: 5,
    },
    userMessage: {
      alignSelf: 'flex-end',
      backgroundColor: '#e3f2fd',
      padding: 15,
      borderRadius: 10,
      maxWidth: '80%',
    },
    aiMessage: {
      alignSelf: 'flex-start',
      backgroundColor: '#ffebee',
      padding: 15,
      borderRadius: 10,
      maxWidth: '80%',
    },
    messageText: {
      fontSize: 16,
      color: '#666',
    },
    timestamp: {
      fontSize: 12,
      color: '#666',
      marginTop: 4,
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 20,
      borderTopWidth: 1,
      borderTopColor: '#e0e0e0',
      backgroundColor: '#fff',
    },
    input: {
      flex: 1,
      height: 50,
      borderWidth: 1,
      borderColor: '#f0f2f5',
      borderRadius: 10,
      paddingHorizontal: 20,
      backgroundColor: '#fff',
      fontSize: 16,
      color: '#000',
    },
    sendButton: {
      marginLeft: 10,
      backgroundColor: '#e3f2fd',
      padding: 15,
      borderRadius: 10,
      width: 50,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
    },
    sendButtonDisabled: {
      backgroundColor: '#f0f2f5',
    },
    sendButtonText: {
      color: '#000',
      fontSize: 16,
      fontWeight: 'bold',
    }
  }
);

export default styles;
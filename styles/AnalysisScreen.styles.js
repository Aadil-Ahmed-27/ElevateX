// AnalysisScreen.styles.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    header: {
      padding: 20,
      borderBottomWidth: 1,
      borderBottomColor: '#e0e0e0',
    },
    headerText: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#000',
    },
    chartContainer: {
      alignItems: 'center',
      marginVertical: 10,
      padding: 16,
    },
    chart: {
      borderRadius: 16,
      marginVertical: 8,
    },
    section: {
      padding: 20,
      borderBottomWidth: 1,
      borderBottomColor: '#f0f2f5',
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: '600',
      marginBottom: 10,
      color: '#000',
    },
    milestoneContainer: {
      backgroundColor: '#ffebee',
      padding: 15,
      borderRadius: 10,
      marginTop: 8,
    },
    milestone: {
      fontSize: 16,
      marginVertical: 5,
      color: '#666',
    },
    tasksContainer: {
      backgroundColor: '#e3f2fd',
      padding: 15,
      borderRadius: 10,
      marginTop: 8,
    },
    task: {
      fontSize: 16,
      marginVertical: 5,
      color: '#666',
    },
    updatesContainer: {
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 10,
    
    },
    updates: {
    fontSize: 16,
    
    paddingLeft: 10,
    
    borderLeftColor: '#000',
    },
    
});

export default styles;
  
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    backgroundColor: '#fff'
  },
  formContainer: { 
    padding: 16 
  },
  inputGroup: { 
    marginBottom: 16 
  },
  label: { 
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 8,
    textTransform: "capitalize",
    color: '#666'
  },
  input: { 
    backgroundColor: "white",
    padding: 12,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#e0e0e0",
    fontSize: 14
  },
  textArea: { 
    height: 100,
    textAlignVertical: "top"
  },
  downloadButton: { 
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 4,
    alignItems: "center",
    marginTop: 16,
    borderWidth: 1,
    borderColor: "#e0e0e0"
  },
  downloadButtonText: { 
    color: '#666',
    fontSize: 14,
    fontWeight: "600"
  },
  uploadButton: { 
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 4,
    alignItems: "center",
    marginTop: 16,
    borderWidth: 1,
    borderColor: "#e0e0e0"
  },
  uploadButtonText: { 
    color: '#666',
    fontSize: 14,
    fontWeight: "600"
  },
  submitButton: { 
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 4,
    alignItems: "center",
    marginTop: 16,
    borderWidth: 1,
    borderColor: "#e0e0e0"
  },
  disabledButton: { 
    backgroundColor: "#f0f2f5",
    borderColor: "#e0e0e0"
  },
  submitButtonText: { 
    color: '#666',
    fontSize: 14,
    fontWeight: "600"
  },
  deleteButton: { 
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 4,
    alignItems: "center",
    marginTop: 16,
    borderWidth: 1,
    borderColor: "#ff3b30"
  },
  deleteButtonText: { 
    color: '#ff3b30',
    fontSize: 14,
    fontWeight: "600"
  }
});

export default styles;
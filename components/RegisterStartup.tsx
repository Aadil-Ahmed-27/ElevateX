import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  ScrollView,
  Alert,
} from 'react-native';
import { useRouter } from 'expo-router';
import * as FileSystem from 'expo-file-system';
import * as MediaLibrary from 'expo-media-library';
import * as DocumentPicker from 'expo-document-picker';
import styles  from '../styles/RegisterStartup.styles';


const RegisterStartup = () => {
    const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    tagline: "",
    description: "",
    industry: "",
    businessModel: "",
    companyStage: "",
    fundingStage: "",
    investmentGoal: "",
    revenueModel: "",
    keyTechnologies: "",
    usp: "",
    teamSize: "",
    hiring: "",
    targetAudience: "",
    traction: "",
    email: "",
    website: "",
    socialMedia: "",
  });

  const [documentUploaded, setDocumentUploaded] = useState(false);

  // Function to Download Standard Document
  const handleDownload = async () => {
    const fileName = "startup_standard_doc.txt";
    const fileUri = FileSystem.documentDirectory + fileName;
    const content = `
# Startup Information
Startup Name:  
Tagline:  
Industry:  
Business Model: (B2B, B2C, Hybrid)  
Company Stage: (Idea, MVP, Growth, Scaling)  
Description:  

# Product & Technology
Core Product/Service:  
Key Technologies Used:  
Unique Selling Proposition (USP):  
Revenue Model: (Subscription, Ads, Marketplace, etc.)  
Website:  

# Market & Traction
Target Audience:  
Current User Base (if any):  
Key Competitors:  
Market Problem Solved:  
Growth Strategy:  

# Team & Operations
Founders & Background:  
Current Team Size:  
Looking for Talent? (Yes/No)  
Hiring Details (if applicable):  

# Funding & Investment
Funding Stage: (Bootstrapped, Seed, Series A, etc.)  
Investment Goal:  
Notable Achievements (Awards, Grants, Partnerships, etc.):  

# Contact & Socials
Email:  
Social Media Links:  

# Additional Notes (if any)
`;

    try {
      await FileSystem.writeAsStringAsync(fileUri, content);

      const { status } = await MediaLibrary.requestPermissionsAsync();
      if (status !== "granted") {
        Alert.alert("Permission Required", "Storage permission is required to save the file.");
        return;
      }

      const asset = await MediaLibrary.createAssetAsync(fileUri);
      await MediaLibrary.createAlbumAsync("Download", asset, false);
      Alert.alert("Download Successful", "File has been saved in the Downloads folder.");
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
      Alert.alert("Download Failed", errorMessage);
    }
  };

  // Function to Upload Document
  const handleUpload = async () => {
    let result = await DocumentPicker.getDocumentAsync({ type: "*/*" });
    if (result.canceled) {
      Alert.alert("Upload Cancelled", "No document was selected.");
      return;
    }
    
    setDocumentUploaded(true);
    Alert.alert("Upload Successful", `Uploaded file: ${result.assets[0].name}`);
  };

  // Function to Save Data to user.json
  const saveUserData = async () => {
    const fileUri = FileSystem.documentDirectory + "user.json";
    try {
      await FileSystem.writeAsStringAsync(fileUri, JSON.stringify(formData, null, 2));
      Alert.alert("Registration Successful", "Your details have been saved!");
    } catch (error) {
      Alert.alert("Error", "Failed to save user data.");
    }
  };

  // Function to Submit the Form
  const handleSubmit = () => {
    if (!documentUploaded) {
      Alert.alert("Error", "Please upload the standard document before submitting.");
      return;
    }
    
    saveUserData();
    router.push("/details");
  };

  const handleDelete = async () => {
    const userJsonPath = FileSystem.documentDirectory + 'user.json';
    try {
      await FileSystem.deleteAsync(userJsonPath);
      Alert.alert("Deletion", "Startup details have been deleted successfully!");
      setFormData({
        name: "",
        tagline: "",
        description: "",
        industry: "",
        businessModel: "",
        companyStage: "",
        fundingStage: "",
        investmentGoal: "",
        revenueModel: "",
        keyTechnologies: "",
        usp: "",
        teamSize: "",
        hiring: "",
        targetAudience: "",
        traction: "",
        email: "",
        website: "",
        socialMedia: "",
      });
      // Navigate back to the index page
      router.push("/");
    } catch (error) {
      Alert.alert("Error", "No startup details found to delete.");
    }
  };

  type FormDataKey = keyof typeof formData;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.formContainer}>
        {Object.keys(formData).map((key) => (
          <View key={key} style={styles.inputGroup}>
            <Text style={styles.label}>{key.replace(/([A-Z])/g, ' $1').trim()}</Text>
            <TextInput
              style={[styles.input, key === "description" ? styles.textArea : null]}
              value={formData[key as FormDataKey]}
              onChangeText={(text) => setFormData({ ...formData, [key as FormDataKey]: text })}
              placeholder={`Enter ${key.replace(/([A-Z])/g, ' $1').trim()}`}
              multiline={key === "description"}
              numberOfLines={key === "description" ? 4 : 1}
            />
          </View>
        ))}

        <TouchableOpacity style={styles.downloadButton} onPress={handleDownload}>
          <Text style={styles.downloadButtonText}>Download Standard Document</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.uploadButton} onPress={handleUpload}>
          <Text style={styles.uploadButtonText}>Upload Standard Document</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.submitButton, !documentUploaded && styles.disabledButton]}
          onPress={handleSubmit}
          disabled={!documentUploaded}
        >
          <Text style={styles.submitButtonText}>
            {documentUploaded ? "Register" : "Upload Document First"}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.deleteButton}
          onPress={handleDelete}
        >
          <Text style={styles.deleteButtonText}>Delete Startup</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default RegisterStartup;
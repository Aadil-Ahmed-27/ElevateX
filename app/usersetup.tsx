import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView, ActivityIndicator } from 'react-native';
import { router } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Picker } from '@react-native-picker/picker';

export default function UserSetup() {
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [preferences, setPreferences] = useState({
    notifications: true,
    darkMode: false,
    language: 'English',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  
  // Role selection state
  const [selectedRole, setSelectedRole] = useState('');
  
  // Personalized questions state based on role
  const [answers, setAnswers] = useState({});
  const [selectedDomains, setSelectedDomains] = useState([]);
  const [showDomainSelection, setShowDomainSelection] = useState(false);

  useEffect(() => {
    const loadUsername = async () => {
      try {
        const storedUsername = await AsyncStorage.getItem('username');
        if (storedUsername) {
          setUsername(storedUsername);
        }
      } catch (error) {
        console.error('Failed to load username', error);
      }
    };
    
    loadUsername();
  }, []);

  const roles = [
    { id: 'student', label: 'Student' },
    { id: 'mentor', label: 'Mentor' },
    { id: 'serialEntrepreneur', label: 'Serial Entrepreneur' },
    { id: 'corporateProfessional', label: 'Corporate Professional' },
    { id: 'blueCollarEntrepreneur', label: 'Blue-Collar Entrepreneur' },
    { id: 'investor', label: 'Investor' },
    { id: 'alumni', label: 'Alumni' }
  ];

  const domains = [
    'AI-powered Retail', 'Agritech', 'Artificial Intelligence (AI) & Machine Learning (ML)',
    'Augmented Reality (AR) & Virtual Reality (VR)', 'Autonomous Vehicles',
    'Big Data and Analytics', 'BioTech', 'Blockchain', 'CleanTech & Renewable Energy',
    'ClimateTech', 'Cloud Computing', 'Cybersecurity', 'E-commerce & Retail',
    'EdTech', 'Electric Vehicles (EVs)', 'FashionTech', 'FinTech',
    'Gaming and Entertainment', 'Green Energy', 'HealthTech', 'Industrial Automation',
    'InsurTech', 'Internet of Things (IoT)', 'LegalTech', 'Mobility and Transportation',
    'Mobility-as-a-Service (MaaS)', 'Quantum Computing', 'Real Estate & PropTech',
    'RetailTech', 'Robotics & Automation', 'SaaS (Software as a Service)',
    'Service Robots', 'Smart Buildings', 'Smart Cities', 'Social Commerce',
    'Social Impact', 'SpaceTech', 'Supply Chain and Logistics', 'WealthTech'
  ];

  const getQuestionsForRole = (role) => {
    switch(role) {
      case 'student':
        return [
          {
            id: 'fieldOfStudy',
            question: 'What field of study are you currently pursuing?',
            options: ['Computer Science', 'Business', 'Engineering', 'Design', 'Arts', 'Social Sciences', 'Medical', 'OTHER']
          },
          {
            id: 'lookingFor',
            question: 'Are you looking for mentorship, internships, or collaborative projects?',
            options: ['Mentorship', 'Internship', 'Collaborative Projects', 'Networking', 'OTHER']
          },
          {
            id: 'interestingTech',
            question: 'Which emerging technologies or industries interest you the most?',
            options: ['AI & ML', 'Blockchain', 'IoT', 'Gaming', 'AR/VR', 'SpaceTech', 'OTHER']
          },
          {
            id: 'connectWith',
            question: 'Would you like to connect with professionals for career guidance or technical skills?',
            options: ['Career Guidance', 'Technical Skills', 'Industry Insights', 'OTHER']
          },
          {
            id: 'workingOnStartup',
            question: 'Are you working on any startup ideas or research projects?',
            options: ['Yes', 'No', 'OTHER']
          }
        ];
      case 'mentor':
        return [
          {
            id: 'specialization',
            question: 'What industries or technologies do you specialize in?',
            options: ['AI & ML', 'FinTech', 'Blockchain', 'HealthTech', 'CleanTech', 'OTHER']
          },
          {
            id: 'guidanceType',
            question: 'What type of guidance are you open to offering?',
            options: ['Career Advice', 'Technical Mentorship', 'Startup Growth', 'OTHER']
          },
          {
            id: 'preferredAudience',
            question: 'Do you prefer working with early-stage startups, students, or experienced entrepreneurs?',
            options: ['Early-stage Startups', 'Students', 'Experienced Entrepreneurs', 'OTHER']
          },
          {
            id: 'engagementFrequency',
            question: 'How often would you like to engage with mentees?',
            options: ['Weekly', 'Monthly', 'On-demand', 'OTHER']
          },
          {
            id: 'sessionType',
            question: 'Are you open to virtual mentoring or in-person sessions?',
            options: ['Virtual', 'In-person', 'Hybrid', 'OTHER']
          }
        ];
      case 'serialEntrepreneur':
        return [
          {
            id: 'startupsCount',
            question: 'How many startups have you founded or co-founded?',
            options: ['1-2', '3-5', '6+', 'OTHER']
          },
          {
            id: 'industriesWorkedIn',
            question: 'What industries have you worked in, and what excites you now?',
            options: ['FinTech', 'SaaS', 'E-commerce', 'HealthTech', 'AI & ML', 'OTHER']
          },
          {
            id: 'collaborationInterest',
            question: 'Are you looking to collaborate with technical talent, investors, or other founders?',
            options: ['Technical Talent', 'Investors', 'Founders', 'OTHER']
          },
          {
            id: 'currentChallenges',
            question: 'What challenges are you currently facing in your entrepreneurial journey?',
            options: ['Fundraising', 'Hiring', 'Scaling', 'Product Development', 'OTHER']
          },
          {
            id: 'mentorInterest',
            question: 'Are you open to mentoring or advising other founders?',
            options: ['Yes', 'No', 'Maybe', 'OTHER']
          }
        ];
      case 'corporateProfessional':
        return [
          {
            id: 'expertise',
            question: 'What is your area of expertise within your organization?',
            options: ['Product Management', 'Marketing', 'Engineering', 'Sales', 'Operations', 'OTHER']
          },
          {
            id: 'startupCollaboration',
            question: 'Are you interested in exploring startup collaborations or investing?',
            options: ['Yes', 'No', 'Maybe', 'OTHER']
          },
          {
            id: 'mentorStartups',
            question: 'Do you want to mentor or share corporate insights with early-stage startups?',
            options: ['Yes', 'No', 'Maybe', 'OTHER']
          },
          {
            id: 'newOpportunities',
            question: 'Are you looking for new opportunities in emerging technologies?',
            options: ['Yes', 'No', 'OTHER']
          },
          {
            id: 'platformHelp',
            question: 'How can the platform help you with professional growth or thought leadership?',
            options: ['Networking', 'Learning', 'Speaking Opportunities', 'OTHER']
          }
        ];
      case 'blueCollarEntrepreneur':
        return [
          {
            id: 'businessType',
            question: 'What type of business are you operating or planning to start?',
            options: ['Manufacturing', 'Construction', 'Transportation', 'Retail', 'OTHER']
          },
          {
            id: 'lookingFor',
            question: 'Are you looking for tech integration or funding opportunities?',
            options: ['Tech Integration', 'Funding', 'Networking', 'OTHER']
          }
        ];
      case 'investor':
        return [
          {
            id: 'activeSectors',
            question: 'What sectors or technologies are you actively investing in?',
            options: ['AI & ML', 'FinTech', 'HealthTech', 'SaaS', 'CleanTech', 'OTHER']
          },
          {
            id: 'companyStage',
            question: 'Are you looking for early-stage startups, growth-stage companies, or specific business models?',
            options: ['Early-stage', 'Growth-stage', 'Business Models', 'OTHER']
          },
          {
            id: 'partnerships',
            question: 'What type of partnerships or opportunities are you hoping to find?',
            options: ['Funding', 'Strategic Partnerships', 'Mentoring', 'OTHER']
          },
          {
            id: 'mentorship',
            question: 'Are you open to offering strategic mentorship or board-level support?',
            options: ['Yes', 'No', 'Maybe', 'OTHER']
          },
          {
            id: 'excitedAbout',
            question: 'What excites you most about the startup ecosystem right now?',
            options: ['Emerging Tech', 'Global Markets', 'Sustainable Innovation', 'OTHER']
          }
        ];
      case 'alumni':
        return [
          {
            id: 'graduationYear',
            question: 'What year did you graduate?',
            options: ['Before 2000', '2000-2010', '2011-2015', '2016-2020', '2021 or later']
          },
          {
            id: 'currentRole',
            question: 'What is your current role?',
            options: ['Founder', 'C-Suite Executive', 'Management', 'Individual Contributor', 'OTHER']
          },
          {
            id: 'alumniEngagement',
            question: 'How would you like to engage with your alumni network?',
            options: ['Mentoring', 'Hiring', 'Networking', 'Investing', 'OTHER']
          }
        ];
      default:
        return [];
    }
  };

  const handleAnswerChange = (questionId, value) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const toggleDomain = (domain) => {
    setSelectedDomains(prev => 
      prev.includes(domain) 
        ? prev.filter(d => d !== domain)
        : [...prev, domain]
    );
  };
  

  const handleRoleSelection = (role) => {
    setSelectedRole(role);
    setAnswers({});
    setCurrentStep(2);
  };

  const handlePersonalInfoStep = () => {
    if (!name || !email) {
      Alert.alert('Error', 'Please fill in your name and email');
      return;
    }
    setCurrentStep(4);
    setShowDomainSelection(true);
  };

  const handleComplete = async () => {
    if (selectedDomains.length === 0) {
      Alert.alert('Error', 'Please select at least one domain of interest');
      return;
    }

    setIsLoading(true);
    try {
      // Prepare user data
      const userData = {
        username,
        personal_info: {
          name,
          email
        },
        role: selectedRole,
        role_answers: answers,
        domains_of_interest: selectedDomains,
        preferences
      };

      // Send data to backend
      const response = await fetch('http://192.168.252.133:8000/user_setup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.detail || 'Failed to save user setup');
      }

      // Save the token received from login
      if (data.token) {
        await AsyncStorage.setItem('userToken', data.token);
      }
      
      // Also save data locally
      await AsyncStorage.setItem('userName', name);
      await AsyncStorage.setItem('userEmail', email);
      await AsyncStorage.setItem('userRole', selectedRole);
      await AsyncStorage.setItem('userPreferences', JSON.stringify(preferences));
      
      Alert.alert(
        'Setup Complete',
        'Your profile has been set up successfully!',
        [
          {
            text: 'Continue',
            onPress: () => router.replace('/(tabs)/feed'),
          },
        ]
      );
    } catch (error) {
      console.error('Setup error:', error);
      Alert.alert('Setup Failed', error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const renderRoleSelection = () => {
    return (
      <View style={styles.stepContainer}>
        <Text style={styles.title}>Who are you?</Text>
        <Text style={styles.subtitle}>Select the option that best describes you</Text>
        
        <ScrollView style={styles.roleContainer}>
          {roles.map((role) => (
            <TouchableOpacity
              key={role.id}
              style={styles.roleItem}
              onPress={() => handleRoleSelection(role.id)}
            >
              <Text style={styles.roleText}>{role.label}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    );
  };

  const renderPersonalizedQuestions = () => {
    const questions = getQuestionsForRole(selectedRole);
    
    return (
      <View style={styles.stepContainer}>
        <Text style={styles.title}>Tell us more about yourself</Text>
        <Text style={styles.subtitle}>These help us personalize your experience</Text>
        
        <ScrollView style={styles.questionsContainer}>
          {questions.map((q) => (
            <View key={q.id} style={styles.questionItem}>
              <Text style={styles.questionText}>{q.question}</Text>
              <View style={styles.pickerContainer}>
                <Picker
                  selectedValue={answers[q.id] || ''}
                  onValueChange={(value) => handleAnswerChange(q.id, value)}
                  style={styles.picker}
                >
                  <Picker.Item label="Select an option" value="" />
                  {q.options.map((option) => (
                    <Picker.Item key={option} label={option} value={option} />
                  ))}
                </Picker>
              </View>
            </View>
          ))}
          
          <TouchableOpacity
            style={styles.button}
            onPress={() => setCurrentStep(3)}
          >
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  };

  const renderPersonalInfo = () => {
    return (
      <View style={styles.stepContainer}>
        <Text style={styles.title}>Personal Information</Text>
        <Text style={styles.subtitle}>Tell us who you are</Text>
        
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Your Name</Text>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
            placeholder="Enter your full name"
          />
        </View>
        
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email Address</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholder="Enter your email address"
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>
        
        <Text style={styles.sectionTitle}>Preferences</Text>
        
        <View style={styles.preferenceItem}>
          <Text style={styles.preferenceLabel}>Enable Notifications</Text>
          <TouchableOpacity 
            style={[
              styles.toggle, 
              preferences.notifications ? styles.toggleActive : styles.toggleInactive
            ]}
            onPress={() => setPreferences(prev => ({...prev, notifications: !prev.notifications}))}
          >
            <View 
              style={[
                styles.toggleHandle,
                preferences.notifications ? styles.toggleHandleRight : styles.toggleHandleLeft
              ]} 
            />
          </TouchableOpacity>
        </View>
        
        <View style={styles.preferenceItem}>
          <Text style={styles.preferenceLabel}>Dark Mode</Text>
          <TouchableOpacity 
            style={[
              styles.toggle, 
              preferences.darkMode ? styles.toggleActive : styles.toggleInactive
            ]}
            onPress={() => setPreferences(prev => ({...prev, darkMode: !prev.darkMode}))}
          >
            <View 
              style={[
                styles.toggleHandle,
                preferences.darkMode ? styles.toggleHandleRight : styles.toggleHandleLeft
              ]} 
            />
          </TouchableOpacity>
        </View>
        
        <TouchableOpacity
          style={styles.button}
          onPress={handlePersonalInfoStep}
        >
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderDomainSelection = () => {
    return (
      <View style={styles.stepContainer}>
        <Text style={styles.title}>Domains of Interest</Text>
        <Text style={styles.subtitle}>Select all that apply to you (at least one)</Text>
        
        <ScrollView style={styles.domainsContainer}>
          {domains.map((domain) => (
            <TouchableOpacity
              key={domain}
              style={[
                styles.domainItem,
                selectedDomains.includes(domain) && styles.selectedDomain
              ]}
              onPress={() => toggleDomain(domain)}
            >
              <Text 
                style={[
                  styles.domainText,
                  selectedDomains.includes(domain) && styles.selectedDomainText
                ]}
              >
                {domain}
              </Text>
            </TouchableOpacity>
          ))}
          
          <TouchableOpacity
            style={styles.button}
            onPress={handleComplete}
            disabled={isLoading}
          >
            <Text style={styles.buttonText}>
              {isLoading ? 'Completing Setup...' : 'Complete Setup'}
            </Text>
            {isLoading && <ActivityIndicator color="#fff" style={styles.loader} />}
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  };

  const renderCurrentStep = () => {
    switch(currentStep) {
      case 1:
        return renderRoleSelection();
      case 2:
        return renderPersonalizedQuestions();
      case 3:
        return renderPersonalInfo();
      case 4:
        return renderDomainSelection();
      default:
        return renderRoleSelection();
    }
  };

  return (
    <View style={styles.container}>
      {renderCurrentStep()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  stepContainer: {
    flex: 1,
    padding: 20,
    paddingTop: 50,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    marginBottom: 30,
    textAlign: 'center',
  },
  roleContainer: {
    marginTop: 20,
  },
  roleItem: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  roleText: {
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
    color: '#333',
  },
  questionsContainer: {
    flex: 1,
  },
  questionItem: {
    marginBottom: 20,
  },
  questionText: {
    fontSize: 16,
    marginBottom: 10,
    color: '#333',
    fontWeight: '500',
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  picker: {
    height: 50,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },
  input: {
    backgroundColor: '#fff',
    height: 50,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    paddingHorizontal: 15,
    fontSize: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 15,
  },
  preferenceItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  preferenceLabel: {
    fontSize: 16,
    color: '#333',
  },
  toggle: {
    width: 50,
    height: 30,
    borderRadius: 15,
    padding: 2,
  },
  toggleActive: {
    backgroundColor: '#4CAF50',
  },
  toggleInactive: {
    backgroundColor: '#ccc',
  },
  toggleHandle: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: '#fff',
  },
  toggleHandleLeft: {
    alignSelf: 'flex-start',
  },
  toggleHandleRight: {
    alignSelf: 'flex-end',
  },
  domainsContainer: {
    marginTop: 10,
  },
  domainItem: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  selectedDomain: {
    backgroundColor: '#0066cc',
    borderColor: '#0052a3',
  },
  domainText: {
    fontSize: 15,
    color: '#333',
  },
  selectedDomainText: {
    color: '#fff',
    fontWeight: '500',
  },
  button: {
    backgroundColor: '#0066cc',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 40,
    flexDirection: 'row',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loader: {
    marginLeft: 10,
  }
});
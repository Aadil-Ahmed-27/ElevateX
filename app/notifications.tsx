import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, ScrollView, StyleSheet, Linking } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const NotificationScreen = () => {
  const notifications = [
    {
      date: 'Today',
      content: 'IN-SPACe launches ₹5 billion fund to support space tech startups, aiming to reduce import reliance and boost innovation.',
      link: 'https://www.reuters.com/technology/space/indias-space-regulator-launches-58-million-fund-boost-startups-cut-reliance-2025-02-19/',
    },
    {
      date: 'Today',
      content: 'Licious plans IPO in 2026, targeting $2 billion valuation to expand market reach and product offerings.',
      link: 'https://www.reuters.com/markets/deals/temasek-backed-indian-startup-licious-plans-ipo-2026-eyes-2-billion-valuation-2025-02-18/',
    },
    {
      date: 'Yesterday',
      content: 'Private equity poised for growth in India as IPOs wane, driving businesses to seek private funding.',
      link: 'https://www.reuters.com/business/finance/private-equity-poised-growth-india-ipos-wane-industry-executives-say-2025-02-11/',
    },
    {
      date: '12 Feb 2025',
      content: 'Rapido raises ₹250 crore from Prosus, extending its Series E round to enhance bike taxi services.',
      link: 'https://economictimes.indiatimes.com/topic/startup-funding',
    },
    {
      date: '11 Feb 2025',
      content: 'IXP Lifesciences launches ₹200-crore fund to fuel biotech innovation with a 3-5 year investment horizon.',
      link: 'https://economictimes.indiatimes.com/topic/startup-funding',
    },
    {
      date: '10 Feb 2025',
      content: 'ToneTag secures $78 million in Series B funding led by ValueQuest to expand contactless payment solutions.',
      link: 'https://entrackr.com/',
    },
    {
      date: '9 Feb 2025',
      content: 'Spyne raises $16 million in Series A round led by Vertex Ventures to boost AI-powered visual merchandising.',
      link: 'https://entrackr.com/',
    },
    {
      date: '8 Feb 2025',
      content: 'Udaan raises $75 million at flat valuation to strengthen its B2B e-commerce platform.',
      link: 'https://entrackr.com/',
    },
    {
      date: '7 Feb 2025',
      content: 'Healthfab secures $1 million in pre-Series A round to expand reusable period panty brand.',
      link: 'https://indianstartupnews.com/',
    },
    {
      date: '6 Feb 2025',
      content: 'Probus raises $5 million led by Unicorn India Ventures to enhance deeptech solutions.',
      link: 'https://indianstartupnews.com/',
    },
    {
      date: '5 Feb 2025',
      content: 'Lightstorm raises ₹700 crore from NIIF IFL to fuel India growth in digital infrastructure.',
      link: 'https://indianstartupnews.com/',
    },
    {
      date: '4 Feb 2025',
      content: 'BYTES receives grant from Nikhil Kamath’s WTFund to accelerate growth in the tech sector.',
      link: 'https://indianstartupnews.com/',
    },
    {
      date: '3 Feb 2025',
      content: 'India’s PE/VC investments in 2024 cross $56 billion, driven by an all-time high volume of 1,352 deals.',
      link: 'https://www.ey.com/en_in/newsroom/2025/01/pe-vc-investments-in-2024-cross-us-dollor-56-billion-helped-by-an-all-time-high-volume-of-1352-deals-ey-ivca-report',
    },
    {
      date: '2 Feb 2025',
      content: 'Data Infrastructure Trust acquires ATC India Tower Corporation for $2 billion in largest PE deal of 2024.',
      link: 'https://www.ey.com/en_in/newsroom/2025/01/pe-vc-investments-in-2024-cross-us-dollor-56-billion-helped-by-an-all-time-high-volume-of-1352-deals-ey-ivca-report',
    },
  ];

  const groupNotificationsByDate = (notifications) => {
    const grouped = {};
    notifications.forEach((notification) => {
      if (!grouped[notification.date]) {
        grouped[notification.date] = [];
      }
      grouped[notification.date].push(notification);
    });
    return grouped;
  };

  const groupedNotifications = groupNotificationsByDate(notifications);

  return (
    <SafeAreaView style={styles.safeContainer}>
      <StatusBar style="auto" />
      <View style={styles.headerContainer}>
        <TouchableOpacity>
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>Notifications</Text>
      </View>
      <ScrollView style={styles.container}>
        {Object.keys(groupedNotifications).map((date, index) => (
          <View key={index} style={styles.dateGroupContainer}>
            <Text style={styles.dateText}>{date}</Text>
            {groupedNotifications[date].map((notification, idx) => (
              <TouchableOpacity key={idx} style={styles.notificationItem} onPress={() => Linking.openURL(notification.link)}>
                <View style={styles.profileImagePlaceholder} />
                <Text style={styles.notificationText}>{notification.content}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
        <View style={styles.bottomSpacing} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: { flex: 1, backgroundColor: '#fff' },
  container: { padding: 16 },
  headerContainer: { flexDirection: 'row', alignItems: 'center', padding: 16, borderBottomWidth: 1, borderColor: '#ddd' },
  backText: { fontSize: 16, color: '#007AFF', marginRight: 12 },
  headerText: { fontSize: 18, fontWeight: 'bold' },
  dateGroupContainer: { marginBottom: 16 },
  dateText: { fontSize: 16, fontWeight: 'bold', marginBottom: 4 },
  notificationItem: { flexDirection: 'row', alignItems: 'center', marginBottom: 8 },
  profileImagePlaceholder: { width: 40, height: 40, borderRadius: 20, backgroundColor: 'black', marginRight: 12 },
  notificationText: { fontSize: 14, color: '#333', flexShrink: 1 },
  bottomSpacing: { height: 20 },
});

export default NotificationScreen;
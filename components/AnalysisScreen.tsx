import React from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import styles from '../styles/AnalysisScreen.styles';

const AnalysisScreen = () => {
  const chartData = {
    labels: ['MAY', 'JUN', 'JUL', 'AUG', 'SEP'],
    datasets: [
      {
        data: [1, 4, 3, 8, 2],
        color: () => '#4287f5', // blue
        strokeWidth: 2,
      },
      {
        data: [5, 12, 9, 11, 7],
        color: () => '#f54242', // red
        strokeWidth: 2,
      },
      {
        data: [4, 18, 14, 17, 12],
        color: () => '#f5a442', // orange
        strokeWidth: 2,
      },
    ],
    legend: ['Statistics', 'Oranges', 'Apples'],
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.headerText}>GROWTH ANALYSIS</Text>
        </View>

        <View style={styles.chartContainer}>
          <LineChart
            data={chartData}
            width={320}
            height={220}
            chartConfig={{
              backgroundColor: '#ffffff',
              backgroundGradientFrom: '#ffffff',
              backgroundGradientTo: '#ffffff',
              decimalPlaces: 0,
              color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              style: {
                borderRadius: 16,
              },
            }}
            bezier
            style={styles.chart}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Milestone Achieved</Text>
          <View style={styles.milestoneContainer}>
            <Text style={styles.milestone}>Launch MVP - Jan 2023</Text>
            <Text style={styles.milestone}>First 100 Users - Feb 2023</Text>
            <Text style={styles.milestone}>Series A Funding - Mar 2023</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Pending Tasks</Text>
          <View style={styles.tasksContainer}>
            <Text style={styles.task}>Expand to new markets</Text>
            <Text style={styles.task}>Optimize user engagement</Text>
            <Text style={styles.task}>Enhance product features</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recent Updates</Text>
          <View style={styles.updatesContainer}>
            <Text style={styles.updates}>⭕ the mobility unicorn reportedly claims to have set its eyes on generating 25,000 jobs in the city for its women “captains”.</Text>
            <Text style={styles.updates}>⭕ The latest offering from Rapido’s stable comes at a time when the company has been on an expansion spree. Last month, the Bengaluru-based mobility giant announced plans to expand its footprint to 500 cities across the country from 120 currently. </Text>
            <Text style={styles.updates}>⭕ In September 2024, Rapido was also reportedly looking to make its foray into the quick commerce space</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AnalysisScreen;
import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { BarChart, PieChart, LineChart, ProgressChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

export default function AnalysisSreen() {
  // Inline rgba function
  const rgba = (r: number, g: number, b: number, a: number) => `rgba(${r}, ${g}, ${b}, ${a})`;

  // Data for the bar chart (Funds received over months)
  const barData = {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
    datasets: [
      {
        data: [1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13],
        color: (opacity = 1) => rgba(54, 162, 235, opacity), // Blue color
      },
    ],
  };

  // Data for the line chart (Fund received over months)
  const lineData = {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
    datasets: [
      {
        data: [10, 12, 6, 5, 6, 7, 9, 8, 5, 4, 8, 11],
        color: (opacity = 1) => rgba(255, 99, 132, opacity), // Red color
      },
    ],
  };

  // Data for the pie chart (Company resource allocation)
  const pieData = [
    {
      name: 'R&D / Product Development',
      population: 40,
      color: '#4287f5',
      legendFontColor: '#000000',
      legendFontSize: 15,
    },
    {
      name: 'Marketing & Sales / Market Expansion',
      population: 30,
      color: '#f5426c',
      legendFontColor: '#000000',
      legendFontSize: 15,
    },
    {
      name: 'Team Hiring / Hiring',
      population: 20,
      color: '#a1a1a1',
      legendFontColor: '#000000',
      legendFontSize: 15,
    },
    {
      name: 'Operational Scaling / Infrastructure',
      population: 10,
      color: '#f5d142',
      legendFontColor: '#000000',
      legendFontSize: 15,
    },
  ];

  // Data for the radar chart (Key performance metrics)
  const radarData = {
    labels: ['Revenue Growth Rate', 'Customer Acquisition Rate', 'Brand Strength', 'Operational Efficiency', 'Product Innovation'],
    datasets: [
      {
        data: [0.65, 0.50, 0.80, 0.75, 0.90], // Normalized to a scale of 0 to 1
        color: (opacity = 1) => rgba(255, 206, 86, opacity), // Yellow color
      },
    ],
  };

  // Analytics points (instead of table)
  const analyticsPoints = [
    'Revenue Growth Rate: 65% - Reflects strong financial performance and expanding market share.',
    'Customer Acquisition Rate: 50% - Indicates effective sales strategies and growing user base.',
    'Market Presence/Brand Strength: 8/10 - Demonstrates solid brand reputation and market penetration.',
    'Operational Efficiency: 75% - Highlights streamlined processes and cost optimization.',
    'Product Innovation: 9/10 - Signifies leading-edge solutions and strong R&D capabilities.',
    'Employee Satisfaction: 85% - A motivated workforce driving productivity and innovation.',
    'Investor Confidence Index: 7/10 - Shows positive market sentiment and trust in the company.',
    'Client Retention Rate: 80% - Suggests high customer satisfaction and loyalty.',
    'Tech Advancement Score: 9/10 - Represents cutting-edge technology adoption.',
    'Market Expansion Potential: 70% - Indicates promising opportunities for business growth.',
  ];

  return (
    <ScrollView style={{ flex: 1, padding: 20, backgroundColor: '#FFFFFF' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20, color: '#000000' }}>Malcom Analytics Dashboard</Text>

      {/* Bar Chart */}
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10, color: '#000000' }}>Funds Received Over Months</Text>
      <BarChart
        data={barData}
        width={screenWidth - 40}
        height={220}
        yAxisLabel={'₹'}
        chartConfig={{
          backgroundGradientFrom: '#FFFFFF',
          backgroundGradientTo: '#FFFFFF',
          decimalPlaces: 0,
          color: (opacity = 1) => rgba(0, 0, 0, opacity),
          labelColor: (opacity = 1) => rgba(0, 0, 0, opacity),
          barPercentage: 0.5,
        }}
        style={{ marginBottom: 20 }}
      />

      {/* Line Chart */}
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10, color: '#000000' }}>Fund Received Over Months</Text>
      <LineChart
        data={lineData}
        width={screenWidth - 40}
        height={220}
        yAxisLabel={'₹'}
        chartConfig={{
          backgroundGradientFrom: '#FFFFFF',
          backgroundGradientTo: '#FFFFFF',
          decimalPlaces: 0,
          color: (opacity = 1) => rgba(0, 0, 0, opacity),
          labelColor: (opacity = 1) => rgba(0, 0, 0, opacity),
        }}
        style={{ marginBottom: 20 }}
      />

      {/* Pie Chart */}
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10, color: '#000000' }}>Company Resource Allocation</Text>
      <PieChart
        data={pieData}
        width={screenWidth - 40}
        height={220}
        chartConfig={{
          backgroundGradientFrom: '#FFFFFF',
          backgroundGradientTo: '#FFFFFF',
          color: (opacity = 1) => rgba(0, 0, 0, opacity),
        }}
        accessor={'population'}
        backgroundColor={'transparent'}
        paddingLeft={'15'}
        absolute
      />

      {/* Analytics Points */}
      {analyticsPoints.map((point, index) => (
        <Text key={index} style={{ color: '#000000', marginBottom: 10 }}>{point}</Text>
      ))}
    </ScrollView>
  );
}
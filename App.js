import React from 'react';
import { StyleSheet, Text, ScrollView, View } from 'react-native';
import { VictoryChart, VictoryBar, VictoryTheme } from 'victory-native';

data = [];

var i;
for(i = 0; i < 255; i++) {
  data.push({ quarter: i, earnings: Math.floor(Math.random() * 20001) });
}

data2 = [
  { quarter: 1, earnings: 13000 },
  { quarter: 2, earnings: 18720 },
  { quarter: 3, earnings: 14250 },
  { quarter: 4, earnings: 19000 },
  { quarter: 5, earnings: 13000 },
  { quarter: 6, earnings: 18720 },
  { quarter: 7, earnings: 14250 },
  { quarter: 8, earnings: 19000 }
]
data3 = [
  { quarter: 1, earnings: 13000 },
  { quarter: 2, earnings: 18720 },
  { quarter: 3, earnings: 14250 },
  { quarter: 4, earnings: 19000 },
  { quarter: 5, earnings: 13000 },
  { quarter: 6, earnings: 18720 },
  { quarter: 7, earnings: 14250 },
  { quarter: 8, earnings: 19000 },
  { quarter: 9, earnings: 13000 },
  { quarter: 10, earnings: 18720 },
  { quarter: 11, earnings: 14250 },
  { quarter: 12, earnings: 19000 }
]

export default class App extends React.Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.wrapper}>
        <View style={styles.container}>        
          <VictoryChart width={350} theme={VictoryTheme.material} domainPadding={{x: 25}}>
            <VictoryBar 
              style={{
                data: {
                  fill: "#FF0000",
                  stroke: "#960000",
                  fillOpacity: 0.6,
                  strokeWidth: 0.1 
                }
              }} 
              data={data} x="quarter" y="earnings" />
          </VictoryChart>
          <Text>Image Red Histogram</Text>
          
          <VictoryChart width={350} theme={VictoryTheme.material} domainPadding={{x: 25}}>
          <VictoryBar 
              style={{
                data: {
                  fill: "#00FF00",
                  stroke: "#009600",
                  fillOpacity: 0.6,
                  strokeWidth: 0.1 
                }
              }} 
              data={data2} x="quarter" y="earnings" />
          </VictoryChart>
          <Text>Image Green Histogram</Text>

          <VictoryChart width={350} theme={VictoryTheme.material} domainPadding={{x: 25}}>
            <VictoryBar 
              style={{
                data: {
                  fill: "#0000FF",
                  stroke: "#000096",
                  fillOpacity: 0.6,
                  strokeWidth: 0.1 
                }
              }} 
              data={data3} x="quarter" y="earnings" />
          </VictoryChart>          
          <Text>Image Blue Histogram</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

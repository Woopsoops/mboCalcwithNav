import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList} from 'react-native';

export default function History({route}) {

    const navigationOptions = {
        title: 'History'
    }

    const {historyCalc} =route.params;

    return (
        <View style={styles.container}>

        <View style={styles.flistcontainer}>
        <FlatList
            data={historyCalc}
            renderItem={({ item }) => <Text>{item}</Text>}
            keyExtractor={((item, index) => index.toString())}
        />
        </View>
            
        </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: '#8c92ac',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  flistcontainer: {
    flex: 2,
    fontSize: 20,
  }

})
;
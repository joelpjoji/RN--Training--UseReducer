import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState, useEffect,useReducer} from 'react';
import {useNavigation} from '@react-navigation/native';

const reducer = (state, action) =>{
    switch (action.type) {
        case "getData":
            return state = action.payload;
            break;
        default:
            break;
    }

}
const HomeScreen = ({navigation}) => {
    
  const [isLoading, setLoading] = useState(true);
  //const [data, setData] = useState([]);
  const [state, dispatch] = useReducer(reducer );
  const getData = async () => {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts',
      );
      const json = await response.json();
      const newdata = json.slice(0,5);
      dispatch({ type: "getData", payload : newdata})
      //setData(json);
    //   console.log(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  console.log(state);

  useEffect(() => {
    getData();
  }, []);

  return (
    <View>
      <Text
        style={{
          width: '100%',
        }}>
        EarthQuake Tracker
      </Text>
      <FlatList
        data={state}
        keyExtractor={(item, index) => index}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Details', {item: item});
            }}>
            <View>
              <Text>{item.title}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});

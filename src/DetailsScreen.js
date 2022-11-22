import React from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  Image,
  StyleSheet,
  Text,
  Button,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const DetailsScreen = (props) => {
    const {route} = props;
    const {params} = route;
    const {item} = params;
    const {title, name, email, subject, body} = item;

  return (
    <View>
      <Text>DetailsScreen</Text>
      <Text>{title}</Text>
    </View>
  )
}

export default DetailsScreen

const styles = StyleSheet.create({})
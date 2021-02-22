
import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Alert, Text } from 'react-native';
import Constant from 'expo-constants';
import TopBar from './components/TopBar';
import axios from 'axios';
import SwipeableImage from './components/SwipeableImage';
import ButtomBar from './components/ButtomBar';


export default function App() {
  const [pets, setPets] = useState([])
  const [currentIndex, setCurrentIndex] = useState (0)


// פונקציה ללקיחת מידע ממקור חיצוני בשימוש של אקסיוס
  async function fetchPets(){
    try {
      const {data} = await axios.get('https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=50')
    setPets(data)
    console.log(pets)
    } catch (error) {
      console.logs(error)
      // שייך לריאקט נייטב, פונקציה אלרט
      Alert.alert('Error getting pets from API', '', [{text: 'Retry', onPress: () => fetchPets()}])
    } 
  }
  useEffect(() => {
    fetchPets()
  }, [] )

// מה שהפונקציה מחזירה, משתמש בסטייל שהגדרתי
  return (
    <View style={styles.container}>
      <TopBar />
      <View style={styles.swipes}>{pets.length > 1 && <SwipeableImage pet={pets[currentIndex]} />}</View>
      <ButtomBar />
    </View>
  );
}


// סטייל ראשי לעמוד הראשי ללא תפריט
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constant.statusBarHeight
  },
  swipes:{
    flex: 1,
    padding: 10,
    paddingTop: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,

  }
});



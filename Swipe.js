import React from 'react';
import { View, Text} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {} from 'react-native-gesture-handler'

export default function Swipe(){

    const renderLeftAction = () => {
    }


    return(
        <Swipeable
        friction={2}
        leftThreshold={40}
        rightThreshold={40}
        renderLeftAction={renderLeftAction}
        >

        </Swipeable>
    )
}
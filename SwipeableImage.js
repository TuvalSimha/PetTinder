import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import {FontAwesome} from '@expo/vector-icons';

export default function SwipeableImage({ pet }){
return(
    <View>
        <Image source = {{ uri: pet.url }} style={styles.photo}/>
        <View style={styles.textContainer}> 
        <View style= {styles.textRow}> 
        <Text style={[styles.textPrimary, styles.textShadow]}> {pet.breeds[0].name} </Text>
        </View>
        <Text style={[styles.textSecondery, styles.textShadow]}> {pet.breeds[0].breed_group} </Text>
        <Text style={[styles.textSecondery, styles.textShadow]}> {pet.breeds[0].life_span} </Text>
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    photo: {
        height: '100%',
        resizeMode: 'cover',
        borderRadius: 20,
    },
    textContainer: {
        position: 'absolute',
        bottom: 20,
        left: 20,
    },
    textRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    textPrimary: {
        color: 'white',
        fontSize: 25,
        marginLeft: 10,
        fontWeight: 'bold',
    },
    textSecondery: {
        color: 'white',
        marginLeft: 10,
        fontSize: 25,
    },
    textShadow: {
        textShadowColor: 'rgba(0, 0, 0, 0.80)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10,
    }
})
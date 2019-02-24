import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

export interface ICityInfoPros {
    image: string; 
    name: any; 
    weather: IWeather;
}

export interface IWeather{
    summary: string;
    icon: string;
}

const CityInfoCard = (props: ICityInfoPros) => {
    return (
        <View>
            <Image 
                source={{uri: props.image}}
                style={styles.image}
            />
            <Text style={styles.text}>{props.name}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        flex:1,
    width: '100%',
    height: 300,
    marginTop: 0,
    marginBottom: 60,
    //borderRadius: 20, 
    padding: 50,
    resizeMode: "contain"
    },
    text:{
        marginTop: -150,
        color: "white",
        fontSize: 40,
        fontWeight: "bold"
    }
});

export default CityInfoCard;
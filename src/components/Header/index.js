import React from "react";
import { 
    View,
    StyleSheet,
    Text,
    StatusBar
} from 'react-native';

export default function Header(){
    return(
        <View>
            <Text> Header do app </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#8000ff'
    }
})
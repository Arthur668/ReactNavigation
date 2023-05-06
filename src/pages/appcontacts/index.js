import React from "react";
import { View, Text } from "react-native";

export default function appcontacts(){
    return(
        <View style={styles.container}>
            <Text>
                appcontacts
            </Text>
        </View>
    )
    const styles = StyleSheet.create({
        container:{
            flex:1,
            backgroundColor:'black'
        }
    })
}

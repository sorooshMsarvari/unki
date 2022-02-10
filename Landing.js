import { View } from "react-native";
import { StyleSheet } from 'react-native';
import { ListItem, Icon } from 'react-native-elements';
import { useState } from "react";

import { MaterialIcons } from '@expo/vector-icons';
import MenuButton from "./components/MenuButton";


export const list = [
    {
        title: 'Appointments',
        icon: 'article'
    },
    {
        title: 'Trips',
        icon: 'article'
    },
]


export default function Landing({ navigation }) {


    return (
        <>
            <View style={styles.container}>
                {
                    list.map((item, i) => (
                        <ListItem key={i} >
                            <Icon name={item.icon} />
                            <ListItem.Content>
                                <ListItem.Title>{item.title}</ListItem.Title>
                            </ListItem.Content>
                            <ListItem.Chevron />
                        </ListItem>
                    ))
                }

            </View>
            <View>

                <MenuButton navigation={navigation}/>
            </View>


        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        margin: 10,
        justifyContent: 'flex-start',
    },
    buttonBorder: {
        backgroundColor: 'black',
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 100,
    },
    button: {
        alignItems: 'center',
    },
    menuButton: {


    },
});


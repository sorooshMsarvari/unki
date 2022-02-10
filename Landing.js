import { View } from "react-native"
import { Button, Text } from 'react-native-elements'
import { StyleSheet } from 'react-native'
import { ListItem, Icon } from 'react-native-elements'
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


const Landing = ({navigation}) => {
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
            <View style={styles.button}>
                <Button
                    icon={{
                        name: 'add',
                        type: 'material',
                        size: 15,
                        color: 'white',
                    }}
                    buttonStyle={styles.buttonBorder}
                    onPress={() =>
                        navigation.navigate('addCard', { name: 'Jane' })
                      }
                />

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
    }
});


export default Landing
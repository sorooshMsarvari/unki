import { Button, Text, Input } from 'react-native-elements'
import { View } from 'react-native'
import { atom, useRecoilState } from 'recoil'

import {list} from './Landing'
const cardState = atom({
    key: 'cardState', // unique ID (with respect to other atoms/selectors)
    default: {
        frontText: '',
        backText: ''
    }, // default value (aka initial value)
});



export const AddCardPage = ({ navigation }) => {
    const [card, setCard] = useRecoilState(cardState);

    const onChange = (text, where) => {
        setCard({
             ...card,
             [where]: text 
            });
    };

    function addCard() {
        console.log(card)
        list.push(card)
    }

    return (
        <View>
            <Input label='Front' onChangeText={text => onChange(text, 'frontText')} />
            <Input label='Back' onChangeText={text => onChange(text, 'backText')} />
            <Button title='add card' onPress={addCard} />
        </View>
    )
}


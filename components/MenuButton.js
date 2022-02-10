import { SpeedDial } from 'react-native-elements';
import { MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';



export default function MenuButton({navigation}) {
    const [open, setOpen] = useState(false);

    return (
        <SpeedDial
            isOpen={open}
            icon={<MaterialIcons name="add" size={24} color="white" />}
            openIcon={<MaterialIcons name="close" size={24} color="white" />}
            onOpen={() => setOpen(!open)}
            onClose={() => setOpen(!open)}
        >
            <SpeedDial.Action
                icon={<MaterialIcons name="add-to-photos" size={24} color="white" />}
                title="Add Card"
                onPress={() => navigation.navigate('addCard', {name: 'hallo'})}
            />
            <SpeedDial.Action
                icon={<MaterialIcons name="create-new-folder" size={24} color="white" />}
                title="Add deck"
                onPress={() => console.log('Delete Something')}
            />
        </SpeedDial>
    );
}
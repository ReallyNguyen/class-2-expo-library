import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Avatar, Badge, Input } from '@rneui/themed';
import { CheckBox } from '@rneui/themed';


export default function Home({ navigation }) {
    const [checked, setChecked] = React.useState(true);
    const toggleCheckbox = () => setChecked(!checked);
    return (
        <View style={styles.container}>
            <Button size="md">Medium</Button>
            <View style={styles.avatarContainer}>
                <Avatar
                    rounded
                    source={{ uri: 'https://randomuser.me/api/portraits/men/41.jpg' }}
                    size="medium"
                />
                <Badge
                    status="success"
                    containerStyle={styles.badge}
                />
            </View>
            <View style={styles.inputContainer}>
                <Input
                    placeholder='INPUT WITH ICON'
                    leftIcon={{ type: 'font-awesome', name: 'chevron-left' }}
                />
            </View>
            <View style={styles.avatarContainer}>
                <Avatar
                    size={52}
                    rounded
                    title="JN"
                    containerStyle={styles.redBackground}
                />
            </View>
            <CheckBox
                checked={checked}
                onPress={toggleCheckbox}
                // Use ThemeProvider to make change for all checkbox
                iconType="material-community"
                checkedIcon="checkbox-marked"
                uncheckedIcon="checkbox-blank-outline"
                checkedColor="red"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    avatarContainer: {
        alignItems: 'center',
    },
    badge: {
        position: 'absolute',
        top: 5,
        left: 40,
    },
    inputContainer: {
        marginTop: 20,
    },
    redBackground: {
        backgroundColor: "red",
    },
});
import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import avatar from '../../../assets/avatar.jpg'

const Logo = () => {
    return (
        <View style={styles.container}>
            <Image
                source={avatar}
                style={styles.roundImage}
            />
            <Text style={{padding: 30, fontWeight: '600'}}>Matheus Araujo</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 100
    },
    roundImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
});

export default Logo;
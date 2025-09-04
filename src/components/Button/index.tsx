import React from 'react';
import { TouchableOpacity, Text, Linking, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Fontisto from '@expo/vector-icons/Fontisto';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';

const Buttons = () => {
    const navigation = useNavigation() as any;

    const goToSkills = () => {
        navigation.navigate('Skills'); // 'Skills' deve ser o nome da sua tela de skills no navigator
    }

    const openLinkedIn = () => {
        Linking.openURL('https://www.linkedin.com/in/matheus-araujo-nascimento');
    }

    const openGithub = () => {
        Linking.openURL('https://github.com/MatheusAraujo110')
    }

    const openEmail = () => {
        Linking.openURL('https://mail.google.com/mail/?view=cm&to=theusnascimento386@gmail.com')
    }


    return (
        <View style={styles.container}>
            <View>
                <TouchableOpacity style={styles.linkedinButton} onPress={openLinkedIn}>
                    <Icon name="linkedin" size={18} color="#fff" />
                    <Text style={styles.text}>LinkedIn</Text>
                </TouchableOpacity>
            </View>

            <View>
                <TouchableOpacity style={styles.githubButton} onPress={openGithub}>
                    <Icon name="github" size={18} color="#fff" />
                    <Text style={styles.text}>Github</Text>
                </TouchableOpacity>
            </View>

            <View>
                <TouchableOpacity style={styles.emailButton} onPress={openEmail}>
                    <Fontisto name="email" size={18} color="#fff" />
                    <Text style={styles.text}>E-mail</Text>
                </TouchableOpacity>
            </View>

            <View>
                <TouchableOpacity style={styles.skillButton} onPress={goToSkills}>
                    <AntDesign name="book" size={18} color="#fff" />
                    <Text style={styles.text}>Skills</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        gap: 15,
    },
    linkedinButton: {
        width: '100%',
        backgroundColor: '#0077B5',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 6,
        gap: 8,
    },
    githubButton: {
        width: '100%',
        backgroundColor: '#02080b',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 6,
        gap: 8,
    },
    emailButton: {
        width: '100%',
        backgroundColor: '#000',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 6,
        gap: 8,
    },
    skillButton: {
        width: '100%',
        backgroundColor: '#7cb00a',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 6,
        gap: 8,
    },
    text: {
        color: '#fff',
        fontSize: 15,
        fontWeight: '600',
    },
});

export default Buttons;
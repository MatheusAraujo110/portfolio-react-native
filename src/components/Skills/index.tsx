import { StyleSheet, Text, View } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';

const Skill = () => {
    // Função para renderizar as estrelas
    const renderStars = (rating: any) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <AntDesign
                    key={i}
                    name={i <= rating ? "star" : "staro"}
                    size={20}
                    color={i <= rating ? "#f6ff00" : "#ccc"}
                />
            );
        }
        return stars;
    };

    return (
        <View style={styles.container}>
            <View style={styles.skillRow}>
                <Text style={styles.skillName}>React:</Text>
                <View style={styles.starsContainer}>
                    {renderStars(5)}
                </View>
            </View>

            <View style={styles.skillRow}>
                <Text style={styles.skillName}>Next:</Text>
                <View style={styles.starsContainer}>
                    {renderStars(4)}
                </View>
            </View>

            <View style={styles.skillRow}>
                <Text style={styles.skillName}>JavaScript:</Text>
                <View style={styles.starsContainer}>
                    {renderStars(4)}
                </View>
            </View>

            <View style={styles.skillRow}>
                <Text style={styles.skillName}>Node.js:</Text>
                <View style={styles.starsContainer}>
                    {renderStars(3)}
                </View>
            </View>

            <View style={styles.skillRow}>
                <Text style={styles.skillName}>Tailwind CSS:</Text>
                <View style={styles.starsContainer}>
                    {renderStars(5)}
                </View>
            </View>

            <View style={styles.skillRow}>
                <Text style={styles.skillName}>Styled-Components:</Text>
                <View style={styles.starsContainer}>
                    {renderStars(4)}
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: 15,
        paddingHorizontal: 20,
    },
    skillRow: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'space-between',
    },
    skillName: {
        fontSize: 16,
        fontWeight: '600',
        minWidth: 100,
    },
    starsContainer: {
        flexDirection: 'row',
        gap: 2,
    },
});

export default Skill;
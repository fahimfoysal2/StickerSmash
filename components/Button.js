import { Pressable, View, Text, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

export default function Button({ label, type }) {

    let buttonStyle = [styles.button];
    let buttonLabelStyle = [];


    switch (type) {
        case 'imagePicker':
            buttonStyle.push(styles.buttonBorder);
            buttonLabelStyle.push(styles.imagePickerButtonLabel);
            break;

        default:
            buttonLabelStyle.push(styles.buttonLabel);
            break;
    }

    return (
        <View style={styles.buttonContainer}>
            <Pressable style={buttonStyle} onPress={()=> alert("Button Pressed!")} >
                {type === 'imagePicker' && <FontAwesome5 name="image" size={18} color="#000" style={styles.buttonIcon} />}
                <Text style={buttonLabelStyle}>{label}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: 320,
        height: 50,
        marginBottom: 10,
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    button: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    buttonLabel: {
        color: '#fff',
        fontSize: 13,
    },
    buttonBorder: {
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#38878f',
        borderRadius: 10,
        backgroundColor: '#c0a899',
    },
    imagePickerButtonLabel: {
        color: '#000',
        fontSize: 16,
    },
    buttonIcon: {
        marginRight: 10,
    },
});
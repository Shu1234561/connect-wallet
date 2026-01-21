
import { router } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import OtpInput from "../components/OtpInput";
import { LogoIcon } from "../constants/icons";

export default function OTP() {
  const isNewUser = true;

  const handleVerify = () => {
    if (isNewUser) {
      router.replace("/register");
    } else {
      router.replace("/dashboard");
    }
  };

    return(
        <SafeAreaView style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Image 
                  source={LogoIcon}
                  style={{width: 178, height: 108 }}
                />
            </View>

            {/* Text */}
            <View style={styles.text}>
                <Text style={styles.textHeader}>OTP Verification</Text>
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</Text>
                <Text style={styles.otpText}>Enter OTP</Text>
            </View>

            <View>
                <OtpInput length={5} onChange={(otp) => console.log(otp)} />
            </View>

            <View style={styles.footer}>
                <TouchableOpacity style={styles.button} onPress={handleVerify}>
                    <Text style={styles.buttonText} >Verify</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingHorizontal: 24,
    },
    header: {
        marginTop: 40,
        alignItems: "center",
    },
    text: {
        marginTop: 40,
        gap:8,
    },
    textHeader:{
        color:"#000921",
        fontSize: 20,
        fontWeight: 600,
    },
    otpText: {
       color:"#000921",
        fontSize: 15,
       fontWeight: 600, 
    },
    footer: {
        marginTop:"auto",
        marginBottom: 24,
    },
    button: {
        height: 50,
        backgroundColor:"#2E237F",
        borderRadius:12,
        justifyContent: "center",
        alignItems:"center"
    },
    buttonText: {
        color:"#FDFDFD",
        fontSize: 16,
        fontWeight: "600"
    }
})
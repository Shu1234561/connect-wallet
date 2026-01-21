import { router } from "expo-router";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LogoIcon } from "../constants/icons";

export default function Register() {
    return(
        <SafeAreaView style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Image 
                  source={LogoIcon}
                  style={{width: 178, height: 108}}
                />
            </View>

            {/* 🧾 Form */}
            {/* Name Field */}
                  <View style={styles.form}>
                    <Text style={styles.label}>Enter Your Name</Text>
                    <TextInput
                      placeholder="Enter here..."
                      style={styles.input}
                    />
                  </View>

                  {/* Email-Id */}
                  <View style={styles.form}>
                    <Text style={styles.label}>Enter Email-ID</Text>
                    <TextInput
                      placeholder="Enter here..."
                      keyboardType="email-address"
                      style={styles.input}
                    />
                  </View>
            
                  {/* 🔘 Button */}
                  <View style={styles.footer}>
                    <TouchableOpacity style={styles.button} onPress={() => router.push("/success-modal")}>
                      <Text style={styles.buttonText}>Submit</Text>
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
        alignItems:"center",
    },
      form: {
    marginTop: 40,
  },

  label: {
    fontSize: 14,
    color: "#000000",
    marginBottom: 8,
    fontWeight: "500",
  },

  input: {
    height: 56,
    borderWidth: 1,
    borderColor: "#D8DADC",
    borderRadius: 8,
    paddingHorizontal: 12,
  },

  footer: {
    marginTop: "auto", // 🔥 pushes button to bottom
    marginBottom: 24,
  },

  button: {
    height: 50,
    backgroundColor: "#2E237F",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    color: "#FDFDFD",
    fontSize: 16,
    fontWeight: "600",
  },
})
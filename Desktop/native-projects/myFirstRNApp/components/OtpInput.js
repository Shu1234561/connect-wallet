import { useRef, useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";

export default function OtpInput({ length = 5, onChange }) {
  const [otp, setOtp] = useState(Array(length).fill(""));
  const inputs = useRef([]);

  const handleChange = (value, index) => {
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    onChange?.(newOtp.join(""));

    if (value && index < length - 1) {
      inputs.current[index + 1].focus();
    }
  };

  const handleBackspace = (e, index) => {
    if (e.nativeEvent.key === "Backspace" && !otp[index] && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  return (
    <View style={styles.container}>
      {otp.map((digit, index) => (
        <TextInput
          key={index}
          ref={(ref) => (inputs.current[index] = ref)}
          value={digit}
          onChangeText={(value) => handleChange(value, index)}
          onKeyPress={(e) => handleBackspace(e, index)}
          keyboardType="number-pad"
          maxLength={1}
          style={styles.box}
          textAlign="center"
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
  },
  box: {
    width: 61,
    height: 56,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#dcdcdc",
    fontSize: 18,
    fontWeight: "600",
    color: "#000",
  },
});

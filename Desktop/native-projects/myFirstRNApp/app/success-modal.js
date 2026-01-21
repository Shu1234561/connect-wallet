import { router } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { RightArrowIcon, SuccessIcon } from "../constants/icons";

export default function SuccessModal() {
    return(
        <SafeAreaView style={styles.container}>
            {/* Image section */}
          <View style={styles.card}>

              {/* SuccessIcon */}
              <Image
                source={SuccessIcon}
                style={styles.icon}
                resizeMode="contain"
              />

          {/* Message */}
          <View style={{display:"flex", alignItems:"center"}}>
            <Text style={styles.title}>
                Congratulation!
            </Text>
            <Text style={styles.subTitle}>
                You have Login Successfully!!
            </Text>
          </View>

          <TouchableOpacity style={styles.action} onPress={() =>  router.replace("/dashboard")}>
            <Text style={styles.actionText}>
                Go To Dashboard 
            </Text>
            <Text>
                <Image
                 source={RightArrowIcon}
                 style={{width:14, height:12}}
                 resizeMode="contain"
                />
            </Text>
          </TouchableOpacity>
        </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"rgba(0,0,0,0.2)",
        paddingHorizontal:24,
    },
    card:{
        width:"100%",
        backgroundColor:"#fff",
        borderRadius:16,
        paddingVertical:32,
        paddingHorizontal:24,
        alignItems:"center",
        elevation:6,  // Android shadow
        shadowColor:"#000", // iOS shadow
        shadowOpacity: 0.15,
        shadowRadius:10,
    },
    icon:{
        width:110,
        height:110,
        marginBottom:20,
    },
    title:{
        fontSize: 32,
        fontWeight:"600",
        marginBottom: 8,
        color:"#001F2B",
    },
    subTitle:{
        fontSize:14,
        color:"#2EAB60",
        marginBottom:24,
        textAlign:"center",
    },
    action:{
        flexDirection:"row",
        alignItems:"center",
        gap:8,
    },
    actionText:{
        fontSize:16,
        fontWeight:"500",
        color:"#133E87",
    },


})
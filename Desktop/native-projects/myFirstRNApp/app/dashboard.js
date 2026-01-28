import { useState } from "react";
import { Image, Modal, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { BarChart } from 'react-native-gifted-charts';
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowIcon, CancelledIcon, DeliveredIcon, DeliveryBoyIcon, ExportIcon, IntransitIcon, LocationIcon, LogoIcon, NotificationIcon, OrderIcon } from "../constants/icons";

const barData = [
  {
    value: 87,
    label: 'Orders',
    frontColor: '#0AA6B7',
    tooltipText: 'Orders Received: 87',
  },
  {
    value: 32,
    frontColor: '#16D3A5',
    tooltipText: 'Orders Dispatched: 32',
  },
];

export default function Dashboard(){
  const [activeCard, setActiveCard] = useState(null);
  const [trackModalVisible, setTrackModalVisible] = useState(false);

    return(
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
             {/* 🔝 Header */}
            <View style={styles.header}>
                <Image
                    source={LogoIcon}
                    style={styles.logo}
                />
              <TouchableOpacity style={styles.bookBtn}>
                <Text style={styles.bookBtnText}>Book Courier</Text>
              </TouchableOpacity>
            </View>

            {/* Body */}
            <View style={styles.body}>

             {/* 🔍 Search */}
             <View style={styles.searchBoxdiv}>
                <View style={styles.searchBox}>
                  <TextInput placeholder="Enter Location..." style={styles.searchInput} />   
                </View>
                  <Image
                       source={NotificationIcon}
                       style={styles.notiIcon}
                   />
                </View>

                {/* Stats Cards */}
                <View style={styles.cardGrid}>
                  <StatCard 
                    title="All Orders" 
                    count="87" icon={OrderIcon} 
                    active={activeCard === "All Orders"} 
                    onPress={() => setActiveCard("All Orders")} 
                  />
                  <StatCard 
                    title="Intransit" 
                    count="33" icon={IntransitIcon} 
                    active={activeCard === "Intransit"}
                    onPress={() => setActiveCard("Intransit")}
                  />
                  <StatCard 
                    title="Cancelled" 
                    count="12" 
                    icon={CancelledIcon} 
                    active={activeCard === "Cancelled"}
                    onPress={() => setActiveCard("Cancelled")}
                  />
                  <StatCard 
                    title="Order Delivered" 
                    count="34" 
                    icon={DeliveredIcon} 
                    active={activeCard === "Order Delivered"}
                    onPress={() => setActiveCard("Order Delivered")}
                  />
                </View>

                {/* Track Order */}
                <View style={styles.trackBox}>
                    <View style={styles.trackFirstBox}>
                      <Image source={LocationIcon} style={styles.locationIcon}/>
                      <View>
                          <Text style={styles.trackTitle}>
                              Track Your{"\n"}Orders
                          </Text>
                          <Text style={styles.trackSub}>
                              Get Real - time status
                          </Text>
                      </View>
                    </View>

                    <View style={styles.trackSecondBox}>
                        <TouchableOpacity 
                          style={styles.trackBtn} 
                          onPress={() => setTrackModalVisible(true)}
                        >
                            <Text style={styles.trackBtnText}>Track</Text>
                            <Image source={ArrowIcon} style={styles.arrowIcon}/>
                        </TouchableOpacity>
                        <Image source={DeliveryBoyIcon} style={styles.dBotIcon}/>
                    </View>
                </View>

                {/* Progress (Placeholder) */}
                <View style={styles.box}>
                  <View style={styles.progressHeader}>
                    <Text style={styles.progressTitle}>Overall Progress</Text>
                    <TouchableOpacity style={styles.exportBox}>
                      <Image source={ExportIcon} style={styles.exportIcon}/>
                      <Text style={styles.exportTitle}>Export</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={{ marginTop: 20 }}>
                    <BarChart
                      data={barData}
                      barWidth={48}
                      spacing={40}
                      // roundedTop
                      hideRules={false}
                      rulesType="solid"
                      rulesColor="#EAEAEA"
                      yAxisThickness={1}
                      xAxisThickness={1}
                      yAxisTextStyle={{ color: '#9CA3AF' }}
                      noOfSections={5}
                      maxValue={100}
                      showTooltip
                      tooltipWidth={160}
                      tooltipHeight={45}
                      tooltipTextStyle={{ color: '#fff', fontSize: 12 }}
                      tooltipContainerStyle={{
                        backgroundColor: '#0F172A',
                        borderRadius: 8,
                      }}
                    />
                  
                    {/* Legend */}
                    <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 16 }}>
                      <Legend color="#0AA6B7" label="Orders Received" />
                      <Legend color="#16D3A5" label="Orders Dispatched" />
                    </View>
                  </View>
                </View>

                {/* 🚚 Delivery Details */}
                <View style={styles.box}>
                  <View style={styles.progressHeader}>
                    <Text style={styles.deliveryTitle}>Delivery Details</Text>
                    <TouchableOpacity>
                      <Text style={styles.viewAll}>View all</Text>
                    </TouchableOpacity>
                  </View>
                  <View >
                    <DeliveryCard status="Transit" />
                    <DeliveryCard status="Delivered" />
                  </View>
                </View>

            </View>
            </ScrollView>

            {/* Tracking Modal */}
            <Modal
              transparent
              animationType="fade"
              visible={trackModalVisible}
              onRequestClose={() => setTrackModalVisible(false)}
            >
              <View style={styles.modalOverlay}>
                <View style={styles.modalBox}>
                  {/* Title */}
                  <Text style={styles.modalTitle}>Track Consignment</Text>
                  <Text style={styles.modalSub}>
                    Enter The E-waybill No. To Track Consignment
                  </Text>
            
                  {/* Input */}
                  <TextInput
                    placeholder="Enter Order ID Or Tracking No......"
                    placeholderTextColor="#F37938"
                    style={styles.modalInput}
                  />
            
                  {/* Track Button */}
                  <TouchableOpacity style={styles.modalTrackBtn}>
                    <Text style={styles.modalTrackText}>Track</Text>
                  </TouchableOpacity>
            
                  {/* Close */}
                  <TouchableOpacity
                    style={styles.modalClose}
                    onPress={() => setTrackModalVisible(false)}
                  >
                    <Text style={styles.modalCloseText}>✕</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>

        </SafeAreaView>
    )
}

/* 🔹 Components */
const StatCard = ({ title, count, icon, active, onPress }) => (
  <TouchableOpacity 
    activeOpacity={0.85} 
    onPress={onPress}
    style={[
      styles.statCard,
      active && styles.statCardActive,
    ]}
  >
    <Image source={icon} />
    <Text style={styles.statTitle}>{title}</Text>
    <Text style={styles.statCount}>{count}</Text>
  </TouchableOpacity>
);

const Legend = ({ color, label }) => (
  <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 10 }}>
    <View
      style={{
        width: 12,
        height: 12,
        backgroundColor: color,
        borderRadius: 3,
        marginRight: 6,
      }}
    />
    <Text style={{ fontSize: 12, color: '#4B5563' }}>{label}</Text>
  </View>
);

const DeliveryCard = ({ status }) => {
  const isDelivered = status === "Delivered";

  return (
    <View style={[styles.deliveryCard]}>
      {/* Row 1 */}
      <View style={styles.rowBetween}>
        <Text style={styles.orderId}>
          Order ID <Text style={styles.orderIdBlue}>#596</Text>
        </Text>
        <Text style={styles.amount}>₹ 500.00</Text>
      </View>

      {/* Row 2 */}
      <Text style={styles.tracking}>
        Tracking : <Text style={styles.trackingBlue}>BC2061146087</Text>
      </Text>

      {/* Row 3 */}
      <View style={styles.rowBetween}>
        <View style={styles.statusRow}>
          <Text style={styles.statusLabel}>Status :</Text>
          <View
            style={[
              styles.statusPill,
              {
                backgroundColor: isDelivered ? "#5BB8342E" : "#E6E8F0",
              },
            ]}
          >
            <Text
              style={[
                styles.statusText,
                { color: isDelivered ? "#267F00" : "#3C4A69" },
              ]}
            >
              {status}
            </Text>
          </View>
        </View>

        <Text style={styles.date}>19 Jan 2026</Text>
      </View>

      {/* Button */}
      <TouchableOpacity style={styles.detailsBtn}>
        <Text style={styles.detailsBtnText}>Visit Details</Text>
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // paddingHorizontal: 20,
  },
  
  body:{
    paddingHorizontal: 19,
    paddingBottom:20,
  },

  header: {
    // marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  
    paddingHorizontal: 19,
    paddingVertical: 10,
    // borderRadius: 14,
    backgroundColor: "#FFFFFF", // 🔴 REQUIRED for shadow
  
    // 👇 BOTTOM-ONLY SHADOW
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 }, // only downward
    shadowOpacity: 0.03,
    shadowRadius: 6,
  
    // Android shadow
    elevation: 8,
  },

  logo: {
    width: 100,
    height: 60,
    resizeMode: "contain",
  },

  bookBtn:{
    backgroundColor:"#FF702B",
    paddingHorizontal:10,
    paddingVertical:8,
    borderRadius:15,
  },

  bookBtnText:{
    fontSize:10,
    fontWeight:"600",
    color:"#FFFFFF"
  },

  searchBox:{
    backgroundColor:"#f4f6f8",
    borderRadius:12,
    paddingHorizontal:12,
    width:"90%",
  },

  searchInput: {
    height: 44,
  },

  searchBoxdiv:{
    marginTop:20,
    flexDirection:"row",
    alignItems:"center",
    gap:17
  },

  notiIcon:{
    width:24,
    height:24
  },

  cardGrid:{
    backgroundColor:"#3A55A6",
    borderRadius:20,
    paddingHorizontal:18,
    paddingVertical:22,
    marginTop:10,
    flexDirection: "row",
    flexWrap:"wrap",
    gap:16,
    alignItems:"center",
    justifyContent:"center"
  },

  statCard:{
    backgroundColor: "#FCFDFF1F",
    width: 152,
    height: 119,
    borderRadius: 14,
    alignItems: "center",
    padding: 9,
    borderWidth: 2,
    borderColor: "transparent",
  },

  statCardActive: {
    borderWidth: 2,
    borderColor: "#F37938",
  
    shadowColor: "#F37938",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.35,
    shadowRadius: 10,
  
    elevation: 10, // Android
  },

  statTitle:{
    color:"#FDFDFD",
    marginTop:7,
  },

  statCount:{
    color:"#F37938",
    fontWeight:"700"
  },

  trackBox:{
    marginTop: 13,  
    paddingHorizontal: 6,
    paddingVertical: 9,
    borderRadius: 4,
    backgroundColor: "#FFFFFF",
    flexDirection:"row",
    
    justifyContent:"space-between",
    gap:12,
  
    // 👇 BOTTOM-ONLY SHADOW
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 9 }, // only downward
    shadowOpacity: 0.03,
    shadowRadius: 6,
  
    // Android shadow
    elevation: 8,
  },

  trackFirstBox:{
    flexDirection:"row",
    gap:12,
  },

  locationIcon:{
    width:24,
    height:33,
  },

  trackTitle:{
    fontSize:24,
    fontWeight:"500",
    color:"#2B2E35"
  },

  trackSub:{
    fontWeight:"300",
    color:"#000921",
    marginTop:8,
  },

  trackBtn:{
    backgroundColor:"#FF702B",
    paddingHorizontal:22,
    paddingVertical:11,
    borderRadius:18,
    width:101,
    flexDirection:"row",
    gap:6,
  },

  arrowIcon:{
    width:19,
    height:17
  },

  trackBtnText:{
    color:"#FFFFFF",
    fontSize:12,
    fontWeight:"600"
  },

  dBotIcon:{
    width:51,
    height:57,
    marginTop:5,
  },

  trackSecondBox:{
    alignItems:"flex-end"
  },

  box:{
    marginTop: 13,  
    paddingHorizontal: 6,
    paddingVertical: 9,
    borderRadius: 4,
    backgroundColor: "#FFFFFF",
    flexDirection:"column",
    
    justifyContent:"space-between",
    gap:12,
  
    // 👇 BOTTOM-ONLY SHADOW
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 9 }, // only downward
    shadowOpacity: 0.03,
    shadowRadius: 6,
  
    // Android shadow
    elevation: 8,
  },

  progressHeader:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    width:"100%"
  },

  progressTitle:{
    color:"#000921",
    fontSize:16,
    fontWeight:"700",
  },

  exportIcon:{
    width:11,
    height:11,
  },

  exportTitle:{
    color:"#0F3659",
    fontSize:12
  },

  exportBox:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center",
    gap:6,
    backgroundColor:"#F16B2033",
    borderColor:"#F37938",
    borderWidth:1,
    borderRadius:25,
    paddingHorizontal:15,
    paddingVertical:4,
  },

  deliveryTitle:{
    color:"#000921",
    fontSize:16,
    fontWeight:"700",
  },

  viewAll:{
    color:"#133E87",
    textDecorationLine: "underline"
  },

  deliveryCard:{
    marginTop: 9,  
    paddingHorizontal: 14,
    paddingVertical: 9,
    borderRadius:16,
    backgroundColor: "#FFFFFF",
    flexDirection:"column",
    
    justifyContent:"space-between",
    gap:12,
  
    // 👇 BOTTOM-ONLY SHADOW
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 9 }, // only downward
    shadowOpacity: 0.03,
    shadowRadius: 6,
  
    // Android shadow
    elevation: 8,
  },

rowBetween: {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
},

orderId: {
  fontSize: 15,
  fontWeight: "500",
  color: "#000921",
},

orderIdBlue: {
  color: "#3A55A6",
  fontWeight: "700",
},

amount: {
  fontSize: 16,
  fontWeight: "700",
  color: "#000921",
},

tracking: {
  marginTop: 8,
  fontSize: 14,
  color: "#000921",
},

trackingBlue: {
  color: "#3A55A6",
  fontWeight: "600",
},

statusRow: {
  flexDirection: "row",
  alignItems: "center",
  gap: 8,
},

statusLabel: {
  fontSize: 16,
  fontWeight: "700",
  color: "#1E3A8A",
},

statusPill: {
  paddingHorizontal: 16,
  paddingVertical: 6,
  borderRadius: 20,
},

statusText: {
  fontSize: 14,
  fontWeight: "600",
},

date: {
  fontSize: 14,
  fontWeight: "600",
  color: "#000921",
},

detailsBtn: {
  marginTop: 14,
  borderWidth: 1.5,
  borderColor: "#F37938",
  paddingVertical: 14,
  borderRadius: 8,
  alignItems: "center",
},

detailsBtnText: {
  color: "#F37938",
  fontSize: 15,
  fontWeight: "700",
},

// Modal styling
modalOverlay: {
  flex: 1,
  backgroundColor: "rgba(0,0,0,0.45)",
  justifyContent: "center",
  alignItems: "center",
},

modalBox: {
  width: "90%",
  backgroundColor: "#FFFFFF",
  borderRadius: 16,
  padding: 20,

  shadowColor: "#000",
  shadowOffset: { width: 0, height: 10 },
  shadowOpacity: 0.25,
  shadowRadius: 20,
  elevation: 15,
},

modalTitle: {
  fontSize: 22,
  fontWeight: "700",
  color: "#F37938",
},

modalSub: {
  marginTop: 8,
  fontSize: 14,
  color: "#2D2D2D",
},

modalInput: {
  marginTop: 18,
  borderWidth: 1.5,
  borderColor: "#F37938",
  borderRadius: 30,
  paddingHorizontal: 18,
  height: 48,
  fontSize: 14,
  color: "#000",
},

modalTrackBtn: {
  marginTop: 24,
  backgroundColor: "#F37938",
  paddingVertical: 14,
  borderRadius: 10,
  alignItems: "center",
  width:85,
  marginHorizontal:"auto",
},

modalTrackText: {
  color: "#FFFFFF",
  fontSize: 16,
  fontWeight: "700",
},

modalClose: {
  position: "absolute",
  top: 10,
  right: 12,
},

modalCloseText: {
  fontSize: 18,
  color: "#000",
},

})
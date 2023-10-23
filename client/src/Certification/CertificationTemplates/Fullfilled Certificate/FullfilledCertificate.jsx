import React from "react";

import { Document, Page, Text, View, Image ,StyleSheet } from "@react-pdf/renderer";
const styles = StyleSheet.create({
    pageBackground: {
      position: 'absolute',
      minWidth: '100%',
      minHeight: '100%',
      display: 'block',
      height: '100%',
      width: '100%',
    },
    page: {
        flexDirection: "row",
        backgroundColor: "#fff",
        width: "100%",
        orientation: "portrait",
      },
      view: {
        width: "100%",
        height: "100%",
        padding: 0,
        backgroundColor: "white",
      },
      text: {
        position: "absolute",
        left: '0px',
        right: '0px',
        marginHorizontal: 'auto',
        textAlign: "center",
        justifyContent: 'center',
      },
  });

const FullfilledCertificate  = ({CertificateData}) =>{
console.log(CertificateData.name)
return(
    <Document>
        <Page
         size="A4"
         orientation="landscape"
         style={styles.page}
         >
        <View
        style={styles.view}
       >
         <Image
            style={{
                height: "99%", width: "99%",
                marginHorizontal: 'auto',
            }}
            src="https://picsum.photos/600/400"
            alt="random image"
           
          /> 
        </View>
       
 <Text  style={{top:"350px", ...styles.text}}>Certificamos que {CertificateData ? CertificateData.name : "...."}</Text>
<Text  style={{top:"450px", ...styles.text }}>participo y culmino con exito el curso de {CertificateData ?  CertificateData.course : undefined} en la plataforma de Certy</Text>

<Text  style={styles.text}>fecha {CertificateData ?  CertificateData.date: undefined}</Text>


</Page>
</Document>
)}


export default FullfilledCertificate
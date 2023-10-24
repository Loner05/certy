import React from "react";
import certificationTemplate from '../../../media/certification_template.jpg'
import OswaldFont from '../../../media/fonts/Oswald-VariableFont_wght.ttf'
import PacificoFont from '../../../media/fonts/Pacifico-Regular.ttf'
import { Document, Page, Text, View, Image ,StyleSheet, Font} from "@react-pdf/renderer";
Font.register({family: 'Pacifico', src: PacificoFont})
Font.register({family: 'Oswald', src: OswaldFont})
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
            src={certificationTemplate}
            alt="random image"
           
          /> 
        </View>
       
 <Text  style={{top:"200px", fontFamily: 'Pacifico',color: '#7dcfb6',fontSize:"60px",...styles.text}}> {CertificateData ? CertificateData.name : "...."}</Text>
<Text  style={{top:"320px",fontFamily: 'Oswald' ,fontSize: '50px',...styles.text }}>{CertificateData ?  CertificateData.course.toUpperCase() : undefined}</Text>

<Text  style={{top:'390px', ...styles.text}}>Aprobado el {CertificateData ?  CertificateData.date: undefined}</Text>


</Page>
</Document>
)}


export default FullfilledCertificate
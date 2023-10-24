import React, { useState } from "react";

import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import FullfilledCertificate from "../CertificationTemplates/Fullfilled Certificate/FullfilledCertificate";
import style from './CertificationWidget.module.css'

const CertificacionWidget = ({certificationInfo}) =>{
const[watchCertificate, setWatchCertificate] = useState(false)
// console.log(certificationInfo.name)
const Buttons = () =>{
    return(
<div>


<button className={style.fullButton}
onClick={()=>{
    setWatchCertificate(!watchCertificate)}}
    >
        {
watchCertificate ? "Ocultar Certificado" : "Ver Certificado"



}
</button>
<PDFDownloadLink
document={<FullfilledCertificate CertificateData={certificationInfo}/>}
filename= "certificado.pdf"
>
<button className={style.emptyButton}>Descargar certificado</button>
</PDFDownloadLink>

</div>)}

return(
<div>

<Buttons/>

{

certificationInfo ? (
<div>

{watchCertificate ?(

<PDFViewer style={{width:'120vh',height:'90vh'}}>
    <FullfilledCertificate CertificateData={certificationInfo}/>
</PDFViewer>


): null}



</div>
): null}



</div>






)}

export default CertificacionWidget
import React, { useState } from "react";

import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import FullfilledCertificate from "../CertificationTemplates/Fullfilled Certificate/FullfilledCertificate";


const CertificacionWidget = ({certificationInfo}) =>{
const[watchCertificate, setWatchCertificate] = useState(false)
// console.log(certificationInfo.name)
const Buttons = () =>{
    return(
<div>


<button 
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
<button>Descargar certificado</button>
</PDFDownloadLink>

</div>)}

return(
<div>

<Buttons/>

{

certificationInfo ? (
<div>

{watchCertificate ?(

<PDFViewer>
    <FullfilledCertificate CertificateData={certificationInfo}/>
</PDFViewer>


): null}



</div>
): null}



</div>






)}

export default CertificacionWidget
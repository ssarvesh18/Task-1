import { useState } from "react";
import styles from '../../../../styles/outputData.module.css'

const OutputData = ()=>{
    const [textData,setTextData] = useState("");
    const [msgId,setMsgId] = useState("");
    const handleSubmit = async(event)=>{
        event.preventDefault();
        
        try{
            const res = await fetch(`http://localhost:3000/api/sharedText/${msgId}`)
            const {data} = await res.json();
            setTextData(data[0].textData);
           
        }catch(error){
            alert("Invalid message Id.");
            setMsgId(""); 
        
        }
        
    }
        
    
    const handleChange = (event)=>{
        event.preventDefault();
        setMsgId(event.target.value)

    }
    return (
        <div >
        <form onSubmit={handleSubmit}>
                <label htmlfor="msgId" className={styles.label}>Enter the message ID to be fetched</label><br/><br/>
                <input
                    type="text"
                    id="msgId"
                    name="msgId"
                    required
                    onChange={handleChange}
                    value = {msgId}
                    className={styles.input}
                    
                /><br/><br/>
                <button type="submit" className={styles.button}>Get data</button><br/><br/>
                <label htmlfor="textData" className={styles.label}>Message :</label><br/><br/>
                <input 
                    value = {textData}
                    type="text"
                    id="textData"
                    name="textData"
                    className={styles.input}
                 /><br/>
                    
            </form>
        </div>
    )
}


export default OutputData;
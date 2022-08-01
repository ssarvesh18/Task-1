import { useState } from "react";
import styles from '../../../../styles/editData.module.css'

const EditData = ()=>{
    const [textData,setTextData] = useState("");
    const [msgId,setMsgId] = useState("");

    const handleSubmit = async(event)=>{
        event.preventDefault();
        const sendData = JSON.stringify({textData : textData});
        
        const res = await fetch(`https://${process.env.VERCEL_URL}/api/sharedText/${msgId}`,{
            method: 'PUT',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            body: sendData
        })

        if(res.status == 200){
            alert("Message successfully edited.");
            setTextData("");
        }
        else{
            alert("Please enter valid message Id");
        }
        
    }
        
    
    const handleChange = (event)=>{
        event.preventDefault();
        setMsgId(event.target.value)

    }
    const handleChangeText = (event)=>{
        event.preventDefault();
        setTextData(event.target.value)

    }

    return (
        <div >
            <form onSubmit={handleSubmit}>
                <label htmlFor="msgId" className={styles.label}>Enter the message ID to be edited</label><br/><br/>
                <input
                    type="text"
                    id="msgId"
                    name="msgId"
                    required
                    onChange={handleChange}
                    value = {msgId}
                    className={styles.input}
                   
                /><br/><br/>
                <label htmlFor="textData" className={styles.label}>Enter edited message :</label><br/><br/>
                <input 
                    type="text"
                    id="textData"
                    name="textData"
                    required
                    onChange={handleChangeText}
                    value = {textData}
                    className={styles.input}
                   
                 /><br/>
                <button type="submit" className={styles.button}>Edit message</button><br/><br/>
            </form>
        </div>
    )

}
export default EditData;
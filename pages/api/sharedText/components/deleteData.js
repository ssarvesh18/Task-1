import { useState } from "react";
import styles from '../../../../styles/deleteData.module.css'

const DeleteData = ()=>{

    const [msgId,setMsgId] = useState("");

    const handleSubmit = async(event)=>{
        event.preventDefault();
        
        const res = await fetch(`http://localhost:3000/api/sharedText/${msgId}`,{
            method: 'Delete',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
        })

        if(res.status == 200){
            alert("Message successfully deleted.");
            setMsgId("");
        }
        else{
            alert("Please enter valid message Id");
        }
        
    }
        
    
    const handleChange = (event)=>{
        event.preventDefault();
        setMsgId(event.target.value)

    }

    return (
        <div >
            <form onSubmit={handleSubmit}>
                <label htmlFor="msgId" className={styles.label}>Enter the message ID to be deleted</label><br/><br/>
                <input
                    type="text"
                    id="msgId"
                    name="msgId"
                    required
                    onChange={handleChange}
                    value = {msgId}
                    className={styles.input}
                    
                /><br/><br/>
                <button type="submit" className={styles.button}>delete message</button><br/><br/>
            </form>
        </div>
    )

}
export default DeleteData;
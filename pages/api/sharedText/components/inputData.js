import styles from '../../../../styles/inputData.module.css'
import { useState } from "react"

const InputData = ()=>{
    const [textData,setTextData] = useState("");

    const handleSubmit = async(event)=>{
        event.preventDefault();
        const sendData = JSON.stringify({textData : textData});
        
        const res = await fetch('http://localhost:3000/api/sharedText/1', {
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            body: sendData
        })
       const {data} = await res.json();
       alert(`The Id for your message is  ${data._id}. Kindly save this to fetch,update or delete your message in the future.`);
        
    }
        
    
    const handleChange = (event)=>{
        event.preventDefault();
        setTextData(event.target.value)

    }
    return (
        <div >
        <form onSubmit={handleSubmit}>
                <label for="textdata" className={styles.label}>Enter Message to be sent</label><br/><br/>
                <input
                    type="text"
                    id="textdata"
                    name="textdata"
                    required
                    minlength="1"
                    maxlength="256"
                    onChange={handleChange}
                    value = {textData}
                    className={styles.input}
                /><br/>
                <button type="submit" className={styles.button}>send</button>
            </form>
        </div>
    )
}

export default InputData;
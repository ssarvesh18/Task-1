import Head from 'next/head'
import Image from 'next/image'

import InputData from './api/sharedText/components/inputData'
import OutputData from './api/sharedText/components/outputData'
import EditData from './api/sharedText/components/editData'
import DeleteData from './api/sharedText/components/deleteData'


export default function Home() {
  return (
    <div className='bg layout'>
      
        <h1>Welcome to shareText</h1> <br></br>
        <InputData></InputData> <br></br>
        <OutputData></OutputData> <br></br>
        <EditData></EditData><br></br>
        <DeleteData></DeleteData><br></br>
    </div>
  )
}


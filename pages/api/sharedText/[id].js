import dbConnect from '../../../utils/dbConnect'
import TextData from '../../../models/TextData'


dbConnect();

export default async (req,res)=>{
    

    const{ query :{id} ,method  } =  req;
    
    switch(method){
        
        case 'GET':
            try{

                const text = await TextData.find({_id:id});

                console.log(`text value ${text}`)
                
                if(!text){
                    res.status(400).json({success:false})
                }
                return res.status(200).json({success:true,data:text})
            }catch(error){
                res.status(400).json({success:false})
            }
            break;

        case 'PUT':
            try{
               
                const text = await TextData.findOneAndUpdate({_id:id},{$set:{textData : req.body.textData}},{new:true});
                if(!text){
                     res.status(400).json({success:false})
                }
                 res.status(200).json({success:true,data:text})
            }catch(error){
                 res.status(400).json({success:false})
            }
            break;

        case 'DELETE':
            try{
                const text = await TextData.deleteOne({_id:id});
               
                if(!text.deletedCount){
                    return res.status(400).json({success:false})
                }
                return res.status(200).json({success:true,data:text})
            }catch(error){
                return res.status(400).json({success:false})
            }
            break;
            
        case 'POST':
            
            try{
                
                const text = await TextData.create(req.body);
                res.status(201).json({success:true,data:text})
            }catch(error){
                console.log("failed to create here");
                 res.status(400).json({success:false})
            }
            break;

        default:
            return res.status(400).json({success:false})
            
    }

}
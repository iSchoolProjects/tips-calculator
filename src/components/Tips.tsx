import CustomTip from "./Input/CustomTip"
import '../css/tips.css'
export default function Tips({tipButtons, customTip, handleChange}:any){

    

    return(<div className="tips-container">
             <p>Select Tip %</p>
             <div className="buttons-container">
              {tipButtons}
              <CustomTip customTip={customTip} handleChange={handleChange} />
       
             </div>
            </div>)
}
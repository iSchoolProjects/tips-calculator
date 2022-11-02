import Bill from "./Input/Bill"
import Tips from "./Tips"
import NumberOfPeople from "./Input/NumberOfPeople"
export default function TipsContainer({data,handleChange, handleClick, tipButtons}:any){

    

return(<div className="tip-container">
                <Bill bill={data.billAmount} handleChange={handleChange}/>
                <Tips customTip={data.customTip} handleChange={handleChange} tipButtons={tipButtons} handleClick={handleClick}/>
                <NumberOfPeople people={data.numberOfPeople} handleChange={handleChange}/>
              
    </div>)
}
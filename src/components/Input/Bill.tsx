import '../../css/bill.css'

export default function Bill({bill,handleChange}:any){


    return(<div className="bill-container">
             <p>Bill</p>
             <input name="billAmount" type="number" className='bill-icon' placeholder="0" required value={bill} onChange={handleChange} min="1"/>
             <p></p>
           </div>)
}
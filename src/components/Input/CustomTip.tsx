

export default function CustomTip({handleChange}:any){

     
    return(<input className="custom-tip" name='customTip' type='number' min='1' max='90' placeholder="Custom"  onChange={handleChange}>

             
          </input>)
} 
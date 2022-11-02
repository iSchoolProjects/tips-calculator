import TipsContainer from './TipsContainer'
import ResultContainer from './ResultContainer'
import '../css/calculatorTipsContainer.css'
import { useEffect, useState } from 'react'
export default function CalculatorTipsContainer(){

  const tips = 
    [
      {
        id:1,
        amount:5,
      },
      {
        id:2,
        amount:10,
      },
      {
        id:3,
        amount:15,
      },
      {
        id:4,
        amount:25,
      },
      {
        id:5,
        amount:50,
      },
    ]

    
    

  let [tip,setTip]=useState(0)
  
  const tipButtons = tips.map(tip=><button name='customTip' onClick={handleChange} value={tip.amount} className="tip-btn" key={tip.id}>{`${tip.amount} %`}</button>)
  const [totalPerPerson, setTotalPerPerson] = useState(0)
  const [tipAmountPerPerson, setTipAmountPerPerson] = useState(0) 
  const [data, setData] = useState(
    {
      billAmount: 0,
      customTip: 0,
      numberOfPeople:0,
    }
    )

   const tipElement:any = tips.filter((tip, id)=>tip.id===id ? tip.amount : "")

   
   
   function handleChange(e:any){
     const {name,value} = e.target
     setData(prevData=>(
       {...prevData,
         [name]: +value
       }
       ))
       
     }

     function resetData (){
      setData((
        {
          billAmount: 0,
          customTip: 0,
          numberOfPeople:0,
          
        }
      )
      )
      setTipAmountPerPerson(0)
      setTotalPerPerson(0)
     }
     
     function handleClick(id:number){
      setTip(id===tipElement.id ? tip=tipElement.amount: tip)
     }
     

    useEffect(()=>{
        if(
          !!data.billAmount && !!data.customTip && !!data.numberOfPeople
        ) {

          setTotalPerPerson(+((data.billAmount + (data.billAmount * data.customTip/100))/data.numberOfPeople).toFixed(2))
          setTipAmountPerPerson(+((data.billAmount * data.customTip/100)/data.numberOfPeople).toFixed(2))
        }
       
      
    }, [data])
  
   
    

     
    

    return (<div className='calculator-tips-container'>
              <TipsContainer data={data} handleChange={handleChange} tipButtons={tipButtons} handleClick={handleClick} />
              <ResultContainer totalPerPerson={totalPerPerson} tipAmountPerPerson={tipAmountPerPerson} resetData={resetData} />
            </div>)
}
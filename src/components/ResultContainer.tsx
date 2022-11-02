import '../css/resultContainer.css'
export default function ResultContainer({totalPerPerson,tipAmountPerPerson,resetData }:any){
     

    return(<div className="result-container">
              
              <div className='tip-amount'>
                <div>
                 <p>Tip Amount</p>
                 <p>/person</p>
                </div>
                <div>{`$ ${tipAmountPerPerson}`}</div>
              </div>

              <div className='total'>
                <div>
                 <p>Total</p>
                 <p>/person</p>
                </div>
                <div>{`$ ${totalPerPerson}`}</div>
              </div>
            <div className='btn-container'>

              <button className='reset' onClick={resetData}>RESET</button>
            </div>
           </div>)
}
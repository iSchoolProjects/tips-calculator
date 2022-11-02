export default function NummerOfPeople({people, handleChange}:any){

return(<div className="number-of-people">
           <p>Number of people</p>
           <input className="people-icon" name="numberOfPeople" type="number" placeholder="0" required value={people} onChange={handleChange} />
           </div>)
}
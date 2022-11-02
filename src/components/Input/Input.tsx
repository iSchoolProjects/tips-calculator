export interface IInput {
    name:string,
    value:number,
    type:string,
    placeholder:string,
    handleChange?: React.ChangeEventHandler<HTMLInputElement>;
    min?:number,
    max?:number,
    required?: boolean;

}

export interface IData {
        billAmount:number,
        customTip:number,
        numberOfPeople:number,
 
     
}

export default function Input({handleChange, name, value}: IInput) {
       return <input name={name} onChange={handleChange} value={value} />
}


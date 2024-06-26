
import { useSetRecoilState, useRecoilState } from "recoil";
import { textState } from '../atom/globalState'
import { useState } from "react";
import { Loading } from "../atom/loading";



export function InputBox() {
  const [input, setInput] = useState("")

  

  const [_, setText] = useRecoilState(textState);
  const setLoading = useSetRecoilState(Loading);

  const handleChange = (event: any) => {
    setInput(event.target.value);
  };

  const handleSubmit = () => {
    setText(input)
  }

  const handleClick = (event: any) => {
    if (event.key == "Enter") {
      handleSubmit()
      setLoading(true)
    }
  }

  return <div className=''>
    <div className="relative">
      <input type="text" className='outline-none p-3 w-full text-left' onKeyDown={handleClick} onChange={handleChange} placeholder='Search your city..' />
    </div>
  </div>

}

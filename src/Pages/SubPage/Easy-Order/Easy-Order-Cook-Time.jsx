import React, { useState} from "react";
import CookTimes from "../../../assets/dataArrays/Cook-Times-Array";
import { useEasyOrderRenderStore } from "../../../state-store/RenderStore";
import { useEasyOrderStoreActions } from "../../../state-store/easyOrderStore";


const EasyOrderCookTime = () => {    
    const { setCookTime } = useEasyOrderStoreActions()
    const [isButtonDisabled, setIsButtonDisabled] = useState(false)
    const increaseStep = useEasyOrderRenderStore((state) => state.increaseStep);
    const [isChecked, setIsChecked] = useState(false)
    const [checkedItem, setCheckedItem] = useState("")
    
    const handleChange = (itemName) => {
      setIsChecked(itemName)
      setCheckedItem(itemName)
      setIsButtonDisabled(true)
      console.log(itemName);
  };
    
    const handleClick = () => {
    setCookTime(checkedItem);
      increaseStep();
      setIsButtonDisabled(false);
  }


    return (
        <>
            <h1>Cook Time</h1>
            <ul className="easy-order-list">
                        {CookTimes.map((item) => (
                            <li key={item.id}>
                                <label>
                                  <input
                                    type="radio"
                                    value={item.name}
                                    checked={isChecked === item.name} // This controls the checked state
                                    onChange={() => handleChange(item.name)} // Handle changes
                                  />
                                  {item.name}
                                </label>
                            </li>
                        ))}
                    </ul>
        {isButtonDisabled ? <button className="easy-order-make-selection-btn" onClick={handleClick}
      >Make Selection
    </button>:""}
  </>
    )
}
export default EasyOrderCookTime;
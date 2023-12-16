import React from 'react'
import { useState } from 'react';
import RangeSlider from "react-range-slider-input";


export default function Range(props) {
  const [values, setValue] = useState([0,5000]);
 



  return <>

<h6 className='pt-2'>{parseInt(values[0])} LE - {parseInt(values[1])} LE</h6>
  <div className="div">

  <RangeSlider
  onInput={setValue}
        id="range-slider-ab"
        className="margin-lg"
        step={"any"}
        rangeSlideDisabled={true}
        max={10000}
        defaultValue={[0, 5000]}
/>
  </div>
  </>
}

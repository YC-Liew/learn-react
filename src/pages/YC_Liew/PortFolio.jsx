import React, { useState, useEffect } from 'react';
import "./PortFolio.scss"
import BasePage from "../basePage/basePage";
import Profile from "./personalPicture.jpg"

function PortFolio() {

  const [items, setItems] = useState([]);
  const [test, setTest] = useState(false);
  const [show, setShow] = useState(true);
  const [input1 , setInput1] = useState();
  const [input2 , setInput2] = useState();
  const [input3 , setInput3] = useState();
  const [input4 , setInput4] = useState();
//   const [details, setDetails] = useState([{
//       name: "Liew Yih Chan",age:"18",gender:"Male",location: "No.39 , Jalan Teratai 2/2 , Taman Bukit Teratai , Selangor",contact:"017-2112912"
//   }])

  const HideAndShow = () => {
      setTest(!test);
  }
const StoreDetails = () => {
    setTest(true)
    if(document.getElementById("input1").value == '' || document.getElementById("input2").value == '' || document.getElementById("input3").value == '' || document.getElementById("input4").value == '')
    { 
      alert('Cannot Empty')  
    }   
    else{
        setInput1(document.getElementById("input1").value)
        setInput2(document.getElementById("input2").value)
        setInput3(document.getElementById("input3").value)
        setInput4(document.getElementById("input4").value)
    }
}

console.log(input1)
console.log(input2)
console.log(input3)
console.log(input4)
  return (
                <>
                    <BasePage title={"Liew Yih Chan"}>
                        <div className="content">
                            <img src={Profile} className="picture"></img>
                            <div className="header">SNSoft Developer</div>
                            <div className="MainContent">
                                {/* {details.map(item => (
                                    <div key={item.name}>
                                    <div>Name : <span style={{visibility: test ? 'visible' : 'hidden'}}>{item.name}</span></div>
                                    <div>Age : <span style={{opacity: test ? 1 : 0}}>{item.age}</span></div>
                                    <div>Gender : <span style={{display: test ? 'inline-block' : 'none'}}>{item.gender}</span></div>
                                    <div>Location : <span>{test ? `${item.location}`: ''}</span></div>
                                    <div>Contact : <span >{test ? `${item.contact}` : ''}</span></div>
                                    </div>
                                    asdasdsd
                                ))} */}
                                <div>
                                <div>Name : <input placeholder="Liew Yih Chan" id="input1"></input></div>
                                <div>Age : <input placeholder="23" id="input2"></input></div>
                                <div>Gender : <input placeholder="Male" id="input3"></input></div>
                                <div>Location : <input placeholder="Ampang" id="input4"></input></div>
                                </div>
                            </div>
                            <div className="About">About Me</div>
                            <div className="MainContent">
                            <div>Name : <span >{test ? `${input1}` : ''}</span></div>
                            <div>Age : <span >{test ? `${input2}` : ''}</span></div>
                            <div>Gender : <span>{test ? `${input3}` : ''}</span></div>
                            <div>Location : <span>{test ? `${input4}` : ''}</span></div>
            
                            </div>
                            {/* <div className="paragrah">
                                {test ? 'I am study in TARUC (Tunku Abdul Rahman College) bachelor degree in Software Developer. I have learn before C# , Java , SQL , html & css and soon. I am a student who are enjoy to design a web and coding. My hobby is swimming.': ''}
                            </div> */}
                        <div className="button-div">
                            <button type="submit" className="button" onClick={StoreDetails}>Submit</button>
                            <button type="submit" className="button" onClick={HideAndShow}>Hide Show</button>
                        </div>
                        </div>
                    </BasePage>
    
                </>
            );
}
export default PortFolio;


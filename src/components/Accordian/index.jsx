import { useState } from "react";
import data from "./data";

const Accordian = () => {
    
    const [selected, setSelected] = useState(null);

    function handlesingleselection(getCurrentId){
        setSelected(getCurrentId === selected ? null : getCurrentId)
    }
    
    console.log(selected)
    return (
        <div className="wrapper">
            <div className="accordian">
                {
                    data && data.length > 0 ?
                        data.map(dataItem => (
                            <div className="item" key={dataItem.id}>
                                <div onClick={()=>handlesingleselection(dataItem.id)} className="title">
                                    <h3>{dataItem.question}</h3>
                                    <span>+</span>
                                        {
                                            selected == dataItem.id ?(
                                                <div className="content"> {dataItem.answer} </div>
                                            ) : null }
                                </div>
                            </div>
                        ))
                        : <div>No data found !</div>
                }
            </div>
        </div>
    );
};

export default Accordian;
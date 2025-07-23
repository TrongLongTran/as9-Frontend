import { HashLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";
export default function NoResult({from, to, hide}) {
    let navigation = useNavigate();
    let theFinalText = ""
    if(from.length==0 && to.length!=0){
        theFinalText = `No result to ${to}`
    } else if(to.length==0 && from.length!=0){
        theFinalText =  `No result from ${from}`
    } else if(from.length==0 && to.length==0){
        theFinalText = `No result`
    }else{
        theFinalText = `No result from ${from} to ${to}`
    }

    function setBackHome(e){
        e.preventDefault();
        navigation("/")
    }

    return(
        <div>
            <div className="spinner" hidden={!hide}>
                <HashLoader 
                size={50}
                color="#000000"
                />
            </div>
            <div className="noData" hidden={hide}>
                <button onClick={setBackHome}>Back to home page</button>
                <h2>No result</h2>
                <p>{theFinalText}</p>
            </div>
        </div>
    )
}
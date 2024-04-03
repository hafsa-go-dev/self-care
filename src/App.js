import Mind from "./Mind";
import Body from "./Body";
import Soul from "./Soul";
import MindContainer from "./MindContainer";
import BodyContainer from "./BodyContainer";
import SoulContainer from "./SoulContainer";
import {useState} from "react";

export default function App() {

    const [aspect, setAspect] = useState(null);

    return <div className="app">
        <div className="app-header">
            <h1><em>What part of you is in need of care right now?</em></h1>
        </div>
        <div className="app-content">
            <Mind id={"mind"} aspect={aspect} setAspect={setAspect}/>
            <Body id={"body"} aspect={aspect} setAspect={setAspect}/>
            <Soul id={"soul"} aspect={aspect} setAspect={setAspect}/>
        </div>
        {aspect !== null ?
            <div className="app-elaborate">
                {aspect === "mind" && <MindContainer/>}
                {aspect === "body" && <BodyContainer/>}
                {aspect === "soul" && <SoulContainer/>}
            </div>
            :
            <></>
        }
    </div>;
}
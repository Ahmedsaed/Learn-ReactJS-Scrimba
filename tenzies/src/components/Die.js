import React from "react"
import './Die.css'

export default function Die(props) {
    const Pip = () => <span className="pip" />;
    
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }
    
    const Face = ({ children }) => <div style={styles} className="die-face" onClick={props.holdDice}>{children}</div>;
    
    let pips = Number.isInteger(props.value)
        ? Array(props.value)
                .fill(0)
                .map((_, i) => <Pip key={i} />)
        : null;
        
        
    return <Face>{pips}</Face>;
}
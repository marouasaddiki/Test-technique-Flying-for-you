import { useState } from "react"
import { useNavigate } from 'react-router-dom';

const HomepageContainer = () => {
    const [youShouldNotPass, setYouShouldNotPass] = useState("NOPE")
    const [tryAgain, setTryAgain] = useState(false)
    // useNavigate to go to the next page
    const Navigate = useNavigate();
    const mellon = () => {
        if (youShouldNotPass === "NOPE") {
            setTryAgain(true)

            let text;
            let person = prompt("Tu ne pensais pas que ce serait si simple ?", "Entrez votre nom");
            if (person == null || person == "") {
                text = "User cancelled the prompt.";
            } else {
                text = "Hello " + person + "! How are you today?";
            }
            alert('je rigole')
            Navigate('/login');
        }
    }


    return (
        <div style={{ display: "flex", flex: 1, height: "100vh", justifyContent: "center", background: '#FFF5EE' }}>
            <div style={{ alignSelf: "center", justifyContent: "center", textAlign: "center" }}>
                <div style={{ marginBottom: 70, fontSize: 30 }}>Résultat de test technique</div>
                <button style={{ backgroundColor: "#60EED2", border: "none", padding: "10px 30px", borderRadius: 20, cursor: "pointer" }} onClick={() => mellon()}>{tryAgain ? "Connecte moi ! (page login)" : "Commencer le test"}</button>
                {tryAgain && <div>Tu ne pensais pas que ce serait si simple ? ...</div>}
            </div>
        </div>
    )
}

export default HomepageContainer
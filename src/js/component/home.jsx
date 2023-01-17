import React, {useState} from "react";

const Home = () => {

    const [red, setRed] = useState("");
    const [yellow, setYellow] = useState("");
    const [green, setGreen] = useState("");

    function turnRed() {
        if (red === "redOn") {
            setRed("")
        } else {
            setRed("redOn");
            setYellow("");
            setGreen("");
        }
    }

    function turnYellow() {
        if (yellow === "yellowOn") {
            setYellow("")
        } else {
            setYellow("yellowOn")
            setRed("")
            setGreen("")
        }
    }

    function turnGreen() {
        if (green === "greenOn") {
            setGreen("")
        } else {
            setGreen("greenOn")
            setRed("")
            setYellow("")
        }
    }

    return (
        <div className="text-center d-flex flex-column trafficlight rounded-0">
            <button className={
                    "red " + red
                }
                onClick={turnRed}></button>
            <button className={
                    "yellow " + yellow
                }
                onClick={turnYellow}></button>
            <button className={
                    "green " + green
                }
                onClick={turnGreen}></button>
        </div>
    );

};

export default Home;

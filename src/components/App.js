import React, { Component, useState } from "react";
import "../styles/App.css";

const App = () => {
    const [firstName, setFirstName] = useState("");
    const [secondName, setSecondName] = useState("");
    const [result, setResult] = useState("");

    let flamesArray = ["Siblings", "Friends", "Love", "Affection", "Marriage", "Enemy", "Please Enter valid input"];
    const firstNameInput = (e) => {
        setFirstName(e.target.value);
    };
    const secondNameInput = (e) => {
        setSecondName(e.target.value);
    };
    const startFlame = () => {
        let fname = firstName.toLowerCase();
        let sname = secondName.toLowerCase();
        if (!fname || !sname) {
            setResult(flamesArray[7]);
            return;
        }
        let arr1 = fname.split("");
        let arr2 = sname.split("");
        for (let i = 0; i < arr1.length; i++) {
            for (let j = 0; j < arr2.length; j++) {
                if (arr1[i] === arr2[j]) {
                    arr1[i] = "0";
                    arr2[j] = "0";
                }
            }
        }
        let resultString = arr1.concat(arr2).toString().replaceAll("0", "").replaceAll(/,/gi, "");
        console.log(resultString);
        let finalResult = flamesArray[Math.floor(resultString.length % 6)];
        console.log(finalResult);
        setResult(finalResult);
    };
    const clearFlame = () => {
        setFirstName("");
        setSecondName("");
        setResult("");
    };
    return (
        <div id="main">
            {/* Do not remove the main div */}
            <label htmlFor="firstName">
                {"First Name "}
                <input data-testid="input1" onChange={firstNameInput} type="text" name="firstName" id="firstName" value={firstName} />
            </label>
            <label htmlFor="secondName">
                {"Second Name "}
                <input data-testid="input2" onChange={secondNameInput} type="text" name="secondName" id="secondName" value={secondName} />
            </label>
            <button data-testid="calculate_relationship" onClick={startFlame}>
                {"Calculate Relationship Future"}
            </button>
            <button data-testid="clear" onClick={clearFlame}>
                {"Clear inputs and relationship status"}
            </button>
            <h3 data-testid="answer">{result}</h3>
        </div>
    );
};

export default App;

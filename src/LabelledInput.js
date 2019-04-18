import React, { Component, useState } from 'react';

function LabelledInput(props) {
    const [nameState, setName] = useState("");

    return (
            <label>
                {props.labelName}:
                <input onChange={event => setName(event.target.value)} type="text" name="name" />
            </label>
    );
}

export default LabelledInput;
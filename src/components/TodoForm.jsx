import React, { useEffect, useState, useRef } from "react";

export const TodoForm = (props) => {
    return (
        <>       
            <input placeholder="TODO" value={props["input"]} />
        </>
    );
}
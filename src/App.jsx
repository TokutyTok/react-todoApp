import React, { useEffect, useState, useRef } from "react";
import {TodoForm} from './components/TodoForm';
import {Button} from './components/Button';
import { getData } from './service/getData.jsx'

export const App = () => {
    const data = getData();
    return (
        <>

            <TodoForm input = {data}/>

            <div>
                <ul>
                <li>a</li>
                <li>b</li>
                <li>c</li>
                </ul>
            </div>
            <div>
                <Button end="end"/>
                <Button delete="delete"/>
            </div>
        </>
        );
}
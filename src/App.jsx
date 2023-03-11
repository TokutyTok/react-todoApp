import React, { useEffect, useState, useRef } from "react";
import {TodoForm} from './components/TodoForm';
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
                <button>完了</button>
                <button>削除</button>
            </div>
        </>
        );
}
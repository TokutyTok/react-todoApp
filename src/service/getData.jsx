import { useState } from "react";
import axios from "axios";

export const getData = () => {
    const [data, setData] = useState();
        axios.get('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json', () => {
    })
    .then((r) => {
        setData(r.data.squadName);
    });
    return data;
}

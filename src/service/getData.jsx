import { useState } from "react";
import { instance } from "../service/axios";

export const getData = () => {
    const [data, setData] = useState();
        instance.get('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json', () => {
    })
    .then((r) => {
        setData(r.data.squadName);
        console.log('data');
    });
    return data;
}

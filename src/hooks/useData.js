import { useEffect, useState } from "react";
import { getApiData } from "../request";

export default function UseData() {
    const [data, setData] = useState(null);
    useEffect(() => {
        getApiData().then(res => setData(res));
    }, []);
    return data;
}
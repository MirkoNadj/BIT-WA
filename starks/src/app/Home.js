import React from "react";
import { getData } from "../services/service";

const Home = () => {
    const[data, setData]=useState([]);
    const[headers, setHeaders]=useState([]);

    async function initData() {
        let dataResult = await getData('studentsgrade');
        if(dataResult!=null && dataResult.body!=null && dataResult.body.length>0) {
            let intersection = data
        }
    }
    return <div>Home</div>
}
export default Home;

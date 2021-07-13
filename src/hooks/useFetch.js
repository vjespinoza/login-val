import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = () => {
    const [GET_Data, setGET_Data] = useState({});
    const [POST_Data, setPOST_Data] = useState({});

    const api = axios.create({
        baseURL: "https://reqres.in/api/users",
    });

    const GET_Request = async () => {
        let request = await api.get();
        let response = request.data.data;
        setGET_Data(response);
    };

    const POST_Request = async () => {
        let request = await api.post("/users", {
            email: "poporot@reqres.in",
            password: "cityslicka",
        });
        let response = request.data;
        setPOST_Data(response);
    };

    useEffect(() => {
        GET_Request();
        POST_Request();
    }, []);

    return { GET_Data, POST_Data };
};

export default useFetch;

import { useState, useEffect } from "react";
//Import utility funtions
import { validate } from "../utils/validate";
import { errorMessage, successMessage } from "../utils/createModal";
import { fetchLogin } from "../utils/fetchLogin";

const useFormValidate = () => {
    const [data, setData] = useState({
        form: "",
        name: "",
        email: "",
        password: "",
        password2: "",
    });

    const [error, setError] = useState({});

    const [isValidated, setIsValidated] = useState(false);

    const [isLogged, setIsLogged] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value,
        });
    };

    const handleSubmnit = (e) => {
        e.preventDefault();
        setError(validate(data, setIsValidated));
    };

    const handleClick = (e) => {
        const { btn } = e.target.dataset;
        setData({
            ...data,
            form: btn,
        });
    };

    useEffect(() => {
        if (Object.values(error).length > 0) {
            errorMessage(error);
        } else if (Object.values(error).length === 0) {
            fetchLogin(data, isValidated, setIsLogged);
            successMessage(data, isValidated, isLogged);
        }
    }, [error, isLogged]);

    return { data, error, isLogged, handleChange, handleSubmnit, handleClick };
};

export default useFormValidate;

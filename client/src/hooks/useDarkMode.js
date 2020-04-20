import {useLocalStorage} from "./useLocalStorage";
import React, {useEffect} from "react";

export const useDarkMode = (key, initialValues, cb) => {
    const [darkMode, setDarkMode] = useLocalStorage([key], initialValues);

    useEffect(()=> {
        if (darkMode === true) {
            document.body.classList.add("dark-mode");
        } else {
            document.body.classList.remove("dark-mode");
        }
    }, [darkMode]);
    
    return [darkMode, setDarkMode];
};
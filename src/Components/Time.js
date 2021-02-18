import React, { useState, useEffect } from "react";

export default () => {
    const [time, setTime] = useState(new Date());

    const setCurrent = () => {
        setInterval(() => {
            setTime(new Date());
        }, 1000);
    }

    useEffect(() => {
        setCurrent();
    }, [])


    const month = time.getMonth() + 1;
    const date = time.getDate();
    let day = time.getDay();
    const hour = time.getHours();
    const minutes = time.getMinutes();


    switch (day) {
        case 0:
            day = "일";
            break;
        case 1:
            day = "월";
            break;
        case 2:
            day = "화";
            break;
        case 3:
            day = "수";
            break;
        case 4:
            day = "목";
            break;
        case 5:
            day = "금";
            break;
        case 6:
            day = "토";
            break;
    }

    return (
        <>
            <div>{`${day}요일` }</div>
            <div>{`${month}/${date}`}</div>
            <div>{`${hour < 10 ? `0${hour}` : hour}:${minutes < 10 ? `0${minutes}` : minutes}` }</div>
        </>
    )
}
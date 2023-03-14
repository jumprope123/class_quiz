import React from "react";
import { Rate } from "antd";
import { useState } from "react";

export default function index() {
    const [starRate, setStarRate] = useState(1);

    const handleChange = (rateNumber: number) => {
        setStarRate(rateNumber);
        alert(rateNumber);
    };

    return (
        <>
            <Rate allowHalf value={starRate} onChange={handleChange} />
        </>
    );
}

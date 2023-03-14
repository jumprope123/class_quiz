import styled from "@emotion/styled";
import { Calendar } from "antd";
import type { Dayjs } from "dayjs";
import { useState } from "react";

export default function index() {
    const [date, setDate] = useState<Dayjs>();

    const onSelect = (date: Dayjs) => {
        console.log(date);
        console.log(date.format("YYYY-MM-DD"));
        setDate(date);
    };

    return (
        <Wrapper>
            <Calendar fullscreen={false} onSelect={onSelect} value={date} />
            <div>{date?.format("YYYY-MM-DD")}</div>
            <div>{date?.format("MM")}</div>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 300px;
`;

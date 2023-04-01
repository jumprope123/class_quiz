import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { Fragment, MouseEvent, useState } from "react";
import { IQuery } from "../../../src/commons/types/generated/types";

const FETCH_BOARDS = gql`
    query fetchBoards($page: Int) {
        fetchBoards(page: $page) {
            number
            writer
            title
        }
    }
`;

const FETCH_BOARDS_COUNT = gql`
    query fetchBoardsCount {
        fetchBoardsCount
    }
`;

export default function index() {
    const { data, refetch } = useQuery<Pick<IQuery, "fetchBoards">>(FETCH_BOARDS);
    const { data: dataBoardsCount } = useQuery<Pick<IQuery, "fetchBoardsCount">>(FETCH_BOARDS_COUNT);
    const lastPage = dataBoardsCount != null ? Math.ceil(dataBoardsCount.fetchBoardsCount / 10) : 0;
    const [startPage, setStartPage] = useState(1);
    const onClickPagenation = (event: MouseEvent<HTMLSpanElement>) => {
        setNowPage(Number(event.currentTarget.id));
        void refetch({ page: Number(event.currentTarget.id) });
    };
    const [nowPage, setNowPage] = useState(1);
    const onClickPrevPage = () => {
        if (startPage === 1) return;
        setStartPage((prev) => prev - 10);
        setNowPage(startPage - 10);
        void refetch({ page: startPage - 10 });
    };
    const onClickNextPage = () => {
        if (startPage + 10 <= lastPage) {
            setStartPage((prev) => prev + 10);
            setNowPage(startPage + 10);
            void refetch({ page: startPage + 10 });
        }
    };
    return (
        <>
            {data?.fetchBoards?.map((item) => (
                <Fragment>
                    <table key={item.number}>
                        <tbody>
                            <tr>
                                <th>넘버</th>
                                <td>{item.number}</td>
                                <th>글쓴이</th>
                                <td>{item.writer}</td>
                                <th>타이틀</th>
                                <td>{item.title}</td>
                            </tr>
                        </tbody>
                    </table>
                </Fragment>
            ))}
            <ChagePageSpan onClick={onClickPrevPage} colorGreen={startPage === 1 ? false : true}>
                이전페이지
            </ChagePageSpan>
            {new Array(10).fill(1).map(
                (_, index) =>
                    index + startPage <= lastPage && (
                        <SpanColor
                            id={(index + startPage).toString()}
                            onClick={onClickPagenation}
                            key={index + startPage}
                            colorRed={index + startPage === nowPage ? true : false}
                        >
                            {" "}
                            {index + startPage}{" "}
                        </SpanColor>
                    )
            )}
            <ChagePageSpan onClick={onClickNextPage} colorGreen={startPage + 10 <= lastPage ? true : false}>
                이후페이지
            </ChagePageSpan>
        </>
    );
}

const SpanColor = styled.span`
    color: ${(props: ISpanColor) => (props.colorRed ? "red" : "black")};
`;

const ChagePageSpan = styled.span`
    color: ${(props: IChagePageSpan) => (props.colorGreen ? "green" : "gray")};
`;

interface ISpanColor {
    colorRed: boolean;
}

interface IChagePageSpan {
    colorGreen: boolean;
}

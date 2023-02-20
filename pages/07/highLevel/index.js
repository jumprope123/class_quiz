import styled from "@emotion/styled";
import { useState } from "react";

const dataList = [
  {
    id: 1,
    data: "9월달 시스템 점검 안내입니다.",
    date: "2020.09.19",
  },
  {
    id: 2,
    data: "안녕하세요! 공지사항 전달드립니다.",
    date: "2020.09.17",
  },
  {
    id: 3,
    data: "개인정보 처리방침 변경 사전 안내",
    date: "2020.09.12",
  },
  {
    id: 4,
    data: "ios 10.0이하 지원 중단 안내",
    date: "2020.08.10",
  },
  {
    id: 5,
    data: "이용약관 변경 사전 안내",
    date: "2020.08.01",
  },
  {
    id: 6,
    data: "개인정보 처리방침 변경 사전 안내",
    date: "2020.07.19",
  },
];

export default function index() {
  const [clickedDataList, setClickedDataList] = useState([]);

  const onClickCheck = (list) => {
    //id값이 있나 확인해서 있으면 빼고 없으면 추가
    if (clickedDataList.every((item) => item.id !== list.id)) {
      setClickedDataList([...clickedDataList, list]);
    } else {
      setClickedDataList(clickedDataList.filter((item) => item.id !== list.id));
    }
  };

  const onClickHeader = (event) => {
    //클릭되었을때
    if (event.target.checked) {
      setClickedDataList(dataList);
    } else {
      setClickedDataList([]);
    }
  };

  return (
    <>
      <Wrapper>
        <Table>
          <tbody>
            <tr>
              <th>
                <input type="checkbox" onClick={onClickHeader}></input>
              </th>
              <th>번호</th>
              <th>제목</th>
              <th>작성일</th>
            </tr>
            {dataList.map((list) => (
              <MyTr key={list.id}>
                <MyTd>
                  <input
                    type="checkbox"
                    onClick={() => {
                      onClickCheck(list);
                    }}
                    checked={clickedDataList.some(
                      (item) => item.id === list.id
                    )}
                  ></input>
                </MyTd>
                <MyTd>{list.id}</MyTd>
                <MyTd>{list.data}</MyTd>
                <MyTd>{list.date}</MyTd>
              </MyTr>
            ))}
          </tbody>
        </Table>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 100px;
`;

const Table = styled.table`
  width: 600px;
`;

const MyTr = styled.tr`
  text-align: center;
`;

const MyTd = styled.td`
  padding: 20px 0 20px 0;
`;

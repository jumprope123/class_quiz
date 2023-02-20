import styled from "@emotion/styled";
import { useState } from "react";

export default function index() {
  const [dataList, setDataList] = useState([
    {
      id: 1,
      data: "9월달 시스템 점검 안내입니다.",
      date: "2020.09.19",
      check: false,
    },
    {
      id: 2,
      data: "안녕하세요! 공지사항 전달드립니다.",
      date: "2020.09.17",
      check: false,
    },
    {
      id: 3,
      data: "개인정보 처리방침 변경 사전 안내",
      date: "2020.09.12",
      check: false,
    },
    {
      id: 4,
      data: "ios 10.0이하 지원 중단 안내",
      date: "2020.08.10",
      check: false,
    },
    {
      id: 5,
      data: "이용약관 변경 사전 안내",
      date: "2020.08.01",
      check: false,
    },
    {
      id: 6,
      data: "개인정보 처리방침 변경 사전 안내",
      date: "2020.07.19",
      check: false,
    },
  ]);

  const [thcheck, setThcheck] = useState(false);

  const clickCheckBox = (list) => {
    //내려받은 dataList값을 state로 관리해서 변경
    const findIndex = dataList.findIndex((item) => item.id === list.id);
    let _dataList = [...dataList];
    _dataList[findIndex].check = !_dataList[findIndex].check;
    setDataList(_dataList);

    if (dataList.every((item) => item.check === true)) {
      setThcheck(true);
    } else {
      setThcheck(false);
    }
  };

  const clickCheckAll = () => {
    //기본으로 false인데 클릭시 하나라도 선택되지 않은게 있다면 전부 true로 변경
    const isCheck = false;
    for (let i = 0; i < dataList.length; i++) {
      if (dataList[i].check === false) {
        isCheck = true;
        break;
      }
    }

    if (isCheck) {
      let _dataList = [...dataList];
      _dataList.map((item) => (item.check = true));
      setDataList(_dataList);
      setThcheck(true);
    } else {
      let _dataList = [...dataList];
      _dataList.map((item) => (item.check = false));
      setDataList(_dataList);
      setThcheck(false);
    }
  };

  return (
    <>
      <Wrapper>
        <Table>
          <tbody>
            <tr>
              <th>
                <input
                  type="checkbox"
                  onClick={clickCheckAll}
                  checked={thcheck}
                ></input>
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
                      clickCheckBox(list);
                    }}
                    checked={list.check}
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

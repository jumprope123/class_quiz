const CLASSMATES = [
  { name: "철수", age: 10, school: "토끼초등학교" },
  { name: "영희", age: 13, school: "다람쥐초등학교" },
  { name: "훈이", age: 11, school: "토끼초등학교" },
];

export default function App() {
  CLASSMATES.filter((item) => item.school === "토끼초등학교").map((item) => {
    item.age += 10;
  });

  const aaa = CLASSMATES.filter((item) => item.school === "다람쥐초등학교").map(
    (item) => {
      console.log(item);
      item.name = item.name + "어린이";
    }
  );

  console.log(aaa);
  console.log(CLASSMATES);

  return <></>;
}

const FRUITS = [
  { number: 1, title: "일" },
  { number: 2, title: "이" },
  { number: 3, title: "삼" },
  { number: 4, title: "사" },
  { number: 5, title: "오" },
  { number: 6, title: "육" },
];

export default function App() {
  const aaa = FRUITS.filter((item) => item.number % 2 === 0).map((item) => (
    <div>
      {item.number}
      {item.title}
    </div>
  ));

  return <>{aaa}</>;
}

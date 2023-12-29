//Part 1: Frame App
import "./styles.css";
let arr = ["Hello", "World", "in", "a", "frame"];

function frame(arr) {
  let max = 0;
  let dif = 0;
  let lengths = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > max) {
      max = arr[i].length;
    }
  }
  let width = "*".repeat(max + 4);
  lengths.push(width);

  for (let i = 0; i < arr.length; i++) {
    let len = arr[i].length;
    dif = max - len;
    let lens = "* " + arr[i] + "\xa0".repeat(dif) + " *";
    lengths.push(lens);
  }

  lengths.push(width);

  return (
    <div>
      <ul>
        {lengths.map((word) => (
          <li> {word} </li>
        ))}
      </ul>
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <p>{frame(arr)}</p>
    </div>
  );
}

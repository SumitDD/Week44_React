import upper from "./file1";
import { text1, text2, text3 } from "./file1";
import person from "./file2";
import { males, females } from "./file2";
import MultiWelcome from "./file3";
import "./App.css";

function App() {
  let { firstName, email } = { ...person };
  console.log(firstName, email);

  let all = [...males, ...females];
  console.log(all);

  let newAll = [...males, firstName, "Helle", ...females, "Tina"];

  console.log(newAll);

  return (
    <div>
      <h2>Ex1</h2>
      <p>{upper("please uppercase me")}</p>
      <p>{upper(text1)}</p>
      <p>{upper(text2)}</p>
      <p>{upper(text3)}</p>

      <h2>Ex2</h2>
      <p>{firstName}</p>
      <p>{email}</p>

      <h3>Ex3</h3>
      <MultiWelcome />
    </div>
  );
}

export default App;

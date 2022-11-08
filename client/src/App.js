import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState("전송실패");

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:8080/api/hello")
  //     .then((res) => {
  //       setData(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  const testbtnA = () => {
    axios
      .get("api/pet")
      .then((res) => {
        console.log("a", res);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const testbtnB = () => {
    axios
      .get("api/hello")
      .then((res) => {
        console.log("b", res);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const testbtnC = () => {
    axios
      .get("api/bye")
      .then((res) => {
        console.log("c", res);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const testbtnD = () => {
    axios
      .get("api/gogog")
      .then((res) => {
        console.log("d", res);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1>{data}</h1>
      <button onClick={testbtnA}>a요청!</button>
      <button onClick={testbtnB}>b요청!</button>
      <button onClick={testbtnC}>c요청!</button>
      <button onClick={testbtnD}>d요청!</button>
    </div>
  );
}

export default App;

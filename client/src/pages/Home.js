import React from "react";
import axios from "axios";
import GlobalApiService from "../services/globalApi/api";
import { useState } from "react";
function Home(props) {
  const [data, setData] = useState("전송실패");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
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

  // const testbtnA = () => {
  //   axios
  //     .get("api/pet")
  //     .then((res) => {
  //       console.log("a", res);
  //       setData(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  // const testbtnB = () => {
  //   axios
  //     .get("api/hello")
  //     .then((res) => {
  //       console.log("b", res);
  //       setData(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  // const testbtnC = () => {
  //   axios
  //     .get("api/bye")
  //     .then((res) => {
  //       console.log("c", res);
  //       setData(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  // const testbtnD = () => {
  //   axios
  //     .get("api/gogog")
  //     .then((res) => {
  //       console.log("d", res);
  //       setData(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
  const testbtnA = async () => {
    const res = await GlobalApiService.getPet();
    setData(res);
  };

  const testbtnB = async () => {
    const res = await GlobalApiService.getHello();
    setData(res);
  };

  const testbtnC = async () => {
    const res = await GlobalApiService.getBye();
    setData(res);
  };

  const testbtnD = async () => {
    const res = await GlobalApiService.getGogog();
    setData(res);
  };

  const postbtn = async () => {
    const data = {
      name: "testName",
      age: "30",
    };

    const res = await GlobalApiService.getPostData(data);
    setName(res.name);
    setAge(res.age);
    console.log(res);
  };
  return (
    <div>
      <h1>{data}</h1>
      <p>이름은 : {name}</p>
      <p>나이는 : {age}</p>
      <input type="button" value="post요청" onClick={postbtn} />
      <button onClick={testbtnA}>a요청!</button>
      <button onClick={testbtnB}>b요청!</button>
      <button onClick={testbtnC}>c요청!</button>
      <button onClick={testbtnD}>d요청!</button>
    </div>
  );
}

export default Home;

import { useRef } from "react";

export function ListItem(props: any) {
  const quantity = useRef("");
  function addHandler(params: any) {
    console.log("Add Handler", props.item);
    let _body = JSON.stringify(props.item);
    const _headers = {
      "Content-type": "application/json; charset=UTF-8",
    };
    const _options = { method: "POST", headers: _headers, body: _body };
    fetch("http://localhost:3001/api/list", _options)
      .then((res) => res.json())
      .then((json) => console.log(json));
  }
  return (
    <div className="item">
      <img src={props.item.image} width={200} height={200} />
      <div className="item-content">
        <b>{props.item.title}</b>
        <br />
        <span>{props.item.price}</span>
        <p>{props.item.description}</p>
        <button onClick={addHandler} hidden={props.type == "mylist"}>
          Add to My List
        </button>
      </div>
    </div>
  );
}

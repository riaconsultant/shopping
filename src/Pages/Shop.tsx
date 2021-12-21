import { useState, useEffect } from "react";
import { List } from "./../component/List";
export function Shop() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/api/products")
      .then((res) => res.json())
      .then((result: any) => {
        setData(result);
        setIsLoading(false);
      });
  }, []);
  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  } else {
    return <List data={data} />;
  }
}

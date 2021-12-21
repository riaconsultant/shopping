import { ListItem } from "./ListItem";
export function List(props: any) {
  return (
    <div>
      {props.data.map((item: any) => {
        return <ListItem key={item.id} item={item} type={props.type} />;
      })}
    </div>
  );
}

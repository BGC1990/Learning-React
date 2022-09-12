import ListItem from "./ListItem";

export default function List(props){

    let items = props.items.map(item => <ListItem text={item} />)

    return (
        <>
        <h3>{props.title}</h3>
        <ul>
            <li>{items}</li>
        </ul>
        </>
    );
}
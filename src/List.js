import ListItem from "./ListItem";
import PropTypes from 'prop-types';

export default function List(props){
    
    let items = props.items.map(item => <ListItem text={item} />);

    return (
        <>
        <h3>{props.title}</h3>
        <ul>
            <li>{items}</li>
        </ul>
        </>
    );
}

List.propTypes = {
    items: PropTypes.array.isRequired,
    background: PropTypes.oneOf([
        'primary',
        'secondary'
    ])
};
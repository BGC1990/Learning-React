import Navbar from './Navbar'
import List from './List'

export default function App(){
    const guitars = ['Strat', 'Les Paul', 'Explorer', 'SG', 'Telecaster']

    return (    
        <>
            <Navbar title="CSS and Separating JS and JSX"/>
        <div className="container">
            <List
                title="Guitars"
                items={guitars}
            />
        </div>

        </>
    );
}
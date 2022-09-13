import Navbar from './Navbar'
import List from './ListClass'
import Counter from './CounterClass'

export default function App(){
    const guitars = ['Strat', 'Les Paul', 'Explorer', 'SG', 'Telecaster']

    return (    
        <>
            <Navbar title="Controlled Inputs"/>
        <div className="container">
            {/* <Counter /> */}
            <List
                title="Guitars"
                items={guitars}
            />
        </div>

        </>
    );
}
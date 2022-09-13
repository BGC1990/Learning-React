import Navbar from './Navbar'
import List from './List'
import Counter from './CounterClass'

export default function App(){
    const guitars = ['Strat', 'Les Paul', 'Explorer', 'SG', 'Telecaster']

    return (    
        <>
            <Navbar title="Getting Started With State"/>
        <div className="container">
            <Counter />
            {/* <List
                title="Guitars"
                items={guitars}
                background='primary'
            /> */}
        </div>

        </>
    );
}
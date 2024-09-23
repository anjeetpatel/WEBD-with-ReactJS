import {UserContext} from './UserContext';
import Child1 from './Child1';
import Child2 from './Child2';
import Child3 from './Child3';

const ParentComponent = () => {
    const user={
        name: 'John',
        age: 25
    };

    return(
        <UserContext.Provider value={user}>
        <div> 
        <h1>ParentComponent</h1>
        <p> Name: {user.name}, age:{user.age}</p>
        <Child1/>
        <Child2/>
        <Child3/>
        </div>
        </UserContext.Provider>
    )
}

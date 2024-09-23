import React, { userContext } from "react";
import UserContext from "./UserContext";
const Child3 = () => {
const user = useContext(UserContext);

return (
<div>
<h1>Child3 Data</h1>
<p>Name: {user.name}, Age: {user.age}</p>
</div>
);
}
export default Child3;
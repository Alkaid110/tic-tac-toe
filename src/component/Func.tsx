import * as React from 'react';
export interface Iprops {
  name: String
  age: Number
}

const Func: React.FunctionComponent<Iprops> = ({ name, age }) => {
  // const [myName, setName] = React.useState<String>(name);
  return (
    <div>{name} is {age}</div>
  )
}

export default Func
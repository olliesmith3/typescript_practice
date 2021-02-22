import React, { useState } from "react";

interface Person {
  firstName: string;
  lastName: string;
}

interface Props {
  text: string;
  // This means that TextField expects to be passed a prop called text which is a string
  ok?: boolean;
  // A question mark means the prop is optional
  i?: number;
  fn?: (bob: string) => string;
//  The above prop is called fn and is a function that takes the parameter called bob which is a string and returns a string
  fn2?: (bob: string) => void;
  //  this returns nothing so we write void
  obj?: {
    f1: string
  };
  // Can also pass objects
  person: Person;
  // And can pass custom types
}

export const TextField: React.FC<Props> = () => {
  // const [count, setCount] = useState<number | null | undefined>(5);
  // const [boy, setBoy] = useState<{middleName: string}>({middleName: 'Jack'})

  // setCount(null);
  // setCount(undefined);
  // setBoy({middleName: 'Joe'});
  return (
    <div>
      <input />
    </div>
  )
}
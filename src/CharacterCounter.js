import React from 'react';
import { useRecoilState, atom, useRecoilValue, selector } from 'recoil';

const textState = atom({
  key: 'textState', // unique ID (with respect to other atoms/selectors)
  default: '', // default value (aka initial value)
});

const charCountState = selector({
  key: 'charCountState', // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const text = get(textState);

    return text.length;
  },
});
console.log('1', charCountState);

export default function CharacterCounter() {
  console.log('bbb');
  return (
    <div>
      <TextInput />
      <CharacterCount />
    </div>
  );
}

function CharacterCount() {
  const count = useRecoilValue(charCountState);
  console.log('2', charCountState);

  return <>Character Count: {count}</>;
}

function TextInput() {
  const [text, setText] = useRecoilState(textState);

  const onChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={onChange} />
      <br />
      Echo: {text}
    </div>
  );
}

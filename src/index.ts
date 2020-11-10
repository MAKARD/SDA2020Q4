import { SingleConvert } from './models/SingleConvert';

import { Input, Slider } from './components';

const root = document.getElementById('root')!;

let inputValue = '1';
const onChange = (value: string) => {
  console.log('change');
  (window as any).inputValue = value;
}

root.appendChild(Input({ onChange, value: inputValue, id: 'test', type: 'number' }));
root.appendChild(Slider({ onChange: () => { }, value: '1', id: 'test2' }));
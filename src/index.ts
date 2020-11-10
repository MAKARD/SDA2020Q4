import { SingleConvert } from './models/SingleConvert';


document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root')!;

  const input = document.createElement('input');
  new SingleConvert().test();

  root.appendChild(input);
});
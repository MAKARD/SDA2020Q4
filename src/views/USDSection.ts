import { Input, Slider, Block } from '../components';
import { View } from '../global';

export const USDSection: View = (
  onChangeValue,
  values
) => Block({
  id: 'USDBlock',
  children: [
    Input({
      id: 'USDBlock_EURInput',
      onChange: (value) => {
        onChangeValue(value, 'parentCurrency');
      },
      value: values.parentCurrency.toString()
    }),
    Input({
      id: 'USDBlock_USDInput',
      onChange: (value) => {
        onChangeValue(value, 'childCurrency');
      },
      value: values.childCurrency.toString()
    }),
  ]
})


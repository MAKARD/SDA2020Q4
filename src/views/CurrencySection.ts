import { Input, Text, Block } from '../components';
import { Currency, View } from '../global';

export const CurrencySection = (currency: Currency): View => (
  onChangeValue,
  values,
  rate
) => Block({
  id: `${currency}Section`,
  style: {
    border: '1px solid black',
    marginTop: '25px',
    backgroundColor: '#e3e3e3'
  },
  children: [
    Text({
      id: `${currency}Title`,
      value: currency
    }),
    Block({
      id: `${currency}Block_Rate`,
      children: [
        Text({
          id: `${currency}Block_Rate_1EURIS`,
          value: '1 Euro is'
        }),
        Input({
          id: `${currency}Block_Rate_Value`,
          onChange: () => {},
          readonly: true,
          value: rate.toString()
        }),
      ]
    }),
    Block({
      id: `${currency}Block_Inputs`,
      children: [
        Input({
          id: `${currency}Block_EURInput`,
          onChange: (value) => {
            onChangeValue(value, 'parentCurrency');
          },
          value: values.parentCurrency.toString()
        }),
        Input({
          id: `${currency}Block_${currency}Input`,
          onChange: (value) => {
            onChangeValue(value, 'childCurrency');
          },
          value: values.childCurrency.toString()
        }),
      ]
    })
  ]
})


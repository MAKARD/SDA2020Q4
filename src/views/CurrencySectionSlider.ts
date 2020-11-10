import { Slider, Input, Text, Block } from '../components';
import { Currency, View } from '../global';

export const CurrencySectionSlider = (currency: Currency): View => (
  onChangeValue,
  values,
  rate
) => Block({
  id: `${currency}Section`,
  style: {
    border: '1px solid black',
    marginBottom: '25px',
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
        Block({
          id: `${currency}Block_Inputs_group1`,
          children: [
            Text({
              id: `${currency}Block_EURInput_value`,
              value: `EUR: ${values.parentCurrency}`,
              style: {
                display: 'block'
              }
            }),
            Slider({
              id: `${currency}Block_EURInput`,
              onChange: (value) => {
                onChangeValue(value, 'parentCurrency');
              },
              value: values.parentCurrency.toString()
            }),
          ]
        }),
       Block({
        id: `${currency}Block_Inputs_group2`,
         children: [
          Text({
            id: `${currency}Block_${currency}Input_value`,
            value: `${currency}: ${values.childCurrency}`,
            style: {
              display: 'block'
            }
          }),
          Slider({
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
  ]
})


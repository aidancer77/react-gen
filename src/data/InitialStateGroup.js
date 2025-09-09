import BarItems from '../../src/components/Bars/BarItem';

const InitialStateGroup = {
  items: [
    {
      id: 1,
      groupNum: 'Группа 4',
      powerGroup: BarItems.slice(0, 12).reduce((sum, item) => sum + item.power, 0),
    },
    {
      id: 2,
      groupNum: 'Группа 5',
      powerGroup: BarItems.slice(12, 18).reduce((sum, item) => sum + item.power, 1),
    }
  ]
}

export default InitialStateGroup;
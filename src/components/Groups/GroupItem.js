import InitialStateGroup from "../../data/InitialStateGroup";

const GroupItems = InitialStateGroup.items.map(item => ({
    id: item.id,
    groupNum: item.groupNum,
    powerGroup: item.powerGroup,
}))

export default GroupItems;
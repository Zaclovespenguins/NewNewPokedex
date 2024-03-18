import {View, useWindowDimensions} from "react-native";
import {TabView, SceneMap} from 'react-native-tab-view';

const aboutTab = () => {
  <View style={{flex: 1, backgroundColor: '#673ab7'}}/>
}

const statsTab = () => {
  <View style={{flex: 1, backgroundColor: '#673a27'}}/>
}

const movesTab = () => {
  <View style={{flex: 1, backgroundColor: '#33ab29'}}/>
}

const renderScene = SceneMap({
  first: aboutTab,
  second: statsTab,
  third: movesTab,
});

export default function detailTabView(results) {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'First'},
    {key: 'second', title: 'Second'},
    {key: 'third', title: 'Third'},
  ]);

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
    />
  );
}

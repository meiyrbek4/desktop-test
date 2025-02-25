import React, {useState} from 'react';
import {Dimensions, Platform, Text, View} from 'react-native-macos';
import styled from 'styled-components/native';

const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;

const NavigationContainer = styled.View`
  height: ${height}px;
  width: 300px;
  background-color: #ccc;
  align-items: center;
  padding: 30px 0;
  gap: 30px;
`;

const Button = styled.Pressable<{$pressed: boolean}>`
  width: 80%;
  background-color: ${(props: any) => (props.$pressed ? '#fff' : '#eee')};
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding: 5px 0;
`;

const AppLayout = styled.View`
  display: flex;
  flex-shrink: 1;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 20px;
  gap: 10px;

  /* display: grid;
  grid-template-columns: 100px 100px;
  gap: 20px; */
`;

const Wrapper = styled.Pressable<{$pressed: boolean}>`
  display: flex;
  flex-grow: 1;
  height: 100px;
  width: 100px;
  background-color: ${props => (props.$pressed ? 'blue' : 'red')};
`;

const App = () => {
  const [pressed, setPressed] = useState({
    index: null,
    pressed: false,
  });

  return (
    <View style={{flexDirection: 'row'}}>
      <NavigationContainer>
        <Button
          $pressed={pressed.pressed && pressed.index === null}
          onPressIn={() =>
            setPressed({
              index: null,
              pressed: true,
            })
          }
          onPressOut={() =>
            setPressed({
              index: null,
              pressed: false,
            })
          }>
          <Text style={{fontSize: 30}}>
            {Platform.OS === 'macos' ? 'App' : 'Other OS'}
          </Text>
        </Button>
        <Button>
          <Text style={{fontSize: 30}}>
            {Platform.OS === 'macos' ? 'Settings' : 'Other OS'}
          </Text>
        </Button>
        <Button>
          <Text style={{fontSize: 30}}>
            {Platform.OS === 'macos' ? 'About' : 'Other OS'}
          </Text>
        </Button>
      </NavigationContainer>
      <AppLayout>
        {Array.from({length: 10}, (el, i) => (
          <Wrapper
            key={i}
            $pressed={pressed.pressed && pressed.index === i}
            onPressIn={() =>
              setPressed({
                index: i,
                pressed: true,
              })
            }
            onPressOut={() =>
              setPressed({
                index: null,
                pressed: false,
              })
            }
          />
        ))}
      </AppLayout>
    </View>
  );
};

export default App;

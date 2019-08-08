/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from 'react';
import { View, SafeAreaView, TouchableOpacity, Text } from "react-native";

import { Drawer } from 'native-base';

class DrawerMenu extends React.Component {
  render() {
    return (
      <Fragment>
        <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
          <Text>This is drawer view</Text>
        </SafeAreaView>
      </Fragment>
    );
  }
}

export default class App extends React.Component {
  render(): * {
    return (
      <Drawer
        ref={ref => {
          this.drawer = ref;
        }}
        content={<DrawerMenu />}
        onClose={() => {}}
      >
        <SafeAreaView>
          <TouchableOpacity onPress={() => this.drawer._root.open()}>
            <Text>This is main View! Click here</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </Drawer>
    );
  }
}

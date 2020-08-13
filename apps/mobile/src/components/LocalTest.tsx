import React from 'react';
import {View, Text} from 'react-native';
import {getMyAddress} from '@dev/shared';

const LocalTest = () => {
  return (
    <View>
      <Text>Local {getMyAddress('Tom')}</Text>
    </View>
  );
};

export default LocalTest;

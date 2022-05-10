import {View, Text} from 'react-native';
import React from 'react';
import {ButtonTextAtom} from '../../components';
import {colors} from '../../themes';

const HomeTemplate = () => {
  return (
    <View>
      <ButtonTextAtom title={'Oke'} color={colors.primary} />
    </View>
  );
};

export default HomeTemplate;

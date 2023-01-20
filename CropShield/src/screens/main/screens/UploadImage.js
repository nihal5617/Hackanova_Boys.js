import React, {useEffect} from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import ImagePicker from '../../../components/ImagePicker';
import constants from '../../../utility/constants';
import styles from '../../../styles/styles';
import global from '../../../utility/global';
import {useForm} from 'react-hook-form';
import Header from '../../../components/Header';
import PrimaryButton from '../../../components/PrimaryButton';
import Collapsible from 'react-native-collapsible';
import Ripple from 'react-native-material-ripple';
import colors from '../../../styles/colors';

const apikey = {
  LOGO: 'logo',
};

export default function UploadImage({navigation}) {
  const [isLoading, setLoading] = React.useState(false);
  const [output, setOutput] = React.useState(null);
  const [isCollapsible, setCollapsible] = React.useState(false);
  const {
    control,
    handleSubmit,
    setValue,
    formState: {errors},
  } = useForm();

  useEffect(() => {
    drawToolbar();
  }, []);

  const drawToolbar = () => {
    navigation.setOptions({
      header: () => (
        <Header title="Check For Disease" navigation={navigation} />
      ),
    });
  };

  const check = data => {
    console.log(data);
    setOutput({
      Crop: 'Tomato',
      Disease: 'Bacterial_spot',
      Causes:
        'These bacterial pathogens can be introduced into a garden on contaminated seed and transplants, which may or may not show symptoms.  The pathogens enter plants through natural openings (e.g., stomates), as well as through wounds. ',
      Treatment:
        'A plant with bacterial spot cannot be cured.  Remove symptomatic plants from the field or greenhouse to prevent the spread of bacteria to healthy plants.',
    });
  };

  const expertAdvice = data => {
    global.showMessage('Expert Will Reply You Soon', false);
  };

  const getKeyValue = (key, value) => {
    return (
      <View style={internalStyles.inRow}>
        <View style={internalStyles.keyView}>
          <Text style={internalStyles.key}>{key} : </Text>
        </View>
        <View style={internalStyles.valueView}>
          <Text style={internalStyles.value}>{value}</Text>
        </View>
      </View>
    );
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={[
        styles.styleFull,
        {
          marginTop: 10,
          paddingHorizontal: 15,
          marginBottom: 10,
        },
      ]}>
      <ImagePicker
        name={apikey.LOGO}
        title={'Image'}
        control={control}
        errors={errors}
        rules={{
          required: true,
        }}
        recomText={'Recommended Size: 165px*65px'}
        style={{marginBottom: 17}}
        disabled={isLoading}
      />

      <PrimaryButton
        title="Check For Disease"
        onPress={handleSubmit(check)}
        style={{marginBottom: 10, width: '100%'}}
      />
      <PrimaryButton
        title="Expert Advice"
        onPress={handleSubmit(expertAdvice)}
        style={{marginBottom: 10, width: '100%'}}
      />

      {output && (
        <View style={internalStyles.whiteBgView}>
          <View style={internalStyles.inRowAndEnd}>
            <View style={{width: '90%'}}>
              <Text style={internalStyles.title}>
                Disease : {output.Disease}
              </Text>
            </View>
            {isCollapsible ? (
              <Ripple
                onPress={() => {
                  setCollapsible(!isCollapsible);
                }}>
                {global.drawIcon(
                  constants.IC_FEATHER,
                  'chevron-down',
                  20,
                  colors.BLACK,
                )}
              </Ripple>
            ) : (
              <View>
                <Ripple
                  onPress={() => {
                    setCollapsible(!isCollapsible);
                  }}>
                  {global.drawIcon(
                    constants.IC_FEATHER,
                    'chevron-up',
                    20,
                    colors.BLACK,
                  )}
                </Ripple>
              </View>
            )}
          </View>
          <Collapsible collapsed={isCollapsible}>
            <View style={{marginTop: 10}}>
              {getKeyValue('Crop', output.Crop)}
              {getKeyValue('Causes', output.Causes)}
              {getKeyValue('Treatment', output.Treatment)}
            </View>
          </Collapsible>
        </View>
      )}
    </ScrollView>
  );
}

const internalStyles = StyleSheet.create({
  whiteBgView: {
    backgroundColor: colors.WHITE,
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  inRowAndEnd: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.BLACK,
  },
  inRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  keyView: {
    width: '25%',
  },
  key: {
    fontSize: 15,
    fontWeight: 'bold',
    color: colors.BLACK,
  },
  valueView: {
    width: '75%',
  },
  value: {
    fontSize: 14,
    color: colors.BLACK,
  },
});

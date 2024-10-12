import React from 'react';
import { StyleSheet, View, Modal, Text, Pressable, Alert } from 'react-native';
import app from '../styles/default';
import COLORS from '../styles/constants/colors';
import { BORDER } from '../styles/constants/styles';

const ModalView = (props) => {
  const { actionText, submitAction, viewModal, setViewModal, selectedSurvey } =
    props;
  return (
    <Modal
      animationType='fade'
      transparent={true}
      visible={viewModal}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setViewModal(!viewModal);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={app.text}>
            {actionText}{' '}
            <Text style={app.boldText}>{selectedSurvey.title}</Text> survey?
          </Text>
          <Text style={app.smallText}>(This cannot be undone)</Text>
          <View style={styles.buttons}>
            <Pressable
              style={[app.button, styles.button, styles.backButton]}
              onPress={() => setViewModal(!viewModal)}
            >
              <Text style={{ ...app.buttonText, color: '#000' }}>Cancel</Text>
            </Pressable>
            <Pressable
              style={[app.button, styles.button]}
              onPress={() => {
                submitAction(selectedSurvey);
                setViewModal(!viewModal);
              }}
            >
              <Text style={app.buttonText}>{actionText}</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '45%',
  },
  backButton: {
    backgroundColor: COLORS.lightBG,
  },
  buttons: {
    justifyContent: 'center',
    flexDirection: 'row',
    margin: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    margin: 20,
    backgroundColor: COLORS.white,
    borderRadius: BORDER.radius,
    padding: 30,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
});

export default ModalView;
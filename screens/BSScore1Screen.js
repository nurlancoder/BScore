import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  StatusBar,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SvgIcon from '../components/SvgIcon';

const BSScore1Screen = () => {
  const navigation = useNavigation();
  const [digitalId, setDigitalId] = useState('');
  const [voen, setVoen] = useState('');

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.backIcon}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Enter Your Business ID</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView style={styles.scrollView} contentContainerStyle={styles.content}>
        <Text style={styles.description}>
          To calculate your Business Stability Score, please enter your business registration number (VÖEN).
        </Text>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Digital ID</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your digital ID"
            placeholderTextColor="#8E8E93"
            value={digitalId}
            onChangeText={setDigitalId}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>VÖEN</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your VÖEN please"
            placeholderTextColor="#8E8E93"
            value={voen}
            onChangeText={setVoen}
          />
        </View>

        <TouchableOpacity
          style={[styles.continueButton, (!digitalId || !voen) && styles.continueButtonDisabled]}
          onPress={() => navigation.navigate('BSScore2')}
          disabled={!digitalId || !voen}
        >
          <Text style={styles.continueButtonText}>Continue</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 20,
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backIcon: {
    fontSize: 24,
    color: '#141B34',
  },
  headerTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: '#141B34',
  },
  placeholder: {
    width: 40,
  },
  scrollView: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  description: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#8E8E93',
    lineHeight: 20,
    marginBottom: 32,
  },
  inputContainer: {
    marginBottom: 24,
  },
  inputLabel: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    color: '#141B34',
    marginBottom: 8,
  },
  input: {
    height: 56,
    borderWidth: 1,
    borderColor: '#E5E5EA',
    borderRadius: 12,
    paddingHorizontal: 16,
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#141B34',
    backgroundColor: '#FFFFFF',
  },
  continueButton: {
    height: 56,
    backgroundColor: '#804EC1',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 32,
    marginBottom: 40,
  },
  continueButtonDisabled: {
    backgroundColor: '#E5E5EA',
  },
  continueButtonText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: '#FFFFFF',
  },
});

export default BSScore1Screen;


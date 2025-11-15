import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SvgIcon from '../components/SvgIcon';

const BSScore2Screen = () => {
  const navigation = useNavigation();
  const [selectedType, setSelectedType] = useState(null);

  const businessTypes = [
    { id: 1, name: 'Bakery', icon: '🍞' },
    { id: 2, name: 'Cafe', icon: '☕' },
    { id: 3, name: 'Grocery Store', icon: '🛒' },
    { id: 4, name: 'Beauty & Barber', icon: '✂️' },
    { id: 5, name: 'Flower Shop', icon: '🌸' },
    { id: 6, name: 'Food Corner', icon: '🍔' },
  ];

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.backIcon}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Select Your Business Type</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView style={styles.scrollView} contentContainerStyle={styles.content}>
        <Text style={styles.description}>
          We personalize your Business Stability Score based on your activity type.
        </Text>

        <View style={styles.businessTypesList}>
          {businessTypes.map((type) => (
            <TouchableOpacity
              key={type.id}
              style={[
                styles.businessTypeItem,
                selectedType === type.id && styles.businessTypeItemSelected,
              ]}
              onPress={() => setSelectedType(type.id)}
            >
              <Text style={styles.businessTypeIcon}>{type.icon}</Text>
              <Text
                style={[
                  styles.businessTypeName,
                  selectedType === type.id && styles.businessTypeNameSelected,
                ]}
              >
                {type.name}
              </Text>
              <View
                style={[
                  styles.radioButton,
                  selectedType === type.id && styles.radioButtonSelected,
                ]}
              >
                {selectedType === type.id && <View style={styles.radioButtonInner} />}
              </View>
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity
          style={[
            styles.continueButton,
            !selectedType && styles.continueButtonDisabled,
          ]}
          onPress={() => navigation.navigate('BSScore3')}
          disabled={!selectedType}
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
  businessTypesList: {
    marginBottom: 32,
  },
  businessTypeItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 12,
    backgroundColor: '#F5F5F5',
    marginBottom: 12,
  },
  businessTypeItemSelected: {
    backgroundColor: '#F5F0FF',
    borderWidth: 1,
    borderColor: '#804EC1',
  },
  businessTypeIcon: {
    fontSize: 24,
    marginRight: 16,
  },
  businessTypeName: {
    flex: 1,
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#141B34',
  },
  businessTypeNameSelected: {
    fontFamily: 'Poppins-SemiBold',
    color: '#804EC1',
  },
  radioButton: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#E5E5EA',
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioButtonSelected: {
    borderColor: '#804EC1',
  },
  radioButtonInner: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#804EC1',
  },
  continueButton: {
    height: 56,
    backgroundColor: '#804EC1',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
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

export default BSScore2Screen;


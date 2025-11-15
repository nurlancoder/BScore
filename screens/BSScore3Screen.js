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
// import RNPickerSelect from 'react-native-picker-select';

const BSScore3Screen = () => {
  const navigation = useNavigation();
  const [dailySales, setDailySales] = useState('');
  const [cashPosRatio, setCashPosRatio] = useState('Cash');
  const [salesPerDay, setSalesPerDay] = useState('10');
  const [rent, setRent] = useState('');
  const [inventory, setInventory] = useState('');
  const [utilities, setUtilities] = useState('');
  const [internet, setInternet] = useState('');
  const [salaries, setSalaries] = useState('');

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.backIcon}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Business Activity Details</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView style={styles.scrollView} contentContainerStyle={styles.content}>
        <Text style={styles.description}>
          We use this information to calculate your Business Score.
        </Text>

        {/* Daily Sales Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Daily Sales</Text>
          
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Average Daily Sales</Text>
            <TextInput
              style={styles.input}
              placeholder="Average Daily Sales"
              placeholderTextColor="#8E8E93"
              value={dailySales}
              onChangeText={setDailySales}
              keyboardType="numeric"
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Cash / POS Ratio</Text>
            <View style={styles.ratioContainer}>
              <TouchableOpacity
                style={[
                  styles.ratioButton,
                  cashPosRatio === 'Cash' && styles.ratioButtonSelected,
                ]}
                onPress={() => setCashPosRatio('Cash')}
              >
                <Text
                  style={[
                    styles.ratioButtonText,
                    cashPosRatio === 'Cash' && styles.ratioButtonTextSelected,
                  ]}
                >
                  Cash
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.ratioButton,
                  cashPosRatio === 'POS' && styles.ratioButtonSelected,
                ]}
                onPress={() => setCashPosRatio('POS')}
              >
                <Text
                  style={[
                    styles.ratioButtonText,
                    cashPosRatio === 'POS' && styles.ratioButtonTextSelected,
                  ]}
                >
                  POS
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Number of sales per day</Text>
            <View style={styles.pickerContainer}>
              <Text style={styles.pickerText}>{salesPerDay}</Text>
            </View>
          </View>
        </View>

        {/* Monthly Expenses Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Monthly Expenses</Text>
          
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Rent / Space Cost</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter amount (AZN)"
              placeholderTextColor="#8E8E93"
              value={rent}
              onChangeText={setRent}
              keyboardType="numeric"
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Inventory / Supplies Cost</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter amount (AZN)"
              placeholderTextColor="#8E8E93"
              value={inventory}
              onChangeText={setInventory}
              keyboardType="numeric"
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Utilities (electricity, gas, water)</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter amount (AZN)"
              placeholderTextColor="#8E8E93"
              value={utilities}
              onChangeText={setUtilities}
              keyboardType="numeric"
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Internet</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter amount (AZN)"
              placeholderTextColor="#8E8E93"
              value={internet}
              onChangeText={setInternet}
              keyboardType="numeric"
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Salaries (if any)</Text>
            <TextInput
              style={styles.input}
              placeholder="Optional"
              placeholderTextColor="#8E8E93"
              value={salaries}
              onChangeText={setSalaries}
              keyboardType="numeric"
            />
          </View>
        </View>

        <TouchableOpacity
          style={styles.continueButton}
          onPress={() => navigation.navigate('Home')}
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
    paddingBottom: 40,
  },
  description: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#8E8E93',
    lineHeight: 20,
    marginBottom: 32,
  },
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: '#141B34',
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
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
  ratioContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  ratioButton: {
    flex: 1,
    height: 56,
    borderWidth: 1,
    borderColor: '#E5E5EA',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  ratioButtonSelected: {
    borderColor: '#804EC1',
    backgroundColor: '#F5F0FF',
  },
  ratioButtonText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#141B34',
  },
  ratioButtonTextSelected: {
    fontFamily: 'Poppins-SemiBold',
    color: '#804EC1',
  },
  pickerContainer: {
    height: 56,
    borderWidth: 1,
    borderColor: '#E5E5EA',
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  pickerText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#141B34',
  },
  continueButton: {
    height: 56,
    backgroundColor: '#804EC1',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  continueButtonText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: '#FFFFFF',
  },
});

export default BSScore3Screen;


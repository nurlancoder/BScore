import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SvgIcon from '../components/SvgIcon';
import { backArrowSvg, uploadImageSvg, enterIdSvg } from '../assets/icons';

const BSScore4Screen = () => {
  const navigation = useNavigation();

  // Realistic QR Code matching the design
  const qrCodeSvg = `<svg width="180" height="180" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="180" height="180" fill="white"/>
    
    <!-- Top left position marker -->
    <rect x="10" y="10" width="50" height="50" fill="black"/>
    <rect x="18" y="18" width="34" height="34" fill="white"/>
    <rect x="26" y="26" width="18" height="18" fill="black"/>
    
    <!-- Top right position marker -->
    <rect x="120" y="10" width="50" height="50" fill="black"/>
    <rect x="128" y="18" width="34" height="34" fill="white"/>
    <rect x="136" y="26" width="18" height="18" fill="black"/>
    
    <!-- Bottom left position marker -->
    <rect x="10" y="120" width="50" height="50" fill="black"/>
    <rect x="18" y="128" width="34" height="34" fill="white"/>
    <rect x="26" y="136" width="18" height="18" fill="black"/>
    
    <!-- Data pattern -->
    <rect x="70" y="10" width="8" height="8" fill="black"/>
    <rect x="86" y="10" width="8" height="8" fill="black"/>
    <rect x="102" y="10" width="8" height="8" fill="black"/>
    
    <rect x="70" y="26" width="8" height="8" fill="black"/>
    <rect x="78" y="26" width="8" height="8" fill="white"/>
    <rect x="86" y="26" width="8" height="8" fill="black"/>
    <rect x="94" y="26" width="8" height="8" fill="white"/>
    <rect x="102" y="26" width="8" height="8" fill="black"/>
    
    <rect x="70" y="42" width="8" height="8" fill="white"/>
    <rect x="78" y="42" width="8" height="8" fill="black"/>
    <rect x="86" y="42" width="8" height="8" fill="black"/>
    <rect x="94" y="42" width="8" height="8" fill="black"/>
    <rect x="102" y="42" width="8" height="8" fill="white"/>
    
    <rect x="10" y="70" width="8" height="8" fill="black"/>
    <rect x="26" y="70" width="8" height="8" fill="white"/>
    <rect x="42" y="70" width="8" height="8" fill="black"/>
    <rect x="50" y="70" width="8" height="8" fill="white"/>
    
    <rect x="70" y="70" width="8" height="8" fill="black"/>
    <rect x="78" y="70" width="8" height="8" fill="white"/>
    <rect x="86" y="70" width="8" height="8" fill="black"/>
    <rect x="94" y="70" width="8" height="8" fill="black"/>
    <rect x="102" y="70" width="8" height="8" fill="white"/>
    <rect x="110" y="70" width="8" height="8" fill="black"/>
    
    <rect x="120" y="70" width="8" height="8" fill="black"/>
    <rect x="136" y="70" width="8" height="8" fill="white"/>
    <rect x="152" y="70" width="8" height="8" fill="black"/>
    <rect x="160" y="70" width="8" height="8" fill="white"/>
    
    <rect x="10" y="86" width="8" height="8" fill="white"/>
    <rect x="26" y="86" width="8" height="8" fill="black"/>
    <rect x="42" y="86" width="8" height="8" fill="black"/>
    <rect x="50" y="86" width="8" height="8" fill="white"/>
    
    <rect x="70" y="86" width="8" height="8" fill="white"/>
    <rect x="86" y="86" width="8" height="8" fill="black"/>
    <rect x="102" y="86" width="8" height="8" fill="black"/>
    
    <rect x="120" y="86" width="8" height="8" fill="white"/>
    <rect x="136" y="86" width="8" height="8" fill="black"/>
    <rect x="152" y="86" width="8" height="8" fill="white"/>
    <rect x="160" y="86" width="8" height="8" fill="black"/>
    
    <rect x="10" y="102" width="8" height="8" fill="black"/>
    <rect x="26" y="102" width="8" height="8" fill="white"/>
    <rect x="42" y="102" width="8" height="8" fill="black"/>
    
    <rect x="70" y="102" width="8" height="8" fill="black"/>
    <rect x="78" y="102" width="8" height="8" fill="black"/>
    <rect x="86" y="102" width="8" height="8" fill="white"/>
    <rect x="94" y="102" width="8" height="8" fill="black"/>
    <rect x="102" y="102" width="8" height="8" fill="white"/>
    <rect x="110" y="102" width="8" height="8" fill="black"/>
    
    <rect x="120" y="102" width="8" height="8" fill="black"/>
    <rect x="128" y="102" width="8" height="8" fill="white"/>
    <rect x="136" y="102" width="8" height="8" fill="black"/>
    <rect x="144" y="102" width="8" height="8" fill="black"/>
    <rect x="152" y="102" width="8" height="8" fill="white"/>
    <rect x="160" y="102" width="8" height="8" fill="black"/>
    
    <rect x="70" y="120" width="8" height="8" fill="white"/>
    <rect x="86" y="120" width="8" height="8" fill="black"/>
    <rect x="102" y="120" width="8" height="8" fill="black"/>
    <rect x="110" y="120" width="8" height="8" fill="white"/>
    
    <rect x="120" y="120" width="8" height="8" fill="black"/>
    <rect x="136" y="120" width="8" height="8" fill="white"/>
    <rect x="152" y="120" width="8" height="8" fill="black"/>
    
    <rect x="70" y="136" width="8" height="8" fill="black"/>
    <rect x="78" y="136" width="8" height="8" fill="white"/>
    <rect x="86" y="136" width="8" height="8" fill="black"/>
    <rect x="94" y="136" width="8" height="8" fill="black"/>
    <rect x="102" y="136" width="8" height="8" fill="white"/>
    
    <rect x="120" y="136" width="8" height="8" fill="white"/>
    <rect x="128" y="136" width="8" height="8" fill="black"/>
    <rect x="136" y="136" width="8" height="8" fill="white"/>
    <rect x="144" y="136" width="8" height="8" fill="black"/>
    <rect x="152" y="136" width="8" height="8" fill="black"/>
    
    <rect x="70" y="152" width="8" height="8" fill="white"/>
    <rect x="86" y="152" width="8" height="8" fill="black"/>
    <rect x="102" y="152" width="8" height="8" fill="white"/>
    <rect x="110" y="152" width="8" height="8" fill="black"/>
    
    <rect x="120" y="152" width="8" height="8" fill="black"/>
    <rect x="136" y="152" width="8" height="8" fill="black"/>
    <rect x="152" y="152" width="8" height="8" fill="white"/>
    <rect x="160" y="152" width="8" height="8" fill="black"/>
  </svg>`;

  // Corner brackets for scanning frame
  const cornerBracket = (position) => {
    const size = 30;
    const strokeWidth = 3;
    if (position === 'topLeft') {
      return `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 ${strokeWidth} L0 0 L${strokeWidth} 0" stroke="black" stroke-width="${strokeWidth}" stroke-linecap="round"/>
        <path d="M0 ${size - strokeWidth} L0 ${size}" stroke="black" stroke-width="${strokeWidth}" stroke-linecap="round"/>
        <path d="M${strokeWidth} ${size} L${size} ${size}" stroke="black" stroke-width="${strokeWidth}" stroke-linecap="round"/>
      </svg>`;
    } else if (position === 'topRight') {
      return `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M${size - strokeWidth} 0 L${size} 0 L${size} ${strokeWidth}" stroke="black" stroke-width="${strokeWidth}" stroke-linecap="round"/>
        <path d="M${size} ${size - strokeWidth} L${size} ${size}" stroke="black" stroke-width="${strokeWidth}" stroke-linecap="round"/>
        <path d="M0 ${size} L${size - strokeWidth} ${size}" stroke="black" stroke-width="${strokeWidth}" stroke-linecap="round"/>
      </svg>`;
    } else if (position === 'bottomLeft') {
      return `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0 L0 ${strokeWidth}" stroke="black" stroke-width="${strokeWidth}" stroke-linecap="round"/>
        <path d="M0 ${size - strokeWidth} L0 ${size} L${strokeWidth} ${size}" stroke="black" stroke-width="${strokeWidth}" stroke-linecap="round"/>
        <path d="M${size - strokeWidth} 0 L${size} 0" stroke="black" stroke-width="${strokeWidth}" stroke-linecap="round"/>
      </svg>`;
    } else {
      return `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0 L${size - strokeWidth} 0" stroke="black" stroke-width="${strokeWidth}" stroke-linecap="round"/>
        <path d="M${size} 0 L${size} ${strokeWidth}" stroke="black" stroke-width="${strokeWidth}" stroke-linecap="round"/>
        <path d="M${size - strokeWidth} ${size} L${size} ${size} L${size} ${size - strokeWidth}" stroke="black" stroke-width="${strokeWidth}" stroke-linecap="round"/>
      </svg>`;
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <SvgIcon xml={backArrowSvg} width={24} height={24} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Scan your QR Code</Text>
        <View style={styles.placeholder} />
      </View>

      {/* QR Code Scanner Area */}
      <View style={styles.scannerContainer}>
        <View style={styles.qrFrame}>
          {/* Corner brackets */}
          <View style={[styles.corner, styles.topLeft]}>
            <SvgIcon xml={cornerBracket('topLeft')} width={30} height={30} />
          </View>
          <View style={[styles.corner, styles.topRight]}>
            <SvgIcon xml={cornerBracket('topRight')} width={30} height={30} />
          </View>
          <View style={[styles.corner, styles.bottomLeft]}>
            <SvgIcon xml={cornerBracket('bottomLeft')} width={30} height={30} />
          </View>
          <View style={[styles.corner, styles.bottomRight]}>
            <SvgIcon xml={cornerBracket('bottomRight')} width={30} height={30} />
          </View>
          
          {/* QR Code */}
          <View style={styles.qrCodeContainer}>
            <SvgIcon xml={qrCodeSvg} width={200} height={200} />
          </View>
        </View>
      </View>

      {/* Action Buttons */}
      <View style={styles.actionButtons}>
        <TouchableOpacity 
          style={styles.actionButton}
          onPress={() => {
            // Simulate QR code scan - navigate to calculating screen
            navigation.navigate('BSScore5');
          }}
        >
          <SvgIcon xml={uploadImageSvg} width={24} height={24} />
          <Text style={styles.actionText}>Upload Image</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.actionButton}
          onPress={() => navigation.navigate('BSScore1')}
        >
          <SvgIcon xml={enterIdSvg} width={24} height={24} />
          <Text style={styles.actionText}>Enter ID</Text>
        </TouchableOpacity>
      </View>
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
    paddingTop: 60,
    paddingBottom: 20,
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: '#141B34',
    flex: 1,
    textAlign: 'center',
  },
  placeholder: {
    width: 40,
  },
  scannerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  qrFrame: {
    width: 280,
    height: 280,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  corner: {
    position: 'absolute',
  },
  topLeft: {
    top: 0,
    left: 0,
  },
  topRight: {
    top: 0,
    right: 0,
  },
  bottomLeft: {
    bottom: 0,
    left: 0,
  },
  bottomRight: {
    bottom: 0,
    right: 0,
  },
  qrCodeContainer: {
    marginTop: 20,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 40,
    paddingBottom: 40,
    paddingTop: 20,
  },
  actionButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#141B34',
    marginTop: 8,
  },
});

export default BSScore4Screen;


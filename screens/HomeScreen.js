import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SvgIcon from '../components/SvgIcon';
import {
  homeSvg,
  activitySvg,
  transferSvg,
  paymentsSvg,
  moreSvg,
  bsScoreSvg,
  sendSvg,
  topUpSvg,
  scanSvg,
  notificationsSvg,
  profileSvg,
} from '../assets/icons';

const HomeScreen = () => {
  const navigation = useNavigation();

  const transactions = [
    {
      id: 1,
      merchant: 'Starbucks Coffe',
      date: 'October 18, 21:00 PM',
      amount: '-$76.00',
      status: 'Successful',
    },
    {
      id: 2,
      merchant: 'Bravo Supermarket',
      date: 'October 13, 16:30 PM',
      amount: '-$12.80',
      status: 'Successful',
    },
    {
      id: 3,
      merchant: 'Starbucks Coffe',
      date: 'November 20, 07:00 PM',
      amount: '-$32.89',
      status: 'Successful',
    },
  ];

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <SvgIcon xml={profileSvg} width={40} height={40} />
          <View style={styles.headerText}>
            <Text style={styles.helloText}>Hello, Roza</Text>
            <Text style={styles.walletText}>Your wallet</Text>
          </View>
        </View>
        <TouchableOpacity>
          <SvgIcon xml={notificationsSvg} width={24} height={24} />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Total Balance Card */}
        <View style={styles.balanceCard}>
          <Text style={styles.balanceLabel}>Total Balance</Text>
          <Text style={styles.balanceAmount}>$3.200.50</Text>
          <View style={styles.cardInfo}>
            <Text style={styles.cardHolder}>Card Holder Roza Axmadov</Text>
            <Text style={styles.cardExpiry}>09/25</Text>
          </View>
        </View>

        {/* Quick Actions */}
        <View style={styles.quickActions}>
          <Text style={styles.sectionTitle}>Quick Actions</Text>
          <View style={styles.actionsGrid}>
            <TouchableOpacity
              style={styles.actionButton}
              onPress={() => navigation.navigate('BSScore1')}
            >
              <View style={styles.actionIconContainer}>
                <SvgIcon xml={bsScoreSvg} width={24} height={24} />
              </View>
              <Text style={styles.actionText}>Bs Score</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButton}>
              <View style={styles.actionIconContainer}>
                <SvgIcon xml={sendSvg} width={24} height={24} />
              </View>
              <Text style={styles.actionText}>Send</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButton}>
              <View style={styles.actionIconContainer}>
                <SvgIcon xml={topUpSvg} width={24} height={24} />
              </View>
              <Text style={styles.actionText}>Top Up</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.actionButton}
              onPress={() => navigation.navigate('BSScore4')}
            >
              <View style={styles.actionIconContainer}>
                <SvgIcon xml={scanSvg} width={24} height={24} />
              </View>
              <Text style={styles.actionText}>Scan</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Transactions */}
        <View style={styles.transactions}>
          <View style={styles.transactionsHeader}>
            <Text style={styles.sectionTitle}>Transactions</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>

          {transactions.map((transaction) => (
            <View key={transaction.id} style={styles.transactionItem}>
              <View style={styles.transactionLeft}>
              <View style={styles.transactionIcon}>
                <View style={styles.transactionIconCircle}>
                  <Text style={styles.transactionIconText}>
                    {transaction.merchant.charAt(0)}
                  </Text>
                </View>
              </View>
                <View style={styles.transactionInfo}>
                  <Text style={styles.transactionMerchant}>{transaction.merchant}</Text>
                  <Text style={styles.transactionDate}>{transaction.date}</Text>
                </View>
              </View>
              <View style={styles.transactionRight}>
                <Text style={styles.transactionAmount}>{transaction.amount}</Text>
                <Text style={styles.transactionStatus}>{transaction.status}</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <SvgIcon xml={homeSvg} width={22} height={22} color="#804EC1" />
          <Text style={[styles.navText, styles.navTextActive]}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <SvgIcon xml={activitySvg} width={22} height={22} />
          <Text style={styles.navText}>Activity</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <SvgIcon xml={transferSvg} width={22} height={22} />
          <Text style={styles.navText}>Transfer</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <SvgIcon xml={paymentsSvg} width={22} height={22} />
          <Text style={styles.navText}>Payments</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <SvgIcon xml={moreSvg} width={22} height={22} />
          <Text style={styles.navText}>More</Text>
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
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 20,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    marginLeft: 12,
  },
  helloText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: '#141B34',
  },
  walletText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#8E8E93',
  },
  scrollView: {
    flex: 1,
  },
  balanceCard: {
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 24,
    padding: 24,
    borderRadius: 16,
    backgroundColor: '#804EC1',
  },
  balanceLabel: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#FFFFFF',
    opacity: 0.9,
    marginBottom: 8,
  },
  balanceAmount: {
    fontFamily: 'Poppins-Bold',
    fontSize: 32,
    color: '#FFFFFF',
    marginBottom: 24,
  },
  cardInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardHolder: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#FFFFFF',
  },
  cardExpiry: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#FFFFFF',
  },
  quickActions: {
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  sectionTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: '#141B34',
    marginBottom: 16,
  },
  actionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  actionButton: {
    width: '22%',
    alignItems: 'center',
    marginBottom: 16,
  },
  actionIconContainer: {
    width: 56,
    height: 56,
    borderRadius: 16,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  actionText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#141B34',
    textAlign: 'center',
  },
  transactions: {
    paddingHorizontal: 20,
    marginBottom: 100,
  },
  transactionsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  seeAllText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#804EC1',
  },
  transactionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F5F5F5',
  },
  transactionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  transactionIcon: {
    marginRight: 12,
  },
  transactionIconCircle: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  transactionIconText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: '#141B34',
  },
  transactionInfo: {
    flex: 1,
  },
  transactionMerchant: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: '#141B34',
    marginBottom: 4,
  },
  transactionDate: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#8E8E93',
  },
  transactionRight: {
    alignItems: 'flex-end',
  },
  transactionAmount: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: '#141B34',
    marginBottom: 4,
  },
  transactionStatus: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#34C759',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 12,
    paddingBottom: 30,
    borderTopWidth: 1,
    borderTopColor: '#F5F5F5',
    backgroundColor: '#FFFFFF',
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#8E8E93',
    marginTop: 4,
  },
  navTextActive: {
    color: '#804EC1',
  },
});

export default HomeScreen;


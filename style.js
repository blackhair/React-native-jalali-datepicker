/**
 * Persian Calendar Picker Component
 *
 * Copyright 2016 Reza (github.com/rghorbani)
 * Licensed under the terms of the MIT license. See LICENSE file in the project root for terms.
 *
 * @flow
 */

'use strict';

const {
  Dimensions,
  StyleSheet,
} = require('react-native');

const scale = Dimensions.get('window').width / 375;

function normalize(size: number): number {
  return Math.round(scale * size);
}

const styles = StyleSheet.create({
  calendar: {
    height: normalize(320),
    marginTop: normalize(10),
  },
  dayWrapper: {
    width: normalize(50),
    height: normalize(40),
    backgroundColor: 'transparent',
  },
  dayButton: {
    width: normalize(50),
    height: normalize(40),
    alignSelf: 'center',
  },
  dayButtonSelected: {
    width: normalize(30),
    height: normalize(30),
    borderRadius: normalize(15),
    backgroundColor: '#5e23d2',
    alignSelf: 'center',
  },
  dayLabel: {
    fontSize: normalize(14),
    color: '#000',
    marginTop: normalize(6),
    alignSelf: 'center',
    fontFamily: 'IS'
  },

  dayLabelsWrapper: {
    flexDirection: 'row-reverse',
    marginBottom: normalize(10),
    borderBottomWidth: 1,
    borderTopWidth: 1,
    paddingTop: normalize(10),
    paddingBottom: normalize(10),
    alignSelf: 'center',
    backgroundColor: 'transparent',
    borderColor: 'rgba(0, 0, 0, 0.2)',
  },
  daysWrapper: {
    alignSelf: 'center',
  },
  dayLabels: {
    width: normalize(50),
    fontSize: normalize(10),
    color: '#000',
    fontFamily: 'IS_Light',
    textAlign: 'center',
  },
  selectedDay: {
    width: normalize(60),
    height:normalize(60),
    backgroundColor: '#5ce600',
    borderRadius: normalize(30),
    alignSelf: 'center',
    margin: 0,
  },
  monthLabel: {
    fontSize: normalize(16),
    color: '#000',
    fontFamily: 'IS_Light',
    width: normalize(180),
    textAlign: 'center',
  },
  headerWrapper: {
    alignItems: 'center',
    flexDirection: 'row-reverse',
    alignSelf: 'center',
    marginBottom: normalize(10),
    padding: normalize(5),
    paddingBottom: normalize(3),
    backgroundColor: 'transparent',
  },
  monthSelector: {
    width: normalize(80),
  },
  prev: {
    textAlign: 'left',
    fontSize: normalize(14),
    fontFamily: 'IS_Light',
  },
  next: {
    textAlign: 'right',
    fontSize: normalize(14),
    fontFamily: 'IS_Light',
  },
  yearLabel: {
    fontSize: normalize(14),
    fontWeight: 'bold',
    color: '#000',
    fontFamily: 'IS_Light',
    textAlign: 'center',
  },
  weeks: {
    flexDirection: 'column',
  },
  weekRow: {
    flexDirection: 'row-reverse',
  },
  disabledTextColor: {
    color: '#BBBBBB',
  },
});

module.exports = styles;

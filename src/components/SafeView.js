import React from 'react'
import PropTypes from 'prop-types'
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native'

// component styling
const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  container: {
    flex: 1,
  },
})

/**
 * SafeArea를 사용하기 위한 컴포넌트
 * @param children
 * @param style
 * @returns {JSX.Element}
 * @constructor
 */
export default function SafeView({ children, style }) {
  return (
    <SafeAreaView style={[styles.safeAreaView, style]}>
      <View style={[styles.container, style]}>{children}</View>
    </SafeAreaView>
  )
}
SafeView.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
}

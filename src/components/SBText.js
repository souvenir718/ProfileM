import React from 'react'
import { StyleSheet, Text } from 'react-native'
import PropTypes from 'prop-types'

const styles = StyleSheet.create({
  bold: {
    fontFamily: 'NPS-Bold',
  },
  medium: {
    fontFamily: 'NPS-regular',
  },
})

/**
 * Text component
 * @param children {string}
 * @param fontSize {number}
 * @param lineHeight {number}
 * @param letterSpacing {number}
 * @param style {Object}
 * @param type {string}
 * @returns {JSX.Element|null}
 * @constructor
 */
export default function SBText({
  children,
  fontSize = 12,
  lineHeight = 14,
  letterSpacing = -0.4,
  style,
  type = 'medium',
}) {
  const fontType = () => {
    if (type === 'medium') {
      return styles.medium
    } else {
      return styles.bold
    }
  }

  if (!children) return null
  return (
    <Text
      style={[
        { fontSize, lineHeight, letterSpacing },
        fontType(),
        style ?? style,
      ]}
    >
      {children}
    </Text>
  )
}

SBText.propTypes = {
  children: PropTypes.string,
  fontSize: PropTypes.number,
  lineHeight: PropTypes.number,
  letterSpacing: PropTypes.number,
  style: PropTypes.object,
  type: PropTypes.oneOf(['bold', 'medium']),
}

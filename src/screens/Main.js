import React from 'react'
import { View } from 'react-native'
import SafeView from '../components/SafeView'
import SBText from '../components/SBText'

/**
 * 메인화면
 * @returns {JSX.Element}
 * @constructor
 */
export default function Main() {
  return (
    <SafeView>
      <View>
        <SBText fontSize={20} lineHeight={24} type={'bold'}>
          KIM SU BIN
        </SBText>
      </View>
    </SafeView>
  )
}

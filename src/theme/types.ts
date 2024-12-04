import { SystemStyleObject } from '@styled-system/css'
import { HTMLAttributes } from 'react'
import { DefaultTheme } from 'styled-components/macro'
import { ColorProps, FlexboxProps, GridProps, LayoutProps, SpaceProps, TypographyProps } from 'styled-system'

export type Color = string
export type Colors = {
  darkMode: boolean

  // base
  white: Color
  black: Color

  // backgrounds / neutrals
  neutral8: Color
  neutral7: Color
  neutral6: Color
  neutral5: Color
  neutral4: Color
  neutral3: Color
  neutral2: Color
  neutral1: Color

  //primary colors
  primary1: Color
  primary2: Color

  // secondary colors
  secondary1: Color
  secondary2: Color
  secondary3: Color
  secondary4: Color

  // other
  red1: Color
  // red2: Color
  green1: Color
  // green2: Color
  yellow1: Color
  // yellow2: Color
  // blue1: Color
  // blue2: Color

  modalBG: Color
}

export type VariantProps = { theme?: DefaultTheme; variant?: string; tx?: string }
export type SxProps = { theme?: DefaultTheme; sx?: SystemStyleObject & GridProps }
export type CssProps = { theme?: DefaultTheme; __css?: SystemStyleObject }
export type BoxProps = SpaceProps &
  LayoutProps &
  TypographyProps &
  ColorProps &
  FlexboxProps &
  GridProps &
  VariantProps &
  SxProps
export type DivProps = BoxProps & HTMLAttributes<HTMLDivElement>
export type TextProps = HTMLAttributes<HTMLDivElement> & BoxProps

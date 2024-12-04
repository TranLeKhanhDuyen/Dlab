/* eslint-disable react/display-name */
import css, { get } from '@styled-system/css'
import React, { ForwardedRef, HTMLAttributes, ImgHTMLAttributes, forwardRef } from 'react'
import styled from 'styled-components/macro'
import { color, compose, flexbox, grid, layout, space, typography } from 'styled-system'

import { BoxProps, CssProps, SxProps, TextProps, VariantProps } from './types'

export const sx = ({ sx, theme }: SxProps) => css(sx)(theme)
const base = ({ __css, theme }: CssProps) => css(__css)(theme)
const variant = ({ theme, variant, tx = 'variants' }: VariantProps) =>
  variant && theme ? css(get(theme, tx + '.' + variant, get(theme, variant)))(theme) : {}

export const Box = styled.div<BoxProps>(
  {
    boxSizing: 'border-box',
    margin: 0,
    minWidth: 0,
  },
  base,
  variant,
  (props: any) => props.css,
  compose(space, layout, typography, color, flexbox),
  sx
)

export const Flex = styled<any>(Box)({
  display: 'flex',
})

export const Grid = styled(Box)<BoxProps>(
  {
    display: 'grid',
  },
  grid
)

export const Text = forwardRef((props: HTMLAttributes<HTMLDivElement>, ref: ForwardedRef<HTMLDivElement>) => (
  <Box ref={ref} tx="text" {...props} />
))

export const Svg = styled.svg<any>(compose(space, layout, typography, color, flexbox), sx)

const TextWrapper: React.FC<TextProps & { as?: string }> = styled(Text)`
  color: ${({ theme, color }: { theme: any; color?: string }) => (color ? theme.colors[color] : 'inherit')};
`
export const Link = forwardRef((props, ref: ForwardedRef<HTMLAnchorElement>) => (
  <Box ref={ref} as="a" variant="link" {...props} />
))

export const Type = {
  H1({ children, ...props }: TextProps) {
    return (
      <TextWrapper fontSize="64px" lineHeight="64px" {...props}>
        <h1>{children}</h1>
      </TextWrapper>
    )
  },
  H2({ children, ...props }: TextProps) {
    return (
      <TextWrapper fontSize={['40px', '48px']} lineHeight={['48px', '56px']} {...props}>
        <h2>{children}</h2>
      </TextWrapper>
    )
  },
  H3({ children, ...props }: TextProps) {
    return (
      <TextWrapper fontSize="40px" lineHeight="48px" {...props}>
        <h3>{children}</h3>
      </TextWrapper>
    )
  },
  H4({ children, ...props }: TextProps) {
    return (
      <TextWrapper fontSize="32px" lineHeight="40px" {...props}>
        <h4>{children}</h4>
      </TextWrapper>
    )
  },
  H5({ children, ...props }: TextProps) {
    return (
      <TextWrapper fontSize="24px" lineHeight="32px" {...props}>
        <h5>{children}</h5>
      </TextWrapper>
    )
  },
  Caption(props: TextProps) {
    return <TextWrapper fontSize="14px" lineHeight="20px" display="inline-block" {...props} />
  },
  Small(props: TextProps) {
    return <TextWrapper fontSize="12px" lineHeight="20px" display="inline-block" {...props} />
  },
  Large(props: TextProps) {
    return <TextWrapper fontSize="20px" lineHeight="32px" display="inline-block" {...props} />
  },
  Body(props: TextProps) {
    return <TextWrapper fontSize="16px" lineHeight="24px" display="inline-block" {...props} />
  },
  Hairline1(props: TextProps) {
    return <TextWrapper fontSize="16px" lineHeight="16px" fontWeight="bold" {...props} />
  },
  Hairline2(props: TextProps) {
    return <TextWrapper fontSize="12px" lineHeight="12px" fontWeight="bold" {...props} />
  },
  Span(props: TextProps) {
    return <TextWrapper display="inline" sx={{ overflowWrap: 'break-word' }} {...props} />
  },
}

export const Image = forwardRef(
  ({ sx, ...props }: BoxProps & ImgHTMLAttributes<HTMLImageElement>, ref: ForwardedRef<HTMLImageElement>) => (
    <Box ref={ref} as="img" maxWidth="100%" height="auto" verticalAlign="middle" sx={sx} {...props} />
  )
)

export const Card = forwardRef(
  (props: BoxProps & HTMLAttributes<HTMLDivElement>, ref: ForwardedRef<HTMLDivElement>) => (
    <Box ref={ref} variant="card" {...props} />
  )
)

/* eslint-disable react/display-name */
import css from '@styled-system/css'
import { HTMLAttributes } from 'react'
import styled from 'styled-components/macro'
import { LayoutProps, SpaceProps, compose, layout, space, variant } from 'styled-system'

import { sx } from 'theme/base'
import { SxProps, VariantProps } from 'theme/types'

export type ButtonProps = SxProps &
  LayoutProps &
  SpaceProps &
  VariantProps & { block?: boolean; isLoading?: boolean } & HTMLAttributes<HTMLButtonElement>

const Button = styled.button<ButtonProps>(
  css({
    appearance: 'none',
    display: 'inline-block',
    textAlign: 'center',
    textDecoration: 'none',
    px: 3,
    py: '12px',
    color: 'neutral1',
    bg: 'neutral6',
    border: 'normal',
    borderColor: 'neutral6',
    borderRadius: 'button',
  }),

  ({ theme, block, isLoading }) => `&:before {
    position: relative;
    top: 2px;
    content: '';
    border: 2px solid ${theme.colors.neutral1}16;
    border-top: 2px solid ${theme.colors.neutral2};
    border-radius: 50%;
    width: 16px;
    height: 16px;
    margin-right: 8px;
    animation: spin 1s linear infinite;
    display: ${isLoading ? 'inline-block' : 'none'};
  }
  display: ${block ? 'block' : 'inline-block'};
  width: ${block ? '100%' : 'auto'};
  `,
  variant({
    scale: 'buttons',
    variants: {
      primary: {},
      secondary: {},
      outline: {},
      ghost: {},
    },
  }),
  variant({
    prop: 'size',
    variants: {
      icon: {
        p: 1,
        borderRadius: '50%',
        lineHeight: 'calc(100% - 4px)',
      },
      xs: {
        px: '8px',
        py: '4px',
        fontSize: '14px',
        borderRadius: '6px',
      },
      sm: {
        px: '12px',
        py: 2,
      },
      md: {
        px: '14px',
        py: '16px',
      },
      xl: {
        px: '24px',
        py: 3,
        lineHeight: '16px',
        fontSize: '16px',
      },
    },
  }),
  compose(space, layout),
  sx
)

export default Button

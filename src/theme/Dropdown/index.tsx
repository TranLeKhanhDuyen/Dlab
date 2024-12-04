/* eslint-disable react/display-name */
import css, { SystemStyleObject } from '@styled-system/css'
import { ReactNode, useCallback, useState } from 'react'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'
import styled from 'styled-components/macro'
import { GridProps, LayoutProps } from 'styled-system'

import Button from 'theme/Button'
import { Box, Flex } from 'theme/base'
import { BoxProps } from 'theme/types'

type Direction = 'left' | 'right'

type DropdownProps = {
  children: ReactNode
  menu: ReactNode
  disabled?: boolean
  simple?: boolean
  showArrow?: boolean
  isHovered?: boolean
  dismissable?: boolean
  menuSx?: SystemStyleObject & GridProps
  buttonSx?: SystemStyleObject & GridProps
  direction?: Direction
  handleScroll?: any
}
const ToggleButton = styled(Button)(({ simple, sx }: { simple?: boolean; sx: SystemStyleObject & GridProps }) =>
  css({
    display: 'flex',
    alignItems: 'center',
    fontWeight: 'inherit',
    bg: 'transparent',
    border: 'normal',
    borderColor: 'neutral6',
    color: 'neutral1',
    py: 2,
    pl: 3,
    pr: simple ? 3 : 2,
    lineHeight: 'inherit',
    borderRadius: 'md',
    '&:hover:not([disabled])': {
      borderColor: 'neutral5',
    },
    '&[disabled]': {
      bg: 'transparent !important',
      borderColor: 'neutral7',
      color: 'neutral4',
      cursor: 'not-allowed',
    },
    ...sx,
  })
)

const DismissableArea = styled.div`
  position: fixed;
  height: 100vh;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 99;
  background: transparent;
`

const Menu = styled(Box)<BoxProps & { direction: Direction }>(
  ({ sx, direction }: { direction: Direction } & BoxProps) =>
    css({
      position: 'absolute',
      top: '4px',
      left: direction === 'left' ? 0 : 'auto',
      right: direction === 'right' ? 0 : 'auto',
      minWidth: '120px',
      borderRadius: 'md',
      bg: 'neutral8',
      padding: 2,
      zIndex: 100,
      boxShadow: 4,
      border: 'normal',
      borderColor: 'neutral7',
      ...sx,
    })
)

const Dropdown: React.FC<LayoutProps & DropdownProps> = ({
  children,
  menu,
  disabled,
  isHovered = false,
  showArrow = true,
  dismissable = true,
  handleScroll,
  simple,
  width,
  menuSx = {},
  buttonSx = {},
  direction = 'left',
}: DropdownProps & LayoutProps) => {
  const [showing, show] = useState(false)
  const toggleDropdown = useCallback(
    (e) => {
      e.stopPropagation()
      show((isShown) => !isShown)
    },
    [show]
  )

  return (
    <>
      <Flex
        onClick={() => dismissable && !isHovered && show(false)}
        onMouseEnter={() => isHovered && show(true)}
        onMouseLeave={() => isHovered && show(false)}
        flexDirection="column"
        width="fit-content"
        sx={{ position: 'relative', zIndex: '101' }}
      >
        <ToggleButton
          disabled={disabled}
          onClick={(e: any) => !isHovered && toggleDropdown(e)}
          //   onMouseEnter={() => isHovered && setIsOverButton(true)}
          //   onMouseLeave={() => isHovered && setIsOverButton(false)}
          width={width}
          sx={{
            ...buttonSx,
          }}
        >
          <Box mr={2} flex="1 1 auto" textAlign="left">
            {children}
          </Box>
          {simple && showArrow && (showing ? <FiChevronUp strokeWidth={3} /> : <FiChevronDown strokeWidth={3} />)}
          {!simple && showArrow && (
            <Flex
              width={32}
              height={32}
              alignItems="center"
              justifyContent="center"
              color="neutral5"
              sx={{
                border: '2px solid',
                borderColor: 'neutral6',
                borderRadius: 32,
              }}
            >
              {showing ? <FiChevronUp size={16} strokeWidth={3} /> : <FiChevronDown size={16} strokeWidth={3} />}
            </Flex>
          )}
        </ToggleButton>
        <Box
          sx={{
            position: 'relative',
          }}
        >
          {showing && (
            <>
              <Box sx={{ height: '4px', position: 'absolute', top: 0, width: '100%' }} />
              <Menu
                //   onMouseEnter={() => isHovered && setIsOverList(true)}
                //   onMouseLeave={() => isHovered && setIsOverList(false)}
                width={width}
                sx={{ ...menuSx }}
                direction={direction}
                {...(!!handleScroll && { onScroll: handleScroll })}
              >
                {menu}
              </Menu>
            </>
          )}
        </Box>
      </Flex>
      {showing && (
        <DismissableArea
          onClick={() => {
            show(false)
          }}
        />
      )}
    </>
  )
}

export const DropdownItem = styled(Button)(
  css({
    maxWidth: '100%',
    height: 'auto',
    p: 2,
    width: '100%',
    textAlign: 'left',
    borderRadius: 'md',
    border: 'none',
    fontWeight: 'normal',
    lineHeight: '24px',
    color: 'neutral1',
    bg: 'transparent',
    '&:hover': {
      bg: 'neutral7',
    },
  })
)

export default Dropdown

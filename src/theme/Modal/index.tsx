import { DialogContent, DialogOverlay } from '@reach/dialog'
import React, { useCallback } from 'react'
import { FiX } from 'react-icons/fi'
import styled, { DefaultTheme, css } from 'styled-components/macro'

import IconButton from 'theme/Button/IconButton'
import { Flex, Type } from 'theme/base'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const StyledDialogOverlay = styled(DialogOverlay)`
  &[data-reach-dialog-overlay] {
    z-index: 1001;
    background-color: transparent;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.modalBG};
    transition: all 200ms ease;
  }
`
// destructure to not pass custom props to Dialog DOM element
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const StyledDialogContent = styled(({ ...rest }) => <DialogContent {...rest} />).attrs({
  'aria-label': 'dialog',
})`
  overflow-y: visible;
  &[data-reach-dialog-content] {
    margin: auto;
    position: relative;
    background-color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.neutral6};
    border: 1px solid ${({ theme }: { theme: DefaultTheme }) => theme.colors.neutral8};
    box-shadow: ${({ theme }: { theme: DefaultTheme }) => theme.shadows[4]};
    width: ${({ width }) => width ?? '50vw'};
    padding: 12px;
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    ${({ theme }) => theme.mediaWidth.upToMedium`
      width: 65vw;
      margin: 0;
    `}
    ${({ theme, mobile }) => theme.mediaWidth.upToSmall`
      width:  90vw;
      padding: 8px;
      ${
        !!mobile &&
        css`
          width: 100vw;
          border-radius: 20px;
          border-bottom-left-radius: 0;
          border-bottom-right-radius: 0;
        `
      }
    `}
  }
`
const StyledDialogBody = styled.div`
  padding: 8px;
  overflow-y: auto;
  overflow-x: hidden;
  flex: 1 1 auto;
`

interface ModalProps {
  isOpen: boolean
  isOverflown?: boolean
  onDismiss?: () => void
  dismissable?: boolean
  width?: string
  maxWidth?: string
  minHeight?: number | false
  maxHeight?: number
  hasClose?: boolean
  initialFocusRef?: React.RefObject<any>
  footer?: React.ReactNode
  children?: React.ReactNode
  title?: React.ReactNode
}

export default function Modal({
  isOpen,
  isOverflown = true,
  onDismiss,
  width,
  maxWidth,
  minHeight = false,
  dismissable = true,
  maxHeight = 90,
  title,
  hasClose,
  initialFocusRef,
  footer,
  children,
}: ModalProps) {
  const onDismissRequest = useCallback(() => (dismissable && onDismiss ? onDismiss() : null), [dismissable, onDismiss])

  return (
    <>
      <StyledDialogOverlay isOpen={isOpen} onDismiss={onDismissRequest} initialFocusRef={initialFocusRef}>
        <StyledDialogContent
          {...{
            style: {
              overflowY: isOverflown ? 'auto' : 'visible',
              minHeight: minHeight ? `${minHeight}` : 'auto',
              maxHeight: maxHeight ? `${maxHeight}` : 'auto',
              maxWidth: maxWidth ? `${maxWidth}` : '420px',
            },
          }}
          aria-label="dialog content"
          width={width}
        >
          {(Boolean(title) || hasClose) && (
            <Flex alignItems="start" justifyContent={hasClose ? 'flex-end' : 'flex-start'} py={2} px={2}>
              {Boolean(title) && (
                <Flex flex="1 1 auto">
                  <Type.H5>{title}</Type.H5>
                </Flex>
              )}
              {hasClose && (
                <IconButton
                  variant="outline"
                  onClick={() => onDismiss && onDismiss()}
                  icon={<FiX size={20} strokeWidth={3} />}
                  width={32}
                  height={32}
                />
              )}
            </Flex>
          )}
          <StyledDialogBody>{children}</StyledDialogBody>
          {!!footer && (
            <Flex sx={{ flex: '1 1 auto', pt: 2 }} justifyContent={'flex-end'} px={2}>
              {footer}
            </Flex>
          )}
        </StyledDialogContent>
      </StyledDialogOverlay>
    </>
  )
}

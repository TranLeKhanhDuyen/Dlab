import { useMemo, useRef, useState } from 'react'
import { FiCheck, FiCopy } from 'react-icons/fi'
import { toast } from 'react-toastify'

import { Box, Flex, Type } from 'theme/base'

import Button, { ButtonProps } from '.'

const CopyButton = ({
  value,
  children,
  isOnlyIcon = false,
  type = 'button',
  block = false,
  sx,
  direction = 'center',
  ...props
}: ButtonProps & {
  type?: 'button' | 'submit' | 'reset'
  isOnlyIcon?: boolean
  direction?: 'center' | 'right'
  fontSize?: 'sm' | 'md' | 'lg'
  value: string
}) => {
  const [isCopied, setIsCopied] = useState(false)
  const ref = useRef<HTMLButtonElement>(null)

  async function copyTextToClipboard(text: string) {
    if ('clipboard' in navigator) {
      return await navigator.clipboard.writeText(text)
    } else {
      return document.execCommand('copy', true, text)
    }
  }

  const copyIcon = useMemo(() => (isCopied ? <FiCheck /> : <FiCopy />), [isCopied])
  // onClick handler function for the copy button
  const handleCopyClick = (e: any) => {
    e.preventDefault()
    e.stopPropagation()
    // Asynchronously call copyTextToClipboard
    copyTextToClipboard(value)
      .then(() => {
        // If successful, update the isCopied state value
        setIsCopied(true)
        if (ref.current) {
          ref.current.blur()
        }
        setTimeout(() => {
          setIsCopied(false)
        }, 1500)
      })
      .catch((err: any) => {
        toast.error(<Type.Small color="red1">{err}</Type.Small>)
      })
  }

  return (
    <>
      <Button
        type={type}
        onClick={handleCopyClick}
        ref={ref}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: direction === 'center' ? 'center' : 'space-between',
          flexDirection: direction === 'right' ? 'row-reverse' : 'row',
          '&:hover, &:focus': {
            bg: 'neutral7',
          },
          ...sx,
        }}
        {...props}
      >
        {isOnlyIcon ? (
          <Box
            // mr={direction === 'center' ? 2 : 0}
            // ml={direction === 'right' ? 2 : 0}
            verticalAlign="middle"
            lineHeight={0}
          >
            {copyIcon}
          </Box>
        ) : (
          <Flex alignItems="center" width={block ? '100%' : 'auto'}>
            {children}
            <Box ml={1} sx={{ transform: 'translateY(2px)' }} color="neutral3">
              {copyIcon}
            </Box>
          </Flex>
        )}
      </Button>
    </>
  )
}

export default CopyButton

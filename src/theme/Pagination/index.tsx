import { Trans } from '@lingui/macro'
import { useCallback } from 'react'
import { FiChevronLeft, FiChevronRight, FiMoreHorizontal } from 'react-icons/fi'
import styled from 'styled-components/macro'

import { DOTS, usePagination } from 'hooks/helpers/usePagination'
import Button from 'theme/Button'
import ButtonWithIcon from 'theme/Button/ButtonWithIcon'
import IconButton from 'theme/Button/IconButton'
import { Flex, Type } from 'theme/base'

type PaginationProps = {
  currentPage: number
  totalPage: number
  onPageChange: (page: number) => void
  siblingCount?: number
  hideArrows?: boolean
}

const PaginatedButton = styled(Button)`
  margin-right: 0.5em;
`

const DottedButton = styled(ButtonWithIcon)`
  padding: 4px;
  border: none;
  align-items: flex-end;
  justify-content: flex-end;
  position: relative;
  cursor: auto;
  pointer-events: none;

  background-color: transparent;

  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: transparent;
    & > div:first-child svg {
      opacity: 0;
    }
    & > :not(:first-child) {
      opacity: 1;
    }
  }
  & > :not(:first-child) {
    transition: all 0.2s ease-in-out;

    opacity: 0;
    position: absolute;
    top: 10px;
    right: 12px;
  }
`

const Pagination = ({
  currentPage,
  totalPage,
  onPageChange,
  siblingCount = 1 /*, hideArrows = false */,
}: PaginationProps) => {
  const paginationRange = usePagination({
    currentPage,
    totalPage,
    siblingCount,
  })

  const handleOnClick = useCallback(
    (page: number) => {
      onPageChange(page)
    },
    [onPageChange]
  )

  const onNext = useCallback(() => {
    onPageChange(currentPage + 1)
  }, [currentPage, onPageChange])

  const onPrevious = useCallback(() => {
    onPageChange(currentPage - 1)
  }, [currentPage, onPageChange])

  const lastPage = paginationRange[paginationRange.length - 1]

  return totalPage <= 1 ? (
    <Type.Caption color="neutral4">
      <Trans>You&#39;ve read all!</Trans>
    </Type.Caption>
  ) : (
    <Flex>
      <IconButton
        icon={<FiChevronLeft />}
        mr={1}
        borderRadius="md"
        size={28}
        sx={{ px: 1, py: '4px', borderRadius: '6px' }}
        disabled={currentPage === 1}
        onClick={onPrevious}
      />
      {paginationRange.map((pageNumber, i) => {
        if (pageNumber === DOTS) {
          return <DottedButton key={`${DOTS}${i + 1}`} icon={<FiMoreHorizontal size={14} />} />
        }
        return (
          <PaginatedButton
            key={pageNumber}
            onClick={() => handleOnClick(Number(pageNumber))}
            variant={currentPage === pageNumber ? 'primary' : 'outline'}
            size="xs"
          >
            {pageNumber}
          </PaginatedButton>
        )
      })}
      <IconButton
        icon={<FiChevronRight />}
        mr={1}
        borderRadius="md"
        size={28}
        sx={{ px: 1, py: '4px', borderRadius: '6px' }}
        disabled={currentPage === lastPage}
        onClick={onNext}
      />
    </Flex>
  )
}

export default Pagination

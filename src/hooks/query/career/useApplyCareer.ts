import { useMutation } from 'react-query'

import { applyCareerApi } from 'apis/careerApis'
import { ApplyFormValue } from 'pages/types'

const useApplyCareer = () =>
  useMutation<any | null, Error, ApplyFormValue>('apply-career', applyCareerApi, {
    retry: 0,
  })

export default useApplyCareer

import { useMutation } from 'react-query'

import { UploadFileResponseError, UploadFileResponseSuccess } from 'apis/api'
import { uploadFileApi } from 'apis/careerApis'

const useUploadResume = () =>
  useMutation<UploadFileResponseSuccess, UploadFileResponseError, FormData>('apply-career', uploadFileApi, {
    retry: 0,
  })

export default useUploadResume

import { useQuery } from 'react-query'

import { getCareerApi } from 'apis/careerApis'

const useCareer = (id?: string) =>
  useQuery<any | null, Error>(['career', id], () => (id != null ? getCareerApi(id) : null), {
    enabled: id != null,
  })

export default useCareer

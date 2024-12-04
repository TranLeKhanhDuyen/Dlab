import { useQuery } from 'react-query'

import { getCareersApi } from 'apis/careerApis'

const useCareers = () => useQuery<any | null, Error>(['careers'], () => getCareersApi())

export default useCareers

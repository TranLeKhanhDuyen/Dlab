export type ApiListResponse<T> = {
  count: number
  next: string | null
  previous: string | null
  results: T[]
}

export interface UploadFileResponseError {
  message: string[]
  statusCode: number
  timestamp: string
}

type UploadedFile = {
  createdAt: string
  filename: string
  key: string
  size: number
  updatedAt: string
  url: string
}
export interface UploadFileResponseSuccess {
  data: UploadedFile[]
  status: string
}

export type UploadFileResponse = UploadFileResponseSuccess & UploadFileResponseError

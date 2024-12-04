/* eslint-disable react/display-name */

/* eslint-disable react/prop-types */
import { forwardRef, useEffect, useRef, useState } from 'react'
import { SubmitHandler, UseFormRegister, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import styled from 'styled-components/macro'

import ApplyButton from 'components/common/ApplyButton'
import InputFile from 'components/common/FileInput'
import useApplyCareer from 'hooks/query/career/useApplyCareer'
import useUploadResume from 'hooks/query/career/useUploadResume'
import { ApplyFormValue } from 'pages/types'
import Input from 'theme/Input'
import { InputProps } from 'theme/Input/types'
import { Box, Type } from 'theme/base'
import { SxProps } from 'theme/types'

const Label = styled.label`
  margin-bottom: 8px;
  display: block;
  font-size: 14px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.neutral3};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    & {
      font-size: 12px;
      line-height: 16px;
      margin-bottom: 0;
    }
  }
`

const Form = styled.form.attrs({
  enctype: 'multipart/form-data',
})``
const InputsContainer = styled(Box)`
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: repeat(3, auto);
  grid-auto-columns: 1fr 1fr;
  gap: 24px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    & {
      grid-template-rows: repeat(6, auto);
      grid-auto-columns: 1fr;
      gap: 24px;
    }
  }
`

const Notification = styled(Type.Caption)`
  position: absolute;
  bottom: -20px;
  width: 100%;
  height: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: ${({ theme }) => theme.colors.red1};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    & {
      font-size: 12px;
      bottom: -16px;
    }
  }
`

const InputWithLabel = forwardRef<
  HTMLInputElement,
  { label: string; error?: string } & InputProps & SxProps & ReturnType<UseFormRegister<ApplyFormValue>>
>(({ label, required, onChange, onBlur, error, name }, ref) => {
  return (
    <Box mb={['4px', '0']} sx={{ position: 'relative' }}>
      <Label>
        {label}{' '}
        {required && (
          <Type.Body lineHeight={['16px', '24px']} fontSize={['12px', '14px']} color="red1">
            *
          </Type.Body>
        )}
      </Label>
      <Input sx={{ width: '100%', borderRadius: '2px' }} name={name} onChange={onChange} onBlur={onBlur} ref={ref} />
      {error && <Notification>{error}</Notification>}
    </Box>
  )
})

const InputFileWithLabel = forwardRef<
  HTMLInputElement,
  { label: string; error?: string; fileName: string } & InputProps & SxProps
>(({ label, required, onChange, onBlur, error, name, fileName }, ref) => {
  return (
    <Box mb={['4px', '0']} sx={{ position: 'relative' }}>
      <Label>
        {label}{' '}
        {required && (
          <Type.Body lineHeight={['16px', '24px']} fontSize={['12px', '14px']} color="red1">
            *
          </Type.Body>
        )}
      </Label>
      <InputFile sx={{ width: '100%' }} name={name} onChange={onChange} onBlur={onBlur} ref={ref} fileName={fileName} />
      {error && <Notification>{error}</Notification>}
    </Box>
  )
})

function ApplyForm({ jobId, onDismiss }: { jobId: string; onDismiss: () => void }) {
  const defaultFormValues = {
    jobId,
    cvLink: '',
    name: '',
    email: '',
    phoneNumber: '',
    linkedinUrl: '',
    websiteUrl: '',
  }
  const { register, handleSubmit, setError, setFocus, setValue, resetField, clearErrors, formState, reset } =
    useForm<ApplyFormValue>({
      defaultValues: defaultFormValues,
    })

  const { errors } = formState

  //Upload resume
  const [fileName, setFileName] = useState('')
  const {
    data: uploadedFile,
    //error: uploadedError,
    isError: isUploadFileError,
    isSuccess: isUploadFileSuccess,
    isLoading: isUploadingFile,
    mutate: uploadFile,
  } = useUploadResume()

  const fileChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null
    if (file) {
      resetField('cvLink')
      setFileName(file.name)
      const fileExtensionIsSupport = ['docx', 'doc', 'pdf'].some((item) => file.name.split('.').pop() === item)
      if (!fileExtensionIsSupport) {
        resetField('cvLink')
        setError('cvLink', { type: 'custom', message: 'File extension is not supported' })
        return
      }
      const form = new FormData()
      form.append('document', file)
      uploadFile(form)
    }
    if (!file && !uploadFile) {
      setFileName('')
    }
  }

  useEffect(() => {
    if (isUploadFileError) {
      resetField('cvLink')
      setFileName('')
      setError('cvLink', {
        type: 'custom',
        message: 'An Error occur. Try Again',
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isUploadFileError])
  useEffect(() => {
    if (isUploadFileSuccess) {
      clearErrors('cvLink')
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setValue('cvLink', uploadedFile!.data[0].url)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isUploadFileSuccess, uploadedFile])

  // Submit Form
  const {
    mutate: submitForm,
    //data: appliedData,
    isLoading: isApplying,
    isError: isAppliedFail,
    isSuccess: isAppliedSuccess,
    error: appliedError,
  } = useApplyCareer()

  const prevSubmitData = useRef<ApplyFormValue>()

  const onSubmit: SubmitHandler<ApplyFormValue> = (data) => {
    prevSubmitData.current = data
    submitForm(data)
  }

  const toastRef = useRef<any>()

  useEffect(() => {
    if (isApplying) {
      toastRef.current = toast.loading('Applying', {
        position: 'bottom-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    }
  }, [isApplying])
  useEffect(() => {
    if (isAppliedSuccess) {
      toast.update(toastRef.current, {
        render: 'Apply Successed',
        type: 'success',
        isLoading: false,
        position: 'bottom-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      })
      onDismiss()
    }
  }, [isAppliedSuccess, onDismiss])
  useEffect(() => {
    if (isAppliedFail) {
      toast.update(toastRef.current, {
        render: appliedError.message,
        type: 'error',
        isLoading: false,
        position: 'bottom-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      })
      setFileName('')
      reset(defaultFormValues)

      setTimeout(() => {
        setFocus('name')
      }, 100)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAppliedFail])

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <InputsContainer>
        <InputWithLabel
          label="Full Name"
          {...register('name', {
            required: { value: true, message: 'Name is required' },
            minLength: { value: 2, message: 'Name is not valid' },
          })}
          required={true}
          error={errors.name && errors.name.message}
        />
        <InputWithLabel
          label="Email"
          type="email"
          {...register('email', {
            required: { value: true, message: 'Email is required' },
            pattern: {
              value: /^[A-Z][A-Z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/i,
              message: 'Email is not valid',
            },
          })}
          required={true}
          error={errors.email && errors.email.message}
        />
        <InputWithLabel
          label="Phone"
          {...register('phoneNumber', {
            required: { value: true, message: 'Phone number is required' },
            pattern: {
              value: /(\+84|84|0)+([0-9]{9})\b/g,
              message: 'Phone number is not valid',
            },
          })}
          required={true}
          error={errors.phoneNumber && errors.phoneNumber.message}
        />
        <InputFileWithLabel
          type="file"
          fileName={fileName}
          onChange={fileChangeHandler}
          label="Resume/CV"
          required={true}
          error={errors.cvLink && errors.cvLink.message}
        />
        <input
          hidden
          {...register('cvLink', {
            required: { value: true, message: 'Resume/CV is required' },
          })}
        />
        <InputWithLabel label="Linkedin URL" {...register('linkedinUrl')} />
        <InputWithLabel label="Personal Website URL" {...register('websiteUrl')} />
      </InputsContainer>
      <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'center', width: '100%' }}>
        <ApplyButton
          px={['12px', '16px']}
          py={['8px', '12px']}
          disabled={Object.keys(errors).length !== 0 || isUploadingFile || isUploadFileError || isApplying}
          isLoading={isUploadingFile}
          mt={[3, 4]}
        >
          {isUploadingFile ? 'Uploading' : 'Submit'}
        </ApplyButton>
      </Box>
    </Form>
  )
}

export default ApplyForm

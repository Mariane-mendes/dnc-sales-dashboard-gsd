import styled from 'styled-components'
import { StyledButton, StyledInput } from '@/components'
import { FormComponentProps } from '@/pages/types'
import { pxToRem } from '@/utils'

export const BannerImage = styled.div`
  display: flex;
  flex-direction: column;
  row-grap: ${pxToRem(16)};
`

function FormComponent(props: FormComponentProps) {
  const { inputs, buttons, message } = props
  return (
    <form>
      {inputs.map((inputProps, index) => (
        <StyledInput key={index} {...inputProps} />
      ))}
      {buttons.map((buttonProps, index) => (
        <StyledButton key={index} {...buttonProps} />
      ))}
      {message && (
        <div style={{ color: message.type === 'error' ? 'red' : 'green' }}>
          {message.msg}
        </div>
      )}
    </form>
  )
}

export default FormComponent

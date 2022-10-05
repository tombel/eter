import React from 'react'

export interface ISignature {
  signature: string
  signatureId: string
}

export interface ISignatureGeneratorState {
  isLoading: boolean
  status: 'idle' | 'fetching' | 'error' | 'success'
  error?: unknown | null
  data?: ISignature
}

export interface ISignatureUseGenerator extends ISignatureGeneratorState {
  generate: () => void
}

const initialState: ISignatureGeneratorState = {
  isLoading: false,
  status: 'idle',
  error: null,
}

function reducer(
  state: ISignatureGeneratorState,
  action: {
    type: string
    payload?: unknown
  },
): ISignatureGeneratorState {
  switch (action.type) {
    case 'GENERATE_SINGNATURE': {
      return {
        ...state,
        isLoading: true,
        status: 'fetching',
        error: null,
      }
    }

    case 'SIGNATURE_GENEREATED': {
      return {
        ...state,
        isLoading: false,
        status: 'success',
        data: action.payload as ISignature,
        error: null,
      }
    }

    case 'ERROR_SIGNATURE': {
      return {
        ...state,
        isLoading: false,
        error: action.payload['code'],
      }
    }
    default: {
      throw new Error('Action not exist')
    }
  }
}

async function getSignature(address: string): Promise<ISignature> {
  const response = await fetch(`/api/getSignature/${address}`)
  return await response.json()
}

export function useSignerGenerator({ address }: { address: string }): ISignatureUseGenerator {
  const [state, dispatch] = React.useReducer(reducer, initialState)

  const generate = React.useCallback(
    function (): void {
      dispatch({
        type: 'GENERATE_SINGNATURE',
      })
      getSignature(address)
        .then((signature) => {
          dispatch({
            type: 'SIGNATURE_GENEREATED',
            payload: signature,
          })
        })
        .catch((error) => {
          return dispatch({
            type: 'ERROR_SIGNATURE',
            payload: error,
          })
        })
    },
    [address],
  )

  return { isLoading: state.isLoading, status: state.status, data: state.data, generate }
}

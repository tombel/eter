import React from 'react'

export interface ISignature {
  signature: string
  signatureId: string
  tokenPrice: string
  isMintAllowed: boolean
  waveIndex: number
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
        data: null,
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
        data: null,
        error: action.payload['code'],
      }
    }
    default: {
      throw new Error('Action not exist')
    }
  }
}

async function getMintData(
  address: string,
  amount: number,
  signal: AbortSignal,
): Promise<ISignature> {
  const response = await fetch(`/api/mintdata/${address}/${amount}`, {
    signal,
  })
  if (response.status !== 200) {
    throw new Error((await response.json())?.code)
  }
  return await response.json()
}

export function useSignerGenerator({
  address,
  amount,
}: {
  address: string
  amount: number
}): ISignatureUseGenerator {
  const [state, dispatch] = React.useReducer(reducer, initialState)

  React.useEffect(() => {
    const controller = new AbortController()
    const signal = controller.signal
    if (state.isLoading) {
      getMintData(address, amount, signal)
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
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.isLoading])

  const generate = function (): void {
    dispatch({
      type: 'GENERATE_SINGNATURE',
    })
  }

  return { isLoading: state.isLoading, status: state.status, data: state.data, generate }
}

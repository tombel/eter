import React from 'react'

const initialState: INFTListState = {
  isLoading: false,
  status: 'idle',
}

export interface INFTInfo {
  chain: string
  contractType: string
  tokenAddress: string
  tokenId: string
  tokenUri: string
  name: string
  symbol: string
  amount: number
  blockNumberMinted: string
  blockNumber: string
  ownerOf: string
  tokenHash: string
  lastMetadataSync: string
  lastTokenUriSync: string
}

export interface INFTListState {
  isLoading: boolean
  status: 'idle' | 'fetching' | 'error' | 'success'
  error?: unknown | null
  data?: INFTInfo[] | null
}

async function getNFTData(address: string, signal: AbortSignal): Promise<INFTInfo[]> {
  const response = await fetch(`/api/getWalletNFTs/${address}/`, {
    signal,
  })
  if (response.status !== 200) {
    throw new Error((await response.json())?.code)
  }
  return await response.json()
}

function reducer(
  state: INFTListState,
  action: {
    type: string
    payload?: unknown
  },
): INFTListState {
  switch (action.type) {
    case 'FETCH_NFT_LIST': {
      return {
        ...state,
        isLoading: true,
        status: 'fetching',
        error: null,
        data: null,
      }
    }

    case 'FETCH_NFT_LIST_SUCCESS': {
      return {
        ...state,
        isLoading: false,
        status: 'success',
        data: action.payload as INFTInfo[],
        error: null,
      }
    }

    case 'FETCH_NFT_LIST_ERROR': {
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

export interface IUseNFTList extends INFTListState {
  run: () => void
}

export function useNFTList(address: string): IUseNFTList {
  const [state, dispatch] = React.useReducer(reducer, initialState)

  React.useEffect(() => {
    const controller = new AbortController()
    const signal = controller.signal
    if (state.isLoading) {
      getNFTData(address, signal)
        .then((data) => {
          dispatch({
            type: 'FETCH_NFT_LIST_SUCCESS',
            payload: data,
          })
        })
        .catch((error) => {
          return dispatch({
            type: 'FETCH_NFT_LIST_ERROR',
            payload: error,
          })
        })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.isLoading])

  const run = function (): void {
    dispatch({
      type: 'FETCH_NFT_LIST',
    })
  }

  return {
    isLoading: state.isLoading,
    status: state.status,
    data: state.data,
    run,
  }
}

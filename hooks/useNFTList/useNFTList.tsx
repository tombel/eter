import React from 'react'

const initialState: INFTListState = {
  isLoading: false,
  status: 'idle',
}

export interface INFTInfo {
  tokenId: string
  title: string
  rawMetadata: {
    image_url: string
    description: string
  }
  token_uri: string
}

interface GetNFTsPayloadData {
  ownedNfts: INFTInfo[] | null
}

export interface INFTListState {
  isLoading: boolean
  status: 'idle' | 'fetching' | 'error' | 'success'
  error?: unknown | null
  data?: GetNFTsPayloadData
}

async function getNFTData(address: string, signal: AbortSignal): Promise<GetNFTsPayloadData> {
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
        data: action.payload as GetNFTsPayloadData,
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

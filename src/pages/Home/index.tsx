import React from 'react'
import styled from 'styled-components'
import { useActiveWeb3React } from '../../hooks'
import HomeBanner from './HomeBanner'
import Pools from './Pools'
import AllTokens from './AllTokens'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const PageWrapper = styled.div`
  max-width: 1230px;
  width: 100%;
  padding: 0 15px;
`

export default function Home() {
  const { chainId } = useActiveWeb3React()
  const queryClient = new QueryClient()
  console.log(chainId)

  return (
    <QueryClientProvider client={queryClient}>
      <PageWrapper>
        <HomeBanner />
        <Pools />
        <AllTokens />
      </PageWrapper>
    </QueryClientProvider>
  )
}

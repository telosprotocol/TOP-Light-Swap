import { TokenList } from '@uniswap/token-lists'
/**
 * Contains the logic for resolving a list URL to a validated token list
 * @param listUrl list url
 * @param resolveENSContentHash resolves an ens name to a contenthash
 */
export default async function getTokenList(
  listUrl: string,
  resolveENSContentHash: (ensName: string) => Promise<string>
): Promise<TokenList> {
  console.log(listUrl, resolveENSContentHash)
  return Promise.resolve({
    name: 'Uniswap Default List',
    timestamp: '2021-01-21T23:57:10.982Z',
    version: {
      major: 2,
      minor: 0,
      patch: 0
    },
    tags: {},
    logoURI: 'ipfs://QmNa8mQkrNKp1WEEeGjFezDmDeodkWRevGFN8JCV7b4Xir',
    keywords: ['uniswap', 'default'],
    tokens: []
  })
}

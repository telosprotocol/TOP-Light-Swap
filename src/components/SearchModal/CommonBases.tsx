import { ChainId, Currency } from '../../module/uniswapSdk'

export default function CommonBases({
  chainId,
  onSelect,
  selectedCurrency
}: {
  chainId?: ChainId
  selectedCurrency?: Currency | null
  onSelect: (currency: Currency) => void
}) {
  console.log(chainId, onSelect, selectedCurrency)
  return null
  // return (
  //   <AutoColumn gap="md">
  //     <AutoRow>
  //       <Text fontWeight={500} fontSize={14}>
  //         Common bases
  //       </Text>
  //       <QuestionHelper text="These tokens are commonly paired with other tokens." />
  //     </AutoRow>
  //     <AutoRow gap="4px">
  //       <BaseWrapper
  //         onClick={() => {
  //           if (!selectedCurrency || !currencyEquals(selectedCurrency, ETHER)) {
  //             onSelect(ETHER)
  //           }
  //         }}
  //         disable={selectedCurrency === ETHER}
  //       >
  //         <CurrencyLogo currency={ETHER} style={{ marginRight: 8 }} />
  //         <Text fontWeight={500} fontSize={16}>
  //           ETH
  //         </Text>
  //       </BaseWrapper>
  //       {(chainId ? SUGGESTED_BASES[chainId] : []).map((token: Token) => {
  //         const selected = selectedCurrency instanceof Token && selectedCurrency.address === token.address
  //         return (
  //           <BaseWrapper onClick={() => !selected && onSelect(token)} disable={selected} key={token.address}>
  //             <CurrencyLogo currency={token} style={{ marginRight: 8 }} />
  //             <Text fontWeight={500} fontSize={16}>
  //               {token.symbol}
  //             </Text>
  //           </BaseWrapper>
  //         )
  //       })}
  //     </AutoRow>
  //   </AutoColumn>
  // )
}

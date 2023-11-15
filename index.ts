const api = 'https://api.frankfurter.app'

interface CurrencyResult {
    amount: number
    base: string
    date: string
    rates: {
        [a: string]: number
    }
}

type Currency = 'USD' | 'JPY' | 'THB'

const convertCurrent = ({
    from,
    to,
    amount
}: {
    amount: number
    from: Currency
    to: Currency
}) => {
    return fetch(`${api}/latest?from=${from}&to=${to}&amount=${amount}`)
        .then((x) => x.json() as any as CurrencyResult)
        .then((a) => a)
}

const main = async () => {
    const currency = await convertCurrent({
        amount: 100,
        from: 'THB',
        to: 'USD'
    })

    console.log(currency)    
}

main()

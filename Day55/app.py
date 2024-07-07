import requests

def get_exchange_rates(api_key):
    url = 'https://currency-conversion-and-exchange-rates.p.rapidapi.com/latest'
    headers = {
        'x-rapidapi-host': 'currency-conversion-and-exchange-rates.p.rapidapi.com',
        'x-rapidapi-key': api_key
    }
    params = {'from': 'USD', 'to': 'EUR,GBP'}

    response = requests.get(url, headers=headers, params=params)
    if response.status_code == 200:
        return response.json()['rates']
    else:
        print("Error:", response.status_code, response.text)
        return None

def convert_currency(amount, from_currency, to_currency, rates):
    if from_currency == 'USD':
        conversion_rate = rates.get(to_currency)
    elif to_currency == 'USD':
        conversion_rate = 1 / rates.get(from_currency)
    else:
        conversion_rate = rates.get(to_currency) / rates.get(from_currency)

    if conversion_rate:
        return amount * conversion_rate
    else:
        print(f"Conversion rate not available for {from_currency} to {to_currency}.")
        return None

def main():
    api_key = '3d8e39372fmsh61ae04450125b9bp1c94ffjsnff32a2c72bd6'
    rates = get_exchange_rates(api_key)
    if rates:
        amount = float(input("Enter the amount to convert: "))
        from_currency = input("Enter the currency to convert from (USD): ").upper()
        to_currency = input("Enter the currency to convert to (EUR or GBP): ").upper()

        converted_amount = convert_currency(amount, from_currency, to_currency, rates)
        if converted_amount is not None:
            print(f"{amount} {from_currency} is equal to {converted_amount:.2f} {to_currency}")

if __name__ == "__main__":
    main()

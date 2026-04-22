import json
import pandas as pd
with open("orders.json") as f:
    data = json.load(f)
orders = pd.DataFrame(data['orders'])
print(orders)
print("Total Orders:", len(orders))
print("Total Sales:", orders['amount'].sum())
spending = orders.groupby('customer')['amount'].sum()
print(spending)
print("Highest Spending Customer:", spending.idxmax())
print(orders.groupby('product')['amount'].sum())
print(orders[orders['city'] == 'Hyderabad'])
print(orders[orders['amount'] > 10000])
print(orders['city'].value_counts())

sales = pd.read_csv("sales.csv")
sales['revenue'] = sales['quantity'] * sales['price']
print("Total Revenue:", sales['revenue'].sum())
print(sales.groupby('product')['revenue'].sum())
print(sales.groupby('product')['quantity'].sum())
print(sales.groupby('product')['quantity'].sum().idxmax())
emp_revenue = sales.groupby('emp_id')['revenue'].sum()
print(emp_revenue.idxmax(), emp_revenue.max())
print("Average Sale Value:", sales['revenue'].mean())
print(sales.groupby('product')['revenue'].sum()[
    sales.groupby('product')['revenue'].sum() > 100000
])

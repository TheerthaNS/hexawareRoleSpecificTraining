import pandas as pd
import numpy as np
df = pd.read_csv('expenses.csv')
df['amount'] = df['amount'].astype(float)
df['date'] = pd.to_datetime(df['date'])
df['month'] = df['date'].dt.to_period('M')
monthly_expense = df.groupby(
    ['month', 'category']
)['amount'].sum().unstack().fillna(0)
print(monthly_expense)
average_expense = np.mean(df['amount'])
print("Average Expense:", average_expense)
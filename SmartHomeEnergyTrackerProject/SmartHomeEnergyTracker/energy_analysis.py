import pandas as pd
import numpy as np

df = pd.read_csv("energy_usage.csv")

print("Original Dataset")
print(df)

df['timestamp'] = pd.to_datetime(df['timestamp'])

df['energy_kwh'] = pd.to_numeric(df['energy_kwh'], errors='coerce')

df = df.dropna()

print("\nCleaned Dataset")
print(df)

total_energy = np.sum(df['energy_kwh'])

average_energy = np.mean(df['energy_kwh'])

print("\nTotal Energy Consumption:", total_energy)

print("Average Energy Consumption:", average_energy)

room_summary = df.groupby('room_id')['energy_kwh'].sum()

print("\nRoom-wise Energy Summary")
print(room_summary)

device_summary = df.groupby('device_id')['energy_kwh'].mean()

print("\nDevice-wise Average Energy")
print(device_summary)
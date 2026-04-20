import json
import csv

def load_visits(file_path):
    with open(file_path, 'r') as f:
        visits = [line.strip() for line in f]
    return visits

def load_products(file_path):
    with open(file_path, 'r') as f:
        data = json.load(f)

    products = {}
    for p in data["products"]:
        products[p["product_id"]] = {
            "name": p["name"],
            "price": p["price"]
        }
    return products

def load_orders(file_path):
    orders = []
    with open(file_path, 'r') as f:
        reader = csv.DictReader(f)
        for row in reader:
            orders.append({
                "order_id": int(row["order_id"]),
                "customer": row["customer"],
                "product_id": int(row["product_id"]),
                "quantity": int(row["quantity"])
            })
    return orders

def calculate_product_revenue(orders, products):
    revenue = {}

    for order in orders:
        product = products[order["product_id"]]
        name = product["name"]
        price = product["price"]
        total = price * order["quantity"]

        revenue[name] = revenue.get(name, 0) + total

    return revenue

def calculate_customer_spending(orders, products):
    spending = {}

    for order in orders:
        customer = order["customer"]
        product = products[order["product_id"]]
        total = product["price"] * order["quantity"]

        spending[customer] = spending.get(customer, 0) + total

    return spending

def find_top_customer(spending):
    return max(spending, key=spending.get)

visits = load_visits("website_visits.txt")
products = load_products("products.json")
orders = load_orders("orders.csv")

print("All Visitors:", visits)

total_visits = len(visits)
print("Total Visits:", total_visits)

unique_visitors = set(visits)
print("Unique Visitors:", unique_visitors)

visit_count = {}
for v in visits:
    visit_count[v] = visit_count.get(v, 0) + 1

print("Visit Count:", visit_count)

most_frequent_visitor = max(visit_count, key=visit_count.get)
print("Most Frequent Visitor:", most_frequent_visitor)

print("\nProducts:")
for pid, info in products.items():
    print(info["name"], "-", info["price"])

most_expensive = max(products.values(), key=lambda x: x["price"])
least_expensive = min(products.values(), key=lambda x: x["price"])

print("Most Expensive Product:", most_expensive)
print("Least Expensive Product:", least_expensive)

print("\nOrders:")
for order in orders:
    print(order)

quantity_per_product = {}
for order in orders:
    pid = order["product_id"]
    quantity_per_product[pid] = quantity_per_product.get(pid, 0) + order["quantity"]

print("Quantity per Product:", quantity_per_product)

orders_per_customer = {}
for order in orders:
    customer = order["customer"]
    orders_per_customer[customer] = orders_per_customer.get(customer, 0) + 1

print("Orders per Customer:", orders_per_customer)

total_revenue = 0

print("\nOrder Revenue:")
for order in orders:
    product = products[order["product_id"]]
    revenue = product["price"] * order["quantity"]
    total_revenue += revenue
    print(f"Order {order['order_id']} Revenue:", revenue)

print("Total Revenue:", total_revenue)

product_revenue = calculate_product_revenue(orders, products)
print("Revenue per Product:", product_revenue)

highest_product = max(product_revenue, key=product_revenue.get)
print("Highest Selling Product:", highest_product)

customer_spending = calculate_customer_spending(orders, products)
print("Customer Spending:", customer_spending)

top_customer = find_top_customer(customer_spending)
print("Top Customer:", top_customer)

high_spenders = [c for c, amt in customer_spending.items() if amt > 50000]
print("Customers > 50,000:", high_spenders)

with open("sales_report.txt", "w", encoding="utf-8") as f:
    f.write("E-Commerce Sales Report\n")
    f.write(f"Total Website Visits: {total_visits}\n")
    f.write(f"Unique Visitors: {len(unique_visitors)}\n")
    f.write(f"Total Revenue: {total_revenue}\n\n")

    f.write(f"Top Customer: {top_customer}\n\n")

    f.write("Product Sales:\n")
    for product, revenue in product_revenue.items():
        f.write(f"{product} → {revenue}\n")

customers_who_ordered = set([o["customer"] for o in orders])
never_ordered = unique_visitors - customers_who_ordered
print("Visited but never ordered:", never_ordered)

low_visit_customers = [c for c in customers_who_ordered if visit_count.get(c, 0) <= 1]
print("Customers who ordered but visited <=1 time:", low_visit_customers)

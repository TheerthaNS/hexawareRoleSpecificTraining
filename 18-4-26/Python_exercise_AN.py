#login logs
with open("logins.txt", "r") as file:
    names = [line.strip() for line in file]
print("All names:", names)
print("Total logins:", len(names))
count = {}
for name in names:
    count[name] = count.get(name, 0) + 1
print("Login count per user:", count)
max_user = max(count, key=count.get)
print("Most active user:", max_user)
print("Unique users:", list(set(names)))

#numbers
with open("numbers.txt", "r") as file:
    numbers = [int(line.strip()) for line in file]
print("Numbers:", numbers)
print("Sum:", sum(numbers))
print("Max:", max(numbers))
print("Min:", min(numbers))
count = sum(1 for n in numbers if n > 50)
print("Numbers > 50:", count)

#students
import json
with open("students.json", "r") as file:
    data = json.load(file)
students = data["students"]
print([s["name"] for s in students])
print([s for s in students if s["course"] == "Python"])
top = max(students, key=lambda x: x["marks"])
print("Top student:", top)
avg = sum(s["marks"] for s in students) / len(students)
print("Average:", avg)
course_count = {}
for s in students:
    course = s["course"]
    course_count[course] = course_count.get(course, 0) + 1
print("Course count:", course_count)

#orders
import json
with open("orders.json", "r") as file:
    data = json.load(file)
orders = data["orders"]
print(orders)
total = sum(o["amount"] for o in orders)
print("Total revenue:", total)
spending = {}
for o in orders:
    customer = o["customer"]
    spending[customer] = spending.get(customer, 0) + o["amount"]
print("Spending:", spending)
top_customer = max(spending, key=spending.get)
print("Top customer:", top_customer)
order_count = {}
for o in orders:
    customer = o["customer"]
    order_count[customer] = order_count.get(customer, 0) + 1

print("Order count:", order_count)

#employees
import csv
with open("employees.csv", "r") as file:
    reader = csv.DictReader(file)
    employees = list(reader)
print([e["name"] for e in employees])
print([e for e in employees if e["department"] == "IT"])
avg = sum(int(e["salary"]) for e in employees) / len(employees)
print("Average salary:", avg)
top = max(employees, key=lambda x: int(x["salary"]))
print("Highest paid:", top)
dept_count = {}
for e in employees:
    dept = e["department"]
    dept_count[dept] = dept_count.get(dept, 0) + 1

print("Department count:", dept_count)

#sales
import csv
with open("sales.csv", "r") as file:
    reader = csv.DictReader(file)
    sales = list(reader)
total = sum(int(s["quantity"]) * int(s["price"]) for s in sales)
print("Total revenue:", total)
qty = {}
for s in sales:
    product = s["product"]
    qty[product] = qty.get(product, 0) + int(s["quantity"])
print("Quantity:", qty)
top_product = max(qty, key=qty.get)
print("Top product:", top_product)
revenue = {}
for s in sales:
    product = s["product"]
    rev = int(s["quantity"]) * int(s["price"])
    revenue[product] = revenue.get(product, 0) + rev
print("Revenue:", revenue)
print([p for p in revenue if revenue[p] > 50000])

#bonus challenge
import csv
summary = {}
with open("sales.csv", "r") as file:
    reader = csv.DictReader(file)
    for row in reader:
        product = row["product"]
        qty = int(row["quantity"])
        price = int(row["price"])
        if product not in summary:
            summary[product] = {"qty": 0, "revenue": 0}
        summary[product]["qty"] += qty
        summary[product]["revenue"] += qty * price
print("Product Sales Summary")
for product, data in summary.items():
    print(f"{product} → Qty: {data['qty']} Revenue: {data['revenue']}")

#remove duplicates
customers = [101,102,103,101,104,102,105]
unique_customers = list(set(customers))
print("Unique customers:", unique_customers)
print("Total unique customers:", len(unique_customers))

#frequency counter
numbers = [10,20,10,30,20,10,40]
freq = {}
for num in numbers:
    if num in freq:
        freq[num] += 1
    else:
        freq[num] = 1
print(freq)

#student mark analyzer
students = {
    "Rahul":85,
    "Sneha":92,
    "Arjun":78,
    "Priya":88
}
topper = max(students, key=students.get)
print("Topper:", topper)
avg = sum(students.values()) / len(students)
print("Average marks:", avg)
print("Above 85:")
for name, marks in students.items():
    if marks > 85:
        print(name)

#inventory management
inventory = {
    "laptop":10,
    "mouse":25,
    "keyboard":15
}
inventory["monitor"] = 8
inventory["laptop"] -= 2
print("Low stock items:")
for item, qty in inventory.items():
    if qty < 10:
        print(item, qty)

#email domain extractor
emails = [
    "user1@gmail.com",
    "user2@yahoo.com",
    "user3@gmail.com",
    "user4@outlook.com"
]
domain_count = {}
for email in emails:
    domain = email.split("@")[1]
    if domain in domain_count:
        domain_count[domain] += 1
    else:
        domain_count[domain] = 1
print(domain_count)

#set operations
classA = {"Rahul","Sneha","Amit","Neha"}
classB = {"Sneha","Amit","Karan","Riya"}
print("Both classes:", classA & classB)
print("Only Class A:", classA - classB)
print("All students:", classA | classB)

#product price update
products = {
    "Laptop":75000,
    "Mobile":30000,
    "Tablet":25000
}
for item in products:
    products[item] *= 1.10
print(products)

#word counter
sentence = "python is easy and python is powerful"
words = sentence.split()
freq = {}
for word in words:
    if word in freq:
        freq[word] += 1
    else:
        freq[word] = 1
print(freq)

#highest selling product
sales = [
    {"product":"Laptop","qty":5},
    {"product":"Mouse","qty":20},
    {"product":"Laptop","qty":3},
    {"product":"Keyboard","qty":10}
]
total_sales = {}
for item in sales:
    product = item["product"]
    qty = item["qty"]
    
    if product in total_sales:
        total_sales[product] += qty
    else:
        total_sales[product] = qty
print("Total sales:", total_sales)
highest = max(total_sales, key=total_sales.get)
print("Highest selling product:", highest)

#user login tracker
logins = [
    ("Rahul","10:00"),
    ("Sneha","10:10"),
    ("Rahul","11:00"),
    ("Arjun","11:15"),
    ("Sneha","11:30")
]
login_count = {}
for user, time in logins:
    if user in login_count:
        login_count[user] += 1
    else:
        login_count[user] = 1
print(login_count)

#E-commerce Analysis
orders = [
    {"order_id":1,"customer":"Rahul","amount":2500},
    {"order_id":2,"customer":"Sneha","amount":1800},
    {"order_id":3,"customer":"Rahul","amount":3200},
    {"order_id":4,"customer":"Amit","amount":1500}
]
total_spending = {}
order_count = {}
for order in orders:
    customer = order["customer"]
    amount = order["amount"]
    if customer in total_spending:
        total_spending[customer] += amount
        order_count[customer] += 1
    else:
        total_spending[customer] = amount
        order_count[customer] = 1
print("Total spending:", total_spending)
highest = max(total_spending, key=total_spending.get)
print("Highest spending customer:", highest)
print("Order count:", order_count)

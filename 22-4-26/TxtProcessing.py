from collections import Counter
with open("logins.txt", "r") as file:
    logins = [line.strip() for line in file]
print("All Names:", logins)
print("Total Logins:", len(logins))
unique_users = set(logins)
print("Unique Users:", unique_users)
login_counts = Counter(logins)
print("Login Counts:", login_counts)
top3 = login_counts.most_common(3)
print("Top 3 Users:", top3)
more_than_4 = {user:count for user, count in login_counts.items() if count > 4}
print("Users with >4 logins:", more_than_4)
print("Dictionary Output:", dict(login_counts))

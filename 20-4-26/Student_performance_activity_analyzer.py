import json
import csv

def load_students(file_path):
    with open(file_path, 'r') as f:
        return [line.strip() for line in f]

def load_marks(file_path):
    with open(file_path, 'r') as f:
        data = json.load(f)
    return data["students"]

def load_attendance(file_path):
    attendance = {}
    with open(file_path, 'r') as f:
        reader = csv.DictReader(f)
        for row in reader:
            attendance[row["name"]] = {
                "days_present": int(row["days_present"]),
                "total_days": int(row["total_days"])
            }
    return attendance

def calculate_average(marks_list):
    return sum(marks_list) / len(marks_list)

def attendance_percentage(days_present, total_days):
    return (days_present / total_days) * 100

def get_topper(students):
    return max(students, key=lambda x: x["marks"])

def get_grade(mark):
    if mark >= 90:
        return "A"
    elif mark >= 75:
        return "B"
    elif mark >= 50:
        return "C"
    else:
        return "Fail"

students = load_students("students.txt")
marks_data = load_marks("marks.json")
attendance_data = load_attendance("attendance.csv")

print("All Students:", students)

print("Total Entries:", len(students))

unique_students = set(students)
print("Unique Students:", unique_students)

count_dict = {}
for s in students:
    count_dict[s] = count_dict.get(s, 0) + 1
print("Frequency:", count_dict)

with open("unique_students.txt", "w") as f:
    for s in unique_students:
        f.write(s + "\n")

print("\nMarks Data:")
for s in marks_data:
    print(s["name"], s["marks"])

topper = get_topper(marks_data)
lowest = min(marks_data, key=lambda x: x["marks"])

print("Topper:", topper)
print("Lowest:", lowest)

marks_list = [s["marks"] for s in marks_data]
avg_marks = calculate_average(marks_list)
print("Average Marks:", avg_marks)

print("\nPython Course Students:")
for s in marks_data:
    if s["course"] == "Python":
        print(s["name"])

course_count = {}
for s in marks_data:
    course = s["course"]
    course_count[course] = course_count.get(course, 0) + 1
print("Course Count:", course_count)

attendance_percent = {}

print("\nAttendance:")
for name, data in attendance_data.items():
    percent = attendance_percentage(data["days_present"], data["total_days"])
    attendance_percent[name] = percent
    print(name, percent)

print("\nBelow 80% Attendance:")
for name, percent in attendance_percent.items():
    if percent < 80:
        print(name)

best_attendance = max(attendance_percent, key=attendance_percent.get)
print("Best Attendance:", best_attendance)

print("\nMarks Analysis:")
print("Highest:", max(marks_list))
print("Lowest:", min(marks_list))
print("Sum:", sum(marks_list))

courses_tuple = tuple([s["course"] for s in marks_data])
print("Courses Tuple:", courses_tuple)

courses_set = set(courses_tuple)
print("Unique Courses:", courses_set)

marks_dict = {s["name"]: s["marks"] for s in marks_data}
print("Marks Dict:", marks_dict)

attendance_dict = attendance_percent
print("Attendance Dict:", attendance_dict)

print("\nPass/Fail:")
for name, marks in marks_dict.items():
    print(name, "Pass" if marks >= 50 else "Fail")

print("\nGrades:")
for name, marks in marks_dict.items():
    print(name, get_grade(marks))

print("\nHigh Performers:")
for name in marks_dict:
    if marks_dict[name] > 80 and attendance_dict[name] > 85:
        print(name)

final_data = {}

for s in marks_data:
    name = s["name"]
    final_data[name] = {
        "marks": s["marks"],
        "attendance": attendance_dict[name],
        "course": s["course"],
        "grade": get_grade(s["marks"])
    }

print("\nFinal Data:")
for name, data in final_data.items():
    print(name, data)

eligible = []
improvement = []

for name, data in final_data.items():
    if data["marks"] >= 75 and data["attendance"] >= 80:
        eligible.append(name)
    else:
        improvement.append(name)

with open("report.txt", "w", encoding="utf-8") as f:
    f.write("Student Report\n")
    for name, data in final_data.items():
        f.write(f"{name} - Marks: {data['marks']} - Attendance: {data['attendance']:.1f}% - Grade: {data['grade']}\n")

with open("eligible_students.txt", "w") as f:
    for name in eligible:
        f.write(name + "\n")

print("\nFinal Output:")
print("Topper:", topper["name"])
print("Best Attendance:", best_attendance)
print("Average Marks:", round(avg_marks, 1))
print("Eligible Students:", ", ".join(eligible))
print("Students Needing Improvement:", ", ".join(improvement))

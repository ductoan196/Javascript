function Student(name, grade, sex){
    this.name = name,
    this.grade = grade,
    this.sex = sex
  }
  const student1 = new Student("John", 8, "M")
  const student2 = new Student("Sarah", 12, "F")
  const student3 = new Student("Bob", 16, "M")
  const student4 = new Student("Johnny", 2, "M")
  const student5 = new Student("Ethan", 4, "M")
  const student6 = new Student("Paula", 18, "F")
  const student7 = new Student("Donald", 5, "M")
  const student8 = new Student("Jennifer", 13, "F")
  const student9 = new Student("Courtney", 15, "F")
  const student10 = new Student("Jane", 9, "F")

  let students = [student1,student2,student3,student4,student5,student6,student7, student8, student9,student10]

//1
function avg_grade(student_list){
    let sum = student_list.reduce((sum, student) => sum+ student.grade,0)
    return sum/(student_list.length)
}
console.log(avg_grade(students))

//2
function avg_grade_gender(student_list,gender){
    let male_list = student_list.filter(student => student.sex ===gender)
    return avg_grade(male_list)
}
console.log(avg_grade_gender(students,"M"))

//3
console.log(avg_grade_gender(students,"F"))

//4
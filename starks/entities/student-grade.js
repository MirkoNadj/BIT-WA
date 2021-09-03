import { Grade } from "./grade";

export class CourseGrade {
    courseId;
    courseName;
    grade;
    studentGradeId;

    constructor(courseId, courseName, grade, studentsGradeId) {
        this.courseId = courseId;
        this.courseName = courseName;
        this.grade = grade;
        this.studentsGradeId = studentsGradeId;
    }
}

export class StudentCourseIntersection {
    id;
    fullName;
    courseGradeList;

    constructor(id, fullName, courseGradeList) {
        this.id = id;
        this.fullName = fullName;
        if(courseGradeList && courseGradeList.length > 0) {
            courseGradeList.forEach(item => {
                let grade = null;
                if(item.grade != null) {
                    grade = new Grade(item.grade.id, item.grade.value);
                }

                this.courseGradeList.push(new CourseGrade(item.courseId, item.courseName, grade, item.studentsGradeId));
            })
        }
    }
}
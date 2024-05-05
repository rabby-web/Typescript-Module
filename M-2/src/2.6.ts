{
  // constrain

  const addCourseToStudent = <
    T extends { id: number; name: string; email: string }
  >(
    student: T
  ) => {
    const course = "Next level web development course";
    return {
      ...student,
      course,
    };
  };

  const student1 = addCourseToStudent<{
    id: number;
    name: string;
    email: string;
    devType: string;
  }>({
    id: 222,
    name: "Mr X",
    email: "abc@gmail.com",
    devType: "NL",
  });
  const student2 = addCourseToStudent<{
    id: number;
    name: string;
    email: string;
    watch: string;
  }>({
    id: 233,
    name: "Mr Y",
    email: "xyz@gmail.com",
    watch: "NL",
  });

  //
}

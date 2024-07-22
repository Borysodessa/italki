const sortValue = {
  orderByLessons: (item) => item.teacher_info.session_count,
  orderByStudents: (item) => item.teacher_info.student_count,
  orderByRatio: (item) =>
    item.teacher_info.session_count / item.teacher_info.student_count,
  orderByPrice: (item) => item.course_info.min_price,
};

export const sorting = (anyFilter, sortBy, changeRotate) => {
  return anyFilter.toSorted((a, b) => {
    const valueA = sortValue[sortBy](a);
    const valueB = sortValue[sortBy](b);
    return changeRotate ? valueB - valueA : valueA - valueB;
  });
};

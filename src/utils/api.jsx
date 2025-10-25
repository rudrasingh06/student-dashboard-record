const STORAGE_KEY = "students";

export function getStudents() {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

export function saveStudent(student) {
  const students = getStudents();
  const id = Date.now().toString();
  const newStudent = { id, ...student };
  students.push(newStudent);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(students));
  return newStudent;
}

export function updateStudent(id, updated) {
  const students = getStudents().map((s) =>
    s.id === id ? { ...s, ...updated } : s
  );
  localStorage.setItem(STORAGE_KEY, JSON.stringify(students));
}

export function deleteStudent(id) {
  const students = getStudents().filter((s) => s.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(students));
}

export function getStudent(id) {
  return getStudents().find((s) => s.id === id);
}

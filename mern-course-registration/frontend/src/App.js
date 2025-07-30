import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CourseForm from './components/CourseForm';
import CourseList from './components/CourseList';

function App() {
  const [courses, setCourses] = useState([]);
  const [editingCourse, setEditingCourse] = useState(null);

  const fetchCourses = async () => {
    const res = await axios.get('http://localhost:5000/api/courses');
    setCourses(res.data);
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const handleSave = async (course) => {
    if (course._id) {
      await axios.put(`http://localhost:5000/api/courses/${course._id}`, course);
    } else {
      await axios.post('http://localhost:5000/api/courses', course);
    }
    setEditingCourse(null);
    fetchCourses();
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/courses/${id}`);
    fetchCourses();
  };

  return (
    <div className="App">
      <h1>Course Registration</h1>
      <CourseForm course={editingCourse} onSubmit={handleSave} />
      <CourseList
        courses={courses}
        onEdit={setEditingCourse}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;

















// ---

// ## 🔹 What is this file?

// This is the **main component** of your React app.

// It does 3 big things:

// 1. Shows the **course form** to add or edit a course
// 2. Shows a **list of courses**
// 3. Talks to the **backend API** to get, add, update, and delete courses

// ---

// ## ✅ Step-by-Step Explanation

// ---

// ### 1. 📦 Import required tools

// ```js
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import CourseForm from './components/CourseForm';
// import CourseList from './components/CourseList';
// ```

// * `useState`: to store values in memory
// * `useEffect`: to run code when the component loads
// * `axios`: to make HTTP requests (GET, POST, PUT, DELETE)
// * `CourseForm`: form component (to add/update a course)
// * `CourseList`: table component (to show and manage the list of courses)

// ---

// ### 2. 🧠 State Setup

// ```js
// const [courses, setCourses] = useState([]);
// const [editingCourse, setEditingCourse] = useState(null);
// ```

// * `courses`: stores the **list of all courses** (fetched from the backend)
// * `editingCourse`: stores the **course currently being edited**, or `null` if we're adding a new one

// ---

// ### 3. 🔁 Fetch all courses from backend

// ```js
// const fetchCourses = async () => {
//   const res = await axios.get('http://localhost:5000/api/courses');
//   setCourses(res.data);
// };
// ```

// * Makes a `GET` request to the backend API
// * Sets the `courses` state with the response data
// * This is called when the app loads and after every change (add/update/delete)

// ---

// ### 4. ▶️ Load courses when app starts

// ```js
// useEffect(() => {
//   fetchCourses();
// }, []);
// ```

// * This code runs **only once**, right after the component is shown (on page load)
// * It calls `fetchCourses()` to load the course list

// ---

// ### 5. 💾 Handle Add/Update (Save)

// ```js
// const handleSave = async (course) => {
//   if (course._id) {
//     await axios.put(`http://localhost:5000/api/courses/${course._id}`, course);
//   } else {
//     await axios.post('http://localhost:5000/api/courses', course);
//   }
//   setEditingCourse(null);
//   fetchCourses();
// };
// ```

// This function is called when the **form is submitted**.

// * If `course._id` exists → it's an **update** (`PUT` request)
// * If not → it's a **new course** (`POST` request)
// * After saving:

//   * Clears the editing state (`setEditingCourse(null)`)
//   * Refreshes the course list (`fetchCourses()`)

// ---

// ### 6. 🗑️ Handle Delete

// ```js
// const handleDelete = async (id) => {
//   await axios.delete(`http://localhost:5000/api/courses/${id}`);
//   fetchCourses();
// };
// ```

// * This is called when you click the **Delete** button in `CourseList`
// * Sends a `DELETE` request to the backend
// * Refreshes the course list after deleting

// ---

// ### 7. 🖼️ Render the UI

// ```js
// return (
//   <div className="App">
//     <h1>Course Registration</h1>
//     <CourseForm course={editingCourse} onSubmit={handleSave} />
//     <CourseList
//       courses={courses}
//       onEdit={setEditingCourse}
//       onDelete={handleDelete}
//     />
//   </div>
// );
// ```

// * Shows a heading
// * Shows the form (`CourseForm`)

//   * Passes the `editingCourse` (so the form knows whether it's editing or adding)
//   * Passes `handleSave` function for submitting
// * Shows the list (`CourseList`)

//   * Passes all `courses`
//   * Passes `setEditingCourse` to be called when Edit is clicked
//   * Passes `handleDelete` to be called when Delete is clicked

// ---

// ## 🔁 How Everything Works Together

// | Action        | What Happens                                                     |
// | ------------- | ---------------------------------------------------------------- |
// | Page loads    | `useEffect` calls `fetchCourses` → gets courses from backend     |
// | Add course    | Fill form & submit → `POST` request → update list                |
// | Edit course   | Click "Edit" → fills form → submit → `PUT` request → update list |
// | Delete course | Click "Delete" → sends `DELETE` request → updates the list       |

// ---

// ## ✅ Summary

// * `App.js` is the center of the app.
// * It manages the course list and editing state.
// * It connects `CourseForm` and `CourseList`.
// * It uses `axios` to talk to the backend (GET, POST, PUT, DELETE).

// ---

// Would you like a flow diagram of how the components interact?

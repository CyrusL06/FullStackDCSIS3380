# Midterm To-Do CRUD Task Document

## Objective
Implement all JavaScript CRUD behavior for the existing to-do UI in `src/App.jsx` while keeping the current CSS and layout.

## Task Order (Do These First)
1. Create state model
- Replace `demoTasks` with `useState`.
- Add state for form inputs, filters, and edit mode.
- Keep a consistent task shape: `id`, `title`, `description`, `course`, `due`, `priority`, `status`, `statusClass`.

2. Implement `Create` logic
- Handle form submit from `data-action="create-task"` (`src/App.jsx:105`).
- Validate required fields (`title`, `course`, `due`, `priority`).
- Create a new task object with a unique `id`.
- Add task to state and clear/reset form.

3. Implement `Read` logic
- Render tasks from your real state (not `demoTasks`).
- Keep counters (`Total`, `Active`, `Completed`) derived from state.
- Wire search and filters:
- `data-filter="search"` (`src/App.jsx:122`)
- `data-filter="status"` (`src/App.jsx:128`)
- `data-filter="sort"` (`src/App.jsx:138`)

4. Implement `Update` logic
- Toggle complete/incomplete from `data-action="toggle-task"` (`src/App.jsx:162`).
- Edit flow:
- `Edit` button (`data-action="edit-task"`, `src/App.jsx:184`) loads task data into form.
- Save updates back to the matching `id`.
- Keep `status` and `statusClass` synchronized when status changes.

5. Implement `Delete` logic
- Delete single task from `data-action="delete-task"` (`src/App.jsx:187`).
- Implement `Clear Completed` from `data-action="clear-completed"` (`src/App.jsx:149`).

## Secondary Tasks (Recommended)
1. Implement reset behavior for `data-action="reset-form"` (`src/App.jsx:108`).
2. Prevent duplicate task titles for the same course and date (optional rule).
3. Add empty-state UI message when no tasks match filters.
4. Persist tasks in `localStorage` so data survives refresh.
5. Add basic error messages for invalid form input.

## Definition of Done
1. You can add, read/filter/sort, edit, toggle, and delete tasks without reload.
2. Stats update correctly after every CRUD action.
3. Form supports both create mode and edit mode cleanly.
4. `npm run lint` passes.
5. `npm run build` passes.

## Quick Test Checklist
1. Add 3 tasks with different priorities and statuses.
2. Search by keyword and confirm only matches show.
3. Filter by each status and verify counts.
4. Edit one task and confirm UI updates immediately.
5. Toggle one task to done and verify strike-through/status pill.
6. Delete one task and verify it is removed.
7. Use `Clear Completed` and verify only done tasks are removed.

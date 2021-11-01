# Todo App

## Description
A UI to display a list of todos that we should be able to check off when done or remove entirely.

## User stories

- as a user, I want to be able to see my todos
- as a user, I want to be able to create a new todo
- as a user, I want to be able to indicate that I have completed a todo
- as a user, I want to be able to delete a todo

## Structure of our data
- todos: an array of objects
  > id: assigned in backend
  > task (the todo)
  > done (whether or not it is complete)

```json
[
  {"id": 1, "task": "feed cat", "done": false},
  {"id": 2, "task": "feed dog", "done": false},
  {"id": 3, "task": "wash dishes", "done": true}
]
```

## Components
- App
  - NewTodoForm ({ addTodo })
  - div 
    - Todo ({ task, done, updateTodo, deleteTodo })


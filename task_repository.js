// task_repository.js

class TaskRepository {
  constructor(sample) {
    this.sample = sample;
  }

  createTable() {
    const sql = `
        CREATE TABLE IF NOT EXISTS tasks (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          name TEXT,
          description TEXT,
          isComplete INTEGER DEFAULT 0,
          projectId INTEGER,
          CONSTRAINT tasks_fk_projectId FOREIGN KEY (projectId)
            REFERENCES projects(id) ON UPDATE CASCADE ON DELETE CASCADE)`;
    return this.sample.run(sql);
  }
}

module.exports = TaskRepository;

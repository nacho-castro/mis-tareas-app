package com.app.MisTareas.domain.task;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TaskRepository extends JpaRepository<Task,Long> {
    List<Task> findByCompletedFalseOrderByDateAsc(); // Incomplete Tasks order by date
    List<Task> findByCompletedTrueOrderByDateAsc();  // Completed Tasks order by date
}

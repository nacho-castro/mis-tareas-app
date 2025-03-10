package com.app.MisTareas.controller;

import com.app.MisTareas.domain.task.DataCreateTask;
import com.app.MisTareas.domain.task.Task;
import com.app.MisTareas.domain.task.TaskRepository;
import jakarta.transaction.Transactional;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;
import java.net.URI;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/tasks")
public class TaskController {
    @Autowired
    private TaskRepository taskRepository;

    @PostMapping
    public ResponseEntity<Void> createTask(@RequestBody @Valid DataCreateTask newTask, UriComponentsBuilder uriComponentsBuilder){
        Task task = taskRepository.save(new Task(newTask));
        URI url = uriComponentsBuilder.path("/tasks/{id}").buildAndExpand(task.getId()).toUri();
        return ResponseEntity.created(url).build();
    }

    @GetMapping
    public ResponseEntity<List<Task>> getIncompleteTasks(){
        return ResponseEntity.ok(taskRepository.findByCompletedFalseOrderByDateAsc());
    }

    @GetMapping("/completed")
    public ResponseEntity<List<Task>> getCompletedTasks(){
        return ResponseEntity.ok(taskRepository.findByCompletedTrueOrderByDateAsc());
    }

    @PutMapping("/{id}")
    @Transactional
    public ResponseEntity<Void> toggleTaskCompleted(@PathVariable Long id) {
        Optional<Task> optionalTask = taskRepository.findById(id);
        if (optionalTask.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        Task task = optionalTask.get();
        task.setCompleted(!task.isCompleted());
        taskRepository.save(task);
        return ResponseEntity.noContent().build();
    }

    @DeleteMapping("/{id}")
    @Transactional
    public ResponseEntity<Void> completeTask(@PathVariable Long id){
        if (!taskRepository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }
        taskRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}

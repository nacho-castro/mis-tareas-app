package com.app.MisTareas.domain.task;

import jakarta.validation.constraints.NotNull;

import java.time.LocalDate;

public record DataUpdateTask(
        @NotNull
        Long id,
        String title,
        String subject,
        LocalDate date,
        Boolean completed) {
}

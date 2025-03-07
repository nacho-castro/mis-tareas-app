package com.app.MisTareas.domain.task;

import jakarta.validation.constraints.Future;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import java.time.LocalDate;

public record DataCreateTask(
    @NotBlank
    String title,
    @NotNull
    Subject subject,
    @NotNull
    @Future
    LocalDate date
) {
}

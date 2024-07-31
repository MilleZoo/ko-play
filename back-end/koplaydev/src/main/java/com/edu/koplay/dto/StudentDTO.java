package com.edu.koplay.dto;

import com.edu.koplay.model.Student;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class StudentDTO {
    private String id;
    private String pw;
    private String name;
    private Date birth;

    public StudentDTO(final Student studentEntity) {
        this.id = studentEntity.getStudentId();
        this.pw = studentEntity.getStudentPw();
        this.name = studentEntity.getStudentName();
        this.birth = studentEntity.getBirth();
    }

}
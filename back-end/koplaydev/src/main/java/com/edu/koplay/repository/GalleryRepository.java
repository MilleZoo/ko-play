package com.edu.koplay.repository;


import com.edu.koplay.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import com.edu.koplay.model.Gallery;

import java.util.List;
import java.util.Optional;

public interface GalleryRepository extends JpaRepository<Gallery, Long> {
    List<Gallery> findAllByStudentAndIsDeletedFalse(Student student);

    Optional<Gallery> findByGalleryIdxAndStudentAndIsDeletedFalse(Long galleryIdx, Student student);
}

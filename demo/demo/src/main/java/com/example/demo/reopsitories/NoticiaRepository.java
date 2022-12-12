package com.example.demo.reopsitories;

import com.example.demo.models.NoticiaModel;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NoticiaRepository extends CrudRepository<NoticiaModel, Long> {

}

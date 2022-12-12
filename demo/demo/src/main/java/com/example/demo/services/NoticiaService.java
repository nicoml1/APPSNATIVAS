package com.example.demo.services;

import com.example.demo.models.NoticiaModel;
import com.example.demo.reopsitories.NoticiaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class NoticiaService {
    @Autowired
    NoticiaRepository noticiaRepository;

    public ArrayList<NoticiaModel> obtenerNoticias(){
        return (ArrayList<NoticiaModel>) noticiaRepository.findAll();
    }

    public NoticiaModel guardarNoticia(NoticiaModel noticia){
        return noticiaRepository.save(noticia);
    }
}

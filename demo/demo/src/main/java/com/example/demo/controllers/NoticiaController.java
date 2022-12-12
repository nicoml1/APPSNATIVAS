package com.example.demo.controllers;

import com.example.demo.models.NoticiaModel;
import com.example.demo.services.NoticiaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("/noticia")
public class NoticiaController {
    @Autowired
    NoticiaService noticiaService;

    @GetMapping()
    public ArrayList<NoticiaModel> obtenerNoticias(){
        return noticiaService.obtenerNoticias();
    }

    @PostMapping()
    public NoticiaModel guardarNoticia(@RequestBody NoticiaModel noticia){
        return this.noticiaService.guardarNoticia(noticia);
    }

}

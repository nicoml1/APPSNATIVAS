import { Injectable } from "@angular/core"

@Injectable({
    providedIn: 'root'
})

export class NoticiaService {

    constructor() { }

    async getNoticias() {
        const res = await fetch("http://localhost:8080/noticia")
        const resjson = (await res).json()
        return resjson
    }


}



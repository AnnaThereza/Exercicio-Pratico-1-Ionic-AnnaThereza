import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viagens',
  templateUrl: './viagens.page.html',
  styleUrls: ['./viagens.page.scss'],
})
export class ViagensPage implements OnInit {
    
    lugares = [
      {
        imagem: "https://pureviagem.com.br/wp-content/uploads/2019/12/curiosidades-sobre-paris.jpg",
        local: "Paris",
        desc: "O lugar perfeito para os românticos de plantão... Apaixone-se pela cidade Luz.",
        dataviagem: "05/06/2021",
      },
      {
        imagem: "https://image.freepik.com/fotos-gratis/bela-foto-da-ponte-do-porto-de-sydney-com-um-ceu-rosa-e-azul-claro_181624-16041.jpg",
        local: "Sydney",
        desc: "Do outro lado do mundo, uma das cidades mais bonitas... Bons empregos e uma ótima condição de vida.",
        dataviagem: "02/01/2023",
      },

    ];

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { ActionSheetController, NavController } from '@ionic/angular';


@Component({
  selector: 'app-amigos',
  templateUrl: './amigos.page.html',
  styleUrls: ['./amigos.page.scss'],
})
export class AmigosPage implements OnInit {

  amigos = [
    {
      nome: "Anna",
      idade: "20",
      nivelAmizade: "5",
    },
    {
      nome: "Igor",
      idade: "23",
      nivelAmizade: "2",
    },
    {
      nome: "Luciana",
      idade: "30",
      nivelAmizade: "4",
    },
    {
      nome: "João Tadeu",
      idade: "25",
      nivelAmizade: "5",
    },
    {
      nome: "Pedro",
      idade: "35",
      nivelAmizade: "1",
    },
  ];


  constructor(private btnAction: ActionSheetController) {}


  ngOnInit() {
  }

  async AparecerActionSheet(){
        const actionSheet = await this.btnAction.create({
          header: 'Albums',
          cssClass: 'my-custom-class',
          buttons: [{
            text: 'Delete',
            role: 'destructive',
            icon: 'trash',
            handler: () => {
              console.log('Deleteado');
            }
          },  {
            text: 'Editar',
            icon: 'caret-forward-circle',
            handler: () => {
            }
          }, {
            text: 'Cancelar',
            icon: 'close',
            role: 'cancel',
            handler: () => {
            }
          }]
        });
        await actionSheet.present();
  }


}

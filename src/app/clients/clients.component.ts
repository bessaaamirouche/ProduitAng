import { Component } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent {
  show: boolean= false; 
  toggle(){ this.show = !this.show; }

  
  montreToi(ici: HTMLElement){
    ici.style.backgroundColor = "red"
    ici.style.color= "black"
}

}

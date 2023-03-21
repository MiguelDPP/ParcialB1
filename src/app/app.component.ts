import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  // Definimos los elementos del menu
  public appPages = [
    { title: 'Inicio', url: '/main', icon: 'home' },
    { title: 'Mision Y Vision', url: '/mision-and-vision', icon: 'clipboard' },
    { title: 'Objetivos', url: '/goals', icon: 'ribbon' },
    { title: 'Contactos', url: '/contacts', icon: 'people' },
    { title: 'Eventos', url: '/events', icon: 'calendar' },
    { title: 'Tramites', url: '/formalities', icon: 'newspaper' },
  ];
  constructor() {}
}
``
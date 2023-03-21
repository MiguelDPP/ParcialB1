import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
})
export class ContactsPage implements OnInit {

  constructor() { }

  colors: string[] = [
    'f44336',
    'e91e63',
    '9c27b0',
    '673ab7',
    '3f51b5',
    '2196f3',
    '03a9f4',
  ];


  returnAvatar(name: string) {
    return `https://ui-avatars.com/api/?name=${name}&background=${this.colors[Math.floor(Math.random() * this.colors.length)]}&color=fff&size=128`;
  }

  public contacts = [
    {
      depend: 'PRESIDENCIA',
      data: [
        {
          name: 'MARIA TERESA HERNANDEZ PRADA',
          work: 'PRESIDENTA EJECUTIVA',
          phone: '(095) 5650650',
          email: 'mariah@camaraaguachica.org.co',
        },
        {
          name: 'ELINES MERCEDES CHIQUILLO PATERNINA',
          work: 'SECRETARIA GENERAL',
          phone: '095) 5650650',
          email: 'echiquillo@camaraaguachica.org.co',
        },
        {
          name: 'MARY LUZ NUÑEZ SIERRA',
          work: 'CONTROL INTERNO',
          phone: '(095) 5650650',
          email: 'controlinterno@camaraaguachica.org.co',
        }
      ]
    },
    {
      depend: 'DIRECCIÓN FINANCIERA',
      data: [
        {
          name: 'LUD PABON CHONA',
          work: 'DIRECTORA ADMINISTRATIVA Y FINANCIERA',
          phone: '(095) 5650650',
          email: 'ludpabon@camaraaguachica.org.co',
        },
        {
          name: 'PIEDAD HORTENCIA CARDENAS CASTRO',
          work: 'CAJERA',
          phone: '(095) 5650650',
          email: 'pcardenas@camaraaguachica.org.co',
        },
        {
          name: 'ZORAIDA MENA DUARTE',
          work: 'CAJERA',
          phone: '(095) 5650650',
          email: 'zmena@camaraaguachica.org.co',
        },
        {
          name: 'DIANA PATRICIA',
          work: 'CONTADORA',
          phone: '(095) 5650650',
          email: 'dnavarro@camaraaguachica.org.co'
        }
      ]
    },
    {
      depend: 'DIRECCIÓN JURÍDICA',
      data: [
        {
          name: 'JUAN BAUTISTA GRANADOS OLIVERA',
          work: 'DIRECTOR JURÍDICO',
          phone: '(095) 5650650',
          email: 'centroc@camaraaguachica.org.co',
        },
        {
          name: 'YAMILE VEGA',
          work: 'ASISTENTE DE REGISTROS PUBLICOS',
          phone: '(095) 5650650',
          email: 'yvega@camaraaguachica.org.co',
        }
      ]
    }
  ];


  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
})
export class ContactsPage implements OnInit {
  constructor() {}

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
    return `https://ui-avatars.com/api/?name=${name}&background=${
      this.colors[Math.floor(Math.random() * this.colors.length)]
    }&color=fff&size=128`;
  }

  // public contacts = [
  //   {
  //     depend: 'PRESIDENCIA',
  //     data: [
  //       {
  //         name: 'MARIA TERESA HERNANDEZ PRADA',
  //         work: 'PRESIDENTA EJECUTIVA',
  //         phone: '(095) 5650650',
  //         email: 'mariah@camaraaguachica.org.co',
  //       },
  //       {
  //         name: 'ELINES MERCEDES CHIQUILLO PATERNINA',
  //         work: 'SECRETARIA GENERAL',
  //         phone: '095) 5650650',
  //         email: 'echiquillo@camaraaguachica.org.co',
  //       },
  //       {
  //         name: 'MARY LUZ NUÑEZ SIERRA',
  //         work: 'CONTROL INTERNO',
  //         phone: '(095) 5650650',
  //         email: 'controlinterno@camaraaguachica.org.co',
  //       }
  //     ]
  //   },
  //   {
  //     depend: 'DIRECCIÓN FINANCIERA',
  //     data: [
  //       {
  //         name: 'LUD PABON CHONA',
  //         work: 'DIRECTORA ADMINISTRATIVA Y FINANCIERA',
  //         phone: '(095) 5650650',
  //         email: 'ludpabon@camaraaguachica.org.co',
  //       },
  //       {
  //         name: 'PIEDAD HORTENCIA CARDENAS CASTRO',
  //         work: 'CAJERA',
  //         phone: '(095) 5650650',
  //         email: 'pcardenas@camaraaguachica.org.co',
  //       },
  //       {
  //         name: 'ZORAIDA MENA DUARTE',
  //         work: 'CAJERA',
  //         phone: '(095) 5650650',
  //         email: 'zmena@camaraaguachica.org.co',
  //       },
  //       {
  //         name: 'DIANA PATRICIA',
  //         work: 'CONTADORA',
  //         phone: '(095) 5650650',
  //         email: 'dnavarro@camaraaguachica.org.co'
  //       }
  //     ]
  //   },
  //   {
  //     depend: 'DIRECCIÓN JURÍDICA',
  //     data: [
  //       {
  //         name: 'JUAN BAUTISTA GRANADOS OLIVERA',
  //         work: 'DIRECTOR JURÍDICO',
  //         phone: '(095) 5650650',
  //         email: 'centroc@camaraaguachica.org.co',
  //       },
  //       {
  //         name: 'YAMILE VEGA',
  //         work: 'ASISTENTE DE REGISTROS PUBLICOS',
  //         phone: '(095) 5650650',
  //         email: 'yvega@camaraaguachica.org.co',
  //       }
  //     ]
  //   }
  // ];

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
        },
      ],
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
          email: 'dnavarro@camaraaguachica.org.co',
        },
      ],
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
        },
        {
          name: 'MILADIS VASQUEZ',
          work: 'AUXILIAR DE ARCHIVO',
          phone: '(095) 5650650',
          email: 'mvasquez@camaraaguachica.org.co',
        },
        {
          name: 'MARLETH ÑUNGO',
          work: 'AUXILIAR DE ARCHIVO',
          phone: '(095) 5650650',
          email: 'mnungo@camaraaguachica.org.co',
        },
        {
          name: 'NADIA RAMIREZ',
          work: 'ASESORIA JURIDICA',
          phone: '(095) 5650650',
          email: 'nramirez@camaraaguachica.org.co',
        },
        {
          name: 'ISAAC BURGOS',
          work: 'ASISTENTE DE SISTEMAS',
          phone: '(095) 5650650',
          email: 'sistemascca@camaraaguahica.org.co',
        },
        {
          name: 'YOELIS PEREZ',
          work: 'AUXILIAR DE ARCHIVO',
          phone: '(095) 5650650',
          email: 'yperez@camaraaguachica.org.co',
        },
        {
          name: 'CAMILO VALEIDES',
          work: 'INGENIERO DE SISTEMAS',
          phone: '(095) 5650650',
          email: 'sistemascca@camaraaguahica.org.co',
        },
        {
          name: 'JHONNYS VALLEJO',
          work: 'AUXILIAR DE REGISTRO',
          phone: '(095) 5650650',
          email: 'ccsantarosa@camaraaguachica.og.co',
        },
        {
          name: 'NICOL GUALDRON',
          work: 'AUXILIAR DE ARCHIVO',
          phone: '(095) 5650650',
          email: 'digitacion@camaraaguachica.org.co',
        },
      ],
    },
    {
      depend: 'DIRECCION ADMINISTRATIVA',
      data: [
        {
          name: 'FIDELIA MORENO',
          work: 'SERVICIOS GENERALES',
          phone: '(095) 5650650',
          email: 'fmoreno@camaraaguachica.org.co',
        },
        {
          name: 'MARTA QUINTANA',
          work: 'SERVICIOS GENERALES',
          phone: '095) 5650650',
          email: 'mquintana@camaraaguachica.org.co',
        },
        {
          name: 'ELSIDO LOPEZ',
          work: 'AUXILIAR',
          phone: '(095) 5650650',
          email: 'elopez@camaraaguachica.org.co',
        },
        {
          name: 'MILEIDYS FONSECA',
          work: 'TALENTO HUMANO Y RECURSOS FISICOS',
          phone: '(095) 5650650',
          email: 'mfonseca@camaraaguachica.org.co',
        },
        {
          name: 'YURI GONZALES',
          work: 'AUXILIAR ADMINISTRATIVA',
          phone: '(095) 5650650',
          email: 'ygonzalez@camaraaguachica.org.co',
        },
        {
          name: 'MANUEL FAJARDO',
          work: 'AUXILIAR',
          phone: '(095) 5650650',
          email: 'mfajardo@camaraaguachica.org.co',
        },
      ],
    },
    {
      depend: 'DIRECCION DE DESAROLLO Y COMPETITIVIDAD',
      data: [
        {
          name: 'MILEIDI PAZ',
          work: 'BRIGADISTA',
          phone: '(095) 5650650',
          email: 'mpaez@camaraaguachica.org.co',
        },
        {
          name: 'YULIETH CACERES',
          work: 'COORDINADOR PROMOCIÓN Y DESARROLLO',
          phone: '095) 5650650',
          email: 'ycaceres@camaraaguachica.org.co',
        },
        {
          name: 'COORDINADOR DE PRENSA Y COMUNICACIONES',
          work: 'AUXILIAR',
          phone: '(095) 5650650',
          email: 'comunicaciones@camaraaguachica.org.co',
        },
        {
          name: 'VICTOR HUGO',
          work: 'PORF. EN EL AREA DE REGISTRO',
          phone: '(095) 5650650',
          email: 'vpineda@camaraaguachica.org.co',
        },
      ],
    },
  ];

  ngOnInit() {}
}

import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-formalities',
  templateUrl: './formalities.page.html',
  styleUrls: ['./formalities.page.scss'],
})
export class FormalitiesPage implements OnInit {
  @ViewChild(IonContent) content: IonContent | undefined;
  constructor() {
    
  }

  public makebusines = [
    {
      title: 'Paso 1: Consultar tipo de empresa',
      content: `
      El primer paso para crear una empresa exitosa en la Cámara de Comercio de Aguachica es validar el tipo de empresa que se quiere crear. Esto es muy importante ya que de esto dependen varios factores dentro del proceso de creación y categorización de su nueva empresa, además, es necesario que conozca las características y responsabilidades que implica cada uno de los tipos de empresa, dependiendo de si se trata de PERSONA NATURAL o PERSONA JURÍDICA
      `,
      url: 'http://www.rues.org.co/',
    },
    {
      title: 'Paso 2: Nombre de su empresa',
      content: `
      Ahora, es necesario que consulte la disponibilidad del nombre, por lo tanto es importante que verifique la homonimia, es decir, valide si existen o no otras empresas, establecimientos comerciales o entidades sin ánimo de lucro con el mismo nombre al elegido.`,
      url: 'http://www.rues.org.co/',
    },
    {
      title: 'Paso 3: Código Actividad Económica CIIU',
      content: `
      Es momento de definir la Codificación de Actividad Económica de su nueva empresa. \n\nEsta consulta le permite encontrar el código CIIU internacional, correspondiente a la actividad que el futuro empresario desea desarrollar.

Definir el código CIIU es un paso definitivo para el proceso de categorización de su nueva empresa.`,
      url: 'https://www.dane.gov.co/files/nomenclaturas/CIIU_Rev4ac.pdf',
    },
    {
      title: 'Paso 4: Consultar sobre el uso de suelo',
      content: `Vamos muy bien, ahora es mometo de realizar el proceso de consulta de uso de suelo.

      La consulta de uso de suelo permite conocer que tipos de actividades se pueden ejecutar, de acuerdo al Plan de Ordenamiento Territorial del municipio, en el predio seleccionado para ubicar la nueva empresa.
      
      Evite problemas y contratiempos, antes de tomar una decisión realice esta consulta, esto será mucho más rentable para su futura empresa.
      `,
      url: 'http://www.rues.org.co/',
    },
    {
      title: 'Paso 5: Trámite ante la DIAN',
      content: `Ahora, es muy importante formalizar su empresa ante la Direccion de impuesto y aduana nacionales DIAN, para ellos debe tener en cuenta que:

      Para ello debe diligenciar el Formulario PRE-RUT a través del portal web de la DIAN, o de manera presencial en sus oficinas. También podrá acercarse a la Cámara de Comercio en donde un asesor especializado le brindara ayuda para realizar este trámite.
      `,
      url: 'https://www.dian.gov.co/',
    },
    {
      title: 'Paso 6: Regístrese Futuro Empresario',
      content: `
      Realizadas las consultas de los pasos 1, 2, 3 y 4, es hora de consolidarse como un nuevo empresario y así recibir los beneficios de ser formal.

Regístrese, obtenga su clave de acceso y diligencie los formularios de inscripción para persona natural o jurídica.`,
      url: 'http://www.rues.org.co/',
    },
    {
      title: 'Paso 7: Impuesto de Registro',
      content: `
      El impuesto de registro (Solo aplica para Personas Jurídicas y Entidades sin ánimo de lucro), es un tributo que el comerciante paga a la Gobernación de Cesar por la inscripción entre otros, de los actos de constitución de sociedades de acuerdo con la Ley 223 de 1995 y el Decreto 650 de 1996, equivalente al 3% sobre el valor del capital de la sociedad que se crea. Ordenanza No. 005 de Enero de 2013 y Ordenanza 073 DE FEBRERO DE 2013. \n¿Quién lo recauda? La Administración Departamental a través de punto de pago en la ciudad de Aguachica - Cesar en la carrera 18 # 5 - 29
      `,
      url: 'https://www.nomasfilas.gov.co/memoficha-tramite/-/tramite/T6110', 
    },
    {
      title: 'Paso 8: Radique y pague',
      content: `
      Es momento de presentar los formularios diligenciados. Tanto los formularios, como el formato único con otras entidades se puede presentar , en cualquiera de las oficinas de la Cámara de Comercio y realizar el pago de los derechos de inscripción, este pago podrá hacerse por internet, o en cualquiera de las ventanillas multiservicios de las oficinas de la Cámara de Comercio. Luego de ingresar la documentación a la Cámara, usted podrá realizar la consulta de su trámite en línea a través de esta página web. (solo aplica para personas jurídicas).
      `,
      url: 'http://www.rues.org.co/',
    },
    {
      title: 'Paso 9: Ficha Establecimiento Comercial',
      content: `
      La ficha de establecimiento comercial permite constatar el cumplimiento de los requisitos establecidos en la ley 232 de 1995 su decreto reglamentario 1879 de 2008 y decreto municipal 011 de 2010. Cada consulta de ficha de establecimiento comercial se realiza teniendo en cuenta la alcaldía correspondiente.
      `,
      url: 'http://www.rues.org.co/',
    }
  ];


  scrollToTop() {
    this.content?.scrollToTop(500);
  }

  ngOnInit() {}
}

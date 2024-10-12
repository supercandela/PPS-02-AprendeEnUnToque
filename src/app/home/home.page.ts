import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  temaSeleccionado: string = 'colores';
  idiomaSeleccionado: string = 'espanol';
  // Rutas de las imágenes para cada tema
  imagenesPorTema: { [key: string]: string[] } = {
    colores: [
      '../../assets/images/colores - rojo.png',
      '../../assets/images/colores - naranja.png',
      '../../assets/images/colores - amarillo.png',
      '../../assets/images/colores - verde.png',
      '../../assets/images/colores - azul.png',
      '../../assets/images/colores - violeta.png',
    ],
    numeros: [
      '../../assets/images/numeros - 1.png',
      '../../assets/images/numeros - 2.png',
      '../../assets/images/numeros - 3.png',
      '../../assets/images/numeros - 4.png',
      '../../assets/images/numeros - 5.png',
      '../../assets/images/numeros - 6.png',
    ],
    animales: [
      '../../assets/images/animales - perro.png',
      '../../assets/images/animales - gato.png',
      '../../assets/images/animales - mono.png',
      '../../assets/images/animales - conejo.png',
      '../../assets/images/animales - caballo.png',
      '../../assets/images/animales - loro.png',
    ],
  };

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  // Método para seleccionar un tema
  onSeleccionarTema(tema: string) {
    this.temaSeleccionado = tema; // Actualiza el tema seleccionado
  }

  // Método para obtener la ruta de la imagen según el botón
  obtenerRutaImagen(boton: number): string {
    return this.imagenesPorTema[this.temaSeleccionado][boton - 1];
  }

  onSeleccionarIdioma(idioma: string) {
    this.idiomaSeleccionado = idioma;
  }

  onReproducirSonido(botonId: number) {
    this.reproducirSonido(botonId);
  }

  // Método para reproducir sonido
  reproducirSonido(botonId: number) {
    const rutaSonido = this.obtenerRutaSonido(botonId);
    const audio = new Audio(rutaSonido);
    audio.play();
  }

  obtenerRutaSonido(botonId: number) {
    let archivoSonido = '';

    switch (this.temaSeleccionado) {
      case 'colores':
        switch (botonId) {
          case 1:
            archivoSonido = 'rojo';
            break;
          case 2:
            archivoSonido = 'naranja';
            break;
          case 3:
            archivoSonido = 'amarillo';
            break;
          case 4:
            archivoSonido = 'verde';
            break;
          case 5:
            archivoSonido = 'azul';
            break;
          case 6:
            archivoSonido = 'violeta';
            break;
        }
        break;

      case 'numeros':
        switch (botonId) {
          case 1:
            archivoSonido = '1';
            break;
          case 2:
            archivoSonido = '2';
            break;
          case 3:
            archivoSonido = '3';
            break;
          case 4:
            archivoSonido = '4';
            break;
          case 5:
            archivoSonido = '5';
            break;
          case 6:
            archivoSonido = '6';
            break;
        }
        break;

      case 'animales':
        switch (botonId) {
          case 1:
            archivoSonido = 'perro';
            break;
          case 2:
            archivoSonido = 'gato';
            break;
          case 3:
            archivoSonido = 'mono';
            break;
          case 4:
            archivoSonido = 'conejo';
            break;
          case 5:
            archivoSonido = 'caballo';
            break;
          case 6:
            archivoSonido = 'loro';
            break;
        }
        break;
    }

    return `'../../assets/sounds/${this.idiomaSeleccionado}-${this.temaSeleccionado}-${archivoSonido}.ogg`;
  }

  onLogoutClick() {
    this.authService.logout();
    this.router.navigateByUrl('/auth');
  }
}

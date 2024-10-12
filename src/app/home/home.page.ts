import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  temaSeleccionado: string = '';
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

  ngOnInit() {
    this.temaSeleccionado = 'colores';
  }

  // Método para seleccionar un tema
  onSeleccionarTema (tema: string) {
    this.temaSeleccionado = tema; // Actualiza el tema seleccionado
  }

  // Método para obtener la ruta de la imagen según el botón
  obtenerRutaImagen (boton: number): string {
    console.log(this.imagenesPorTema[this.temaSeleccionado][boton - 1]);
    return this.imagenesPorTema[this.temaSeleccionado][boton - 1];
  }

  onSeleccionarIdioma (idioma: number) {

  }

  onMainButtonClick(num: number) {}

  onLogoutClick() {
    this.authService.logout();
    this.router.navigateByUrl('/auth');
  }
}
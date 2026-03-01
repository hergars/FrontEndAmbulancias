import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-municipios',
  imports: [CommonModule],
  templateUrl: './municipios.html',
  styleUrls: ['./municipios.css']
})
export class MunicipiosComponent {

  @Output() municipioSeleccionado = new EventEmitter<number>();

  municipiosFiltrados: any[] = [];

  listaMunicipios = [
    // Antioquia (05)
    { id: '05001', nombre: 'Medellín', departamentoId: 5 },
    { id: '05002', nombre: 'Abejorral', departamentoId: 5 },
    { id: '05004', nombre: 'Abriaquí', departamentoId: 5 },
    { id: '05021', nombre: 'Alejandría', departamentoId: 5 },
    { id: '05030', nombre: 'Amagá', departamentoId: 5 },
    { id: '05031', nombre: 'Amalfi', departamentoId: 5 },
    { id: '05034', nombre: 'Andes', departamentoId: 5 },
    { id: '05036', nombre: 'Angelópolis', departamentoId: 5 },
    { id: '05038', nombre: 'Angostura', departamentoId: 5 },
    { id: '05040', nombre: 'Anorí', departamentoId: 5 },
    { id: '05042', nombre: 'Santa Fe de Antioquia', departamentoId: 5 },
    { id: '05044', nombre: 'Anzá', departamentoId: 5 },
    { id: '05045', nombre: 'Apartadó', departamentoId: 5 },
    { id: '05051', nombre: 'Arboletes', departamentoId: 5 },
    { id: '05055', nombre: 'Argelia', departamentoId: 5 },

    // Atlántico (08)
    { id: '08001', nombre: 'Barranquilla', departamentoId: 8 },
    { id: '08078', nombre: 'Baranoa', departamentoId: 8 },
    { id: '08137', nombre: 'Campo de la Cruz', departamentoId: 8 },
    { id: '08141', nombre: 'Candelaria', departamentoId: 8 },
    { id: '08296', nombre: 'Galapa', departamentoId: 8 },
    { id: '08372', nombre: 'Juan de Acosta', departamentoId: 8 },
    { id: '08421', nombre: 'Luruaco', departamentoId: 8 },
    { id: '08433', nombre: 'Malambo', departamentoId: 8 },
    { id: '08520', nombre: 'Manatí', departamentoId: 8 },
    { id: '08549', nombre: 'Palmar de Varela', departamentoId: 8 },
    { id: '08558', nombre: 'Piojó', departamentoId: 8 },
    { id: '08560', nombre: 'Polonuevo', departamentoId: 8 },
    { id: '08573', nombre: 'Puerto Colombia', departamentoId: 8 },
    { id: '08606', nombre: 'Sabanagrande', departamentoId: 8 },
    { id: '08675', nombre: 'Santo Tomás', departamentoId: 8 },

    // Bogotá, D.C. (11)
    { id: '11001', nombre: 'Bogotá', departamentoId: 11 },
    { id: '11002', nombre: 'Usaquén', departamentoId: 11 },
    { id: '11003', nombre: 'Chapinero', departamentoId: 11 },
    { id: '11004', nombre: 'Santa Fe', departamentoId: 11 },
    { id: '11005', nombre: 'San Cristóbal', departamentoId: 11 },
    { id: '11006', nombre: 'Usme', departamentoId: 11 },
    { id: '11007', nombre: 'Tunjuelito', departamentoId: 11 },
    { id: '11008', nombre: 'Bosa', departamentoId: 11 },
    { id: '11009', nombre: 'Kennedy', departamentoId: 11 },
    { id: '11010', nombre: 'Fontibón', departamentoId: 11 },
    { id: '11011', nombre: 'Engativá', departamentoId: 11 },
    { id: '11012', nombre: 'Suba', departamentoId: 11 },
    { id: '11013', nombre: 'Barrios Unidos', departamentoId: 11 },
    { id: '11014', nombre: 'Teusaquillo', departamentoId: 11 },
    { id: '11015', nombre: 'Los Mártires', departamentoId: 11 },

    // Boyacá (15)
    { id: '15001', nombre: 'Tunja', departamentoId: 15 },
    { id: '15022', nombre: 'Duitama', departamentoId: 15 },
    { id: '15047', nombre: 'Sogamoso', departamentoId: 15 },
    { id: '15051', nombre: 'Arcabuco', departamentoId: 15 },
    { id: '15087', nombre: 'Chiquinquirá', departamentoId: 15 },
    { id: '15104', nombre: 'Chíquiza', departamentoId: 15 },
    { id: '15106', nombre: 'Chiscas', departamentoId: 15 },
    { id: '15125', nombre: 'Guateque', departamentoId: 15 },
    { id: '15162', nombre: 'Páez', departamentoId: 15 },
    { id: '15272', nombre: 'Ráquira', departamentoId: 15 },
    { id: '15276', nombre: 'Sáchica', departamentoId: 15 },
    { id: '15293', nombre: 'Samacá', departamentoId: 15 },
    { id: '15317', nombre: 'Tibasosa', departamentoId: 15 },
    { id: '15322', nombre: 'Tinjacá', departamentoId: 15 },
    { id: '15368', nombre: 'Villa de Leyva', departamentoId: 15 },

    // Cundinamarca (25)
    { id: '25001', nombre: 'Agua de Dios', departamentoId: 25 },
    { id: '25035', nombre: 'Anapoima', departamentoId: 25 },
    { id: '25053', nombre: 'Arbeláez', departamentoId: 25 },
    { id: '25086', nombre: 'Bojacá', departamentoId: 25 },
    { id: '25095', nombre: 'Cabuyaro', departamentoId: 25 },
    { id: '25120', nombre: 'Chía', departamentoId: 25 },
    { id: '25126', nombre: 'Cajicá', departamentoId: 25 },
    { id: '25148', nombre: 'Cogua', departamentoId: 25 },
    { id: '25200', nombre: 'El Colegio', departamentoId: 25 },
    { id: '25245', nombre: 'Facatativá', departamentoId: 25 },
    { id: '25269', nombre: 'Fusagasugá', departamentoId: 25 },
    { id: '25300', nombre: 'Girardot', departamentoId: 25 },
    { id: '25307', nombre: 'Granada', departamentoId: 25 },
    { id: '25377', nombre: 'La Mesa', departamentoId: 25 },
    { id: '25899', nombre: 'Zipaquirá', departamentoId: 25 },

    // Valle del Cauca (76)
    { id: '76001', nombre: 'Cali', departamentoId: 76 },
    { id: '76020', nombre: 'Alcalá', departamentoId: 76 },
    { id: '76036', nombre: 'Bugalagrande', departamentoId: 76 },
    { id: '76041', nombre: 'Caicedonia', departamentoId: 76 },
    { id: '76077', nombre: 'El Dovio', departamentoId: 76 },
    { id: '76079', nombre: 'Florida', departamentoId: 76 },
    { id: '76086', nombre: 'Ginebra', departamentoId: 76 },
    { id: '76109', nombre: 'Buenaventura', departamentoId: 76 },
    { id: '76111', nombre: 'Buga', departamentoId: 76 },
    { id: '76113', nombre: 'Bugalagrande', departamentoId: 76 },
    { id: '76122', nombre: 'Caicedonia', departamentoId: 76 },
    { id: '76318', nombre: 'Guadalajara de Buga', departamentoId: 76 },
    { id: '76320', nombre: 'Jamundí', departamentoId: 76 },
    { id: '76403', nombre: 'Palmira', departamentoId: 76 },
    { id: '76497', nombre: 'Tuluá', departamentoId: 76 },

  ];

  @Input() set departamentoId(value: number | null) {
    if (value) {
      this.municipiosFiltrados = this.listaMunicipios.filter(
        m => m.departamentoId === value
      );
    } else {
      this.municipiosFiltrados = [];
    }
  }

  seleccionarMunicipio(event: any) {
    const id = Number(event.target.value);
    this.municipioSeleccionado.emit(id);
  }
}
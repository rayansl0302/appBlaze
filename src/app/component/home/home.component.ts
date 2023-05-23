import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  email :any;
  user: any;
  
  constructor(public authService:AuthService) {

   }

  ngOnInit(): void {
   
    this.user = JSON.parse(localStorage.getItem('user')!)

    this.email = this.user.email

    const selectOptions = Array.from({ length: 15 }, (_, i) => i); // Cria um array com valores de 0 a 14

    // Preencher os dropdowns com as opções
    for (let i = 1; i <= 10; i++) {
      const selectElement = document.getElementById(`pedra${i}`) as HTMLSelectElement;
      selectElement.required = true; // Torna o campo obrigatório
      for (const option of selectOptions) {
        const optionElement = document.createElement("option");
        optionElement.value = String(option);
        optionElement.text = String(option);
        selectElement.add(optionElement);
      }
    }
    
  }

  calcular(event: Event) {
    event.preventDefault();
    const resultado = document.getElementById('resultado');

    if (resultado) {
      resultado.innerHTML = '';

      const pedras = document.querySelectorAll<HTMLSelectElement>('[id^="pedra"]');

      // Verificar se todos os dropdowns foram selecionados
      let allDropdownsSelected = true;

      for (let i = 0; i < pedras.length; i++) {
        const dropdown = pedras[i];

        if (dropdown.value === '') {
          allDropdownsSelected = false;
          break;
        }
      }

      if (!allDropdownsSelected) {
        alert('Por favor, selecione um valor para todos os dropdowns.');
        return;
      }

      for (let i = 1; i <= 10; i++) {
        const pedra = Number(pedras[i - 1].value);
        const soma = pedra + i;
        const ultimoDigito = soma % 10;
        const tr = document.createElement('tr');
        const tdMinuto = document.createElement('td');
        const tdResultado = document.createElement('td');
        tdMinuto.textContent = i.toString();
        if (soma === 10 || soma === 20) {
          tr.classList.add('branco');
          if (soma === 10) {
            tdResultado.textContent = 'Vermelho com branco forte';
            tdResultado.style.color = 'red';
            tdResultado.style.backgroundColor = 'white';
          } else {
            tdResultado.textContent = 'Preto com branco forte';
            tdResultado.style.color = 'black';
            tdResultado.style.backgroundColor = 'white';
          }
          tdResultado.style.textAlign = 'center';
        } else if (soma > 14) {
          if (ultimoDigito >= 1 && ultimoDigito <= 7) {
            tr.classList.add('vermelho');
            tdResultado.textContent = 'Vermelho com branco fraco';
            tdResultado.style.backgroundColor = 'red';
            tdResultado.style.color = 'white';
            tdResultado.style.textAlign = 'center';
          } else {
            tr.classList.add('preto');
            tdResultado.textContent = 'Preto com branco fraco';
            tdResultado.style.backgroundColor = 'black';
            tdResultado.style.color = 'white';
            tdResultado.style.textAlign = 'center';
          }
        } else {
          tdResultado.textContent = soma.toString();
          if (soma >= 1 && soma <= 7) {
            tr.classList.add('vermelho');
            tdResultado.textContent = 'Vermelho com branco fraco';
            tdResultado.style.color = 'white';
            tdResultado.style.textAlign = 'center';
            tdResultado.style.backgroundColor = 'red';
          } else {
            tr.classList.add('preto');
            tdResultado.textContent = 'Preto  com branco fraco';
            tdResultado.style.color = 'white';
            tdResultado.style.backgroundColor = 'black';
            tdResultado.style.textAlign = 'center';
          }
        }

        tr.appendChild(tdMinuto);
        tr.appendChild(tdResultado);
        resultado.appendChild(tr);
      }
    }
  }

  limparCampos() {
    const pedras = document.querySelectorAll<HTMLSelectElement>('[id^="pedra"]');

    for (let i = 0; i < pedras.length; i++) {
      pedras[i].value = '';
    }

    const resultado = document.getElementById('resultado');

    if (resultado) {
      resultado.innerHTML = '';
    }
  }

}

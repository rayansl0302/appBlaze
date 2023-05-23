import { Component, OnInit } from '@angular/core';

interface Result {
  minute: number;
  color: string;
}

@Component({
  selector: 'app-segundaforma',
  templateUrl: './segundaforma.component.html',
  styleUrls: ['./segundaforma.component.less']
})
export class SegundaformaComponent implements OnInit {
  number1: number;
  number2: number;
  result: string;
  results: Result[];
  dropdownOptions1: number[];
  dropdownOptions2: number[];

  constructor() {
    this.number1 = 1;
    this.number2 = 0;
    this.result = '';
    this.results = [];
    this.dropdownOptions1 = [];
    this.dropdownOptions2 = [0, 10, 20, 30, 40, 50];
  }

  ngOnInit(): void {
    this.populateDropdownOptions();
  }

  populateDropdownOptions(): void {
    for (let i = 1; i <= 14; i++) {
      this.dropdownOptions1.push(i);
    }
  }

  calculateColor(): void {
    const sum: number = (this.number1 + this.number2) % 10;

    this.clearTable();

    if (sum >= 1 && sum <= 7) {
      this.result = 'Resultado: Preto e Branco';
      this.results.push({ minute: this.number1 + this.number2, color: 'Preto e Branco' });
      const resultCell = document.getElementById('resultCell');
      if (resultCell) {
        resultCell.style.backgroundColor = 'black';
        resultCell.style.color = 'white';
      }
    } else if (sum >= 8 && sum <= 14) {
      this.result = 'Resultado: Vermelho e Branco';
      this.results.push({ minute: this.number1 + this.number2, color: 'Vermelho e Branco' });
      const resultCell = document.getElementById('resultCell');
      if (resultCell) {
        resultCell.style.backgroundColor = 'red';
        resultCell.style.color = 'white';
      }
    }
  }

  clearTable(): void {
    this.results = [];
    const resultCell = document.getElementById('resultCell');
    if (resultCell) {
      resultCell.style.backgroundColor = '';
      resultCell.style.color = '';
    }
  }
}

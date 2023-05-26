import { Component, OnInit } from '@angular/core';

interface Result {
  horario: string;
  primeiraPedra: string;
  segundaPedra: string;
  cor: string;
}

@Component({
  selector: 'app-terceiraforma',
  templateUrl: './terceiraforma.component.html',
  styleUrls: ['./terceiraforma.component.less']
})
export class TerceiraformaComponent implements OnInit {

  options: string[] = [
    "Selecione",
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14"
  ];

  results: Result[] = [];

  constructor() { }

  ngOnInit(): void {
    this.initializeResults();
  }

  initializeResults(): void {
    this.results = [
      { horario: "xx:00", primeiraPedra: "", segundaPedra: "", cor: "" },
      { horario: "xx:03", primeiraPedra: "", segundaPedra: "", cor: "" },
      { horario: "xx:06", primeiraPedra: "", segundaPedra: "", cor: "" },
      { horario: "xx:09", primeiraPedra: "", segundaPedra: "", cor: "" }
    ];
  }

  calculateResults(): void {
    for (let result of this.results) {
      const primeira = parseInt(result.primeiraPedra);
      const segunda = parseInt(result.segundaPedra);

      if (primeira === 0 || segunda === 0) {
        result.cor = "sem-padrao";
      } else if (primeira >= 1 && primeira <= 7 && segunda >= 1 && segunda <= 7) {
        result.cor = "preto-e-branco";
      } else if (primeira >= 8 && primeira <= 14 && segunda >= 8 && segunda <= 14) {
        result.cor = "vermelho-e-branco";
      } else {
        result.cor = "sem-padrao";
      }
    }
  }

  getCorTexto(result: Result): string {
    if (result.cor === "preto-e-branco") {
      return "Preto e branco";      
    } else if (result.cor === "vermelho-e-branco") {
      return "Vermelho e branco";
    } else {
      return "Não há padrão para jogar";
    }
  }

  getResultColor(result: Result): string {
    if (result.cor === "preto-e-branco") {
      return "preto";
    } else if (result.cor === "vermelho-e-branco") {
      return "vermelho";
    } else {
      return "";
    }
  }

}

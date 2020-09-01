import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TictactoeService {

  private readonly TAM_TABULEIRO: number = 3;
  private readonly VAZIO: number = 0;
  private readonly CRUZ: number = 1;
  private readonly CIRCULO: number = 2;

  private tabuleiro: any;
  private numMovimentos: any;
  private vitoria: any;

  private _jogador: number;
  private _showInicio: boolean;
  private _showTabuleiro: boolean;
  private _showFim: boolean;

  constructor() { }

  iniciar(): void {

    this._showInicio = true;
    this._showTabuleiro = false;
    this._showFim = false;
    this.numMovimentos = 0;
    this._jogador = this.CRUZ;
    this.vitoria = false;
    this.montarTabuleiro();

  }

  montarTabuleiro(): void {

    this.tabuleiro = [this.TAM_TABULEIRO];

    for (let i; i < this.TAM_TABULEIRO; i++) {
      this.tabuleiro[i] = [this.VAZIO, this.VAZIO, this.VAZIO];
    }

  }

  iniciarJogo() {

    this._showInicio = false;
    this._showTabuleiro = true;

  }

  lancarJogada(posX: number, posY: number): void {

    if (this.tabuleiro[posX][posY] !== this.VAZIO || this.vitoria) {
      return;
    }

    this.tabuleiro[posX][posY] = this._jogador;
    this.numMovimentos++;
    this.vitoria = this.fimJogo(posX, posY, this.tabuleiro, this._jogador);
    this._jogador = (this._jogador === this.CRUZ) ? this.CIRCULO : this.CRUZ;

    if (!this.vitoria && this.numMovimentos < 9) {
      this.cpuJogada();
    }

    if (this.vitoria) {
      this._showFim = true;
    }

    // Empate
    if (!this.vitoria && this.numMovimentos === 9) {
      this._jogador = 0;
      this._showFim = true;
    }
  }

  cpuJogada() {

    let jogada: number[] = this.obterJogada(this.CIRCULO);

    if (jogada.length <= 0) {      
      // tenta evitar a derrota
      jogada = this.obterJogada(this.CRUZ);
    }

    if (jogada.length <= 0) {

      // joga aleatório
      let jogadas: any = [];

      for (let i=0; i<this.TAM_TABULEIRO; i++) {

        for (let j=0; j<this.TAM_TABULEIRO; j++) {

          if (this.tabuleiro[i][j] === this.VAZIO) {
            jogadas.push([i, j]);
          }

        }
      }

      let k = Math.floor((Math.random() * (jogadas.length - 1)));
      jogada = [jogadas[k][0], jogadas[k][1]];

    }

    this.tabuleiro[jogada[0]][jogada[1]] = this._jogador;
    this.numMovimentos++;
    this.vitoria = this.fimJogo(jogada[0], jogada[1], this.tabuleiro, this._jogador);
    this._jogador = (this._jogador === this.CRUZ) ? this.CIRCULO : this.CIRCULO;    
    
  }

  obterJogada(jogador: number): number[] {

    let tab = this.tabuleiro;

    for (let lin = 0; lin < this.TAM_TABULEIRO; lin++) {

      for (let col = 0; col < this.TAM_TABULEIRO; col++) {

        if (tab[lin][col] !== this.VAZIO) {
          continue;
        }

        tab[lin][col] = jogador;

        if (this.fimJogo(lin, col, tab, jogador)) {
          return [lin, col];
        }

        tab[lin][col] = this.VAZIO;

      }
    }

    return [];

  }   

  fimJogo(linha: number, coluna: number, tabuleiro: any, jogador: number) {

    let fim: any = false;

    //linhas 
    if (tabuleiro[linha][0] === jogador &&
      tabuleiro[linha][1] === jogador &&
      tabuleiro[linha][2] === jogador) {

      fim = [[linha, 0], [linha, 1], [linha, 2]];
    }

    //colunas
    if (tabuleiro[0][coluna] === jogador &&
      tabuleiro[1][coluna] === jogador &&
      tabuleiro[2][coluna] === jogador) {

      fim = [[coluna, 0], [coluna, 1], [coluna, 2]];
    }

    //diagonais
    if (tabuleiro[0][0] === jogador &&
      tabuleiro[1][1] === jogador &&
      tabuleiro[2][2] === jogador) {

      fim = [[0, 0], [1, 1], [2, 2]];
    }   

    if (tabuleiro[0][2] === jogador &&
      tabuleiro[1][1] === jogador &&
      tabuleiro[2][0] === jogador) {

      fim = [[2, 0], [1, 1], [0, 2]];
    }    

    return fim;

  }

  exibirVitoria(posX: number, posY: number): boolean {
    let exibirVitoria: boolean = false;

    if (!this.vitoria) {
      return exibirVitoria;
    }

    for (let pos of this.vitoria) {
      if (pos[0] === posX && pos[1] === posY) {
        exibirVitoria = true;
        break;
      }
    }

    return exibirVitoria;

  }  

  novoJogo(): void {

    this.iniciar();
    this._showFim = false;
    this._showInicio = false;
    this._showTabuleiro = true;

  }  

  exibirX(posX: number, posY: number): boolean {
    return this.tabuleiro[posX][posY] === this.CRUZ;
  }

  exibirO(posX: number, posY: number): boolean {
    return this.tabuleiro[posX][posY] === this.CIRCULO;
  }  

  get showInicio(): boolean {
    return this._showInicio;
  }

  get showTabuleiro(): boolean {
    return this._showTabuleiro;
  }

  get showFim(): boolean {
    return this._showFim;
  }

  get jogador(): number {
    return this._jogador;
  }

}

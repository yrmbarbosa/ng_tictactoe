import { Component, OnInit } from '@angular/core';
import { TictactoeService } from './shared';


@Component({
  selector: 'app-tictactoe',
  templateUrl: './tictactoe.component.html',
  styleUrls: ['./tictactoe.component.css']
})
export class TictactoeComponent implements OnInit {

  constructor(private TicTacToeService: TictactoeService) { }

  ngOnInit(): void {    
    this.TicTacToeService.iniciar();
  }

  iniciarJogo(): void {
    this.TicTacToeService.iniciarJogo();
  }

  lancarJogada(posX: number, posY: number): void {   
    this.TicTacToeService.lancarJogada(posX, posY);
  }

  novoJogo() {
    this.TicTacToeService.novoJogo();
  }

  exibirCruz(posX: number, posY: number): boolean {
    return this.TicTacToeService.exibirCruz(posX, posY);
  }

  exibirCirculo(posX: number, posY: number): boolean {
    return this.TicTacToeService.exibirCirculo(posX, posY);
  }

  exibirVitoria(posX: number, posY: number): boolean {
    return this.TicTacToeService.exibirVitoria(posX, posY);
  }
  
  get showInicio(): boolean {
    return this.TicTacToeService.showInicio;
  }

  get showTabuleiro(): boolean {
    return this.TicTacToeService.showTabuleiro;
  }
  
  get showFim(): boolean {
    return this.TicTacToeService.showFim;
  }

  get jogador(): number {
    return this.TicTacToeService.jogador;
  }

}

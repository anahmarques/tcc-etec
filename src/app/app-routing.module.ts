import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'receitas', loadChildren: './receitas/receitas.module#ReceitasPageModule' },
  { path: 'saude', loadChildren: './saude/saude.module#SaudePageModule' },
  { path: 'entretenimento', loadChildren: './entretenimento/entretenimento.module#EntretenimentoPageModule' },
  { path: 'tecnologia', loadChildren: './tecnologia/tecnologia.module#TecnologiaPageModule' },  { path: 'limpeza', loadChildren: './limpeza/limpeza.module#LimpezaPageModule' },
  { path: 'jogos', loadChildren: './jogos/jogos.module#JogosPageModule' },
  { path: 'noticias', loadChildren: './noticias/noticias.module#NoticiasPageModule' },
  { path: 'musica', loadChildren: './musica/musica.module#MusicaPageModule' },
  { path: 'jogosmobile', loadChildren: './jogosmobile/jogosmobile.module#JogosmobilePageModule' },
  { path: 'receitasrapidas', loadChildren: './receitasrapidas/receitasrapidas.module#ReceitasrapidasPageModule' },
  { path: 'receitassaudaveis', loadChildren: './receitassaudaveis/receitassaudaveis.module#ReceitassaudaveisPageModule' },
  { path: 'primeirossocorros', loadChildren: './primeirossocorros/primeirossocorros.module#PrimeirossocorrosPageModule' },
  { path: 'habitos', loadChildren: './habitos/habitos.module#HabitosPageModule' },
  { path: 'sexo', loadChildren: './sexo/sexo.module#SexoPageModule' },
  { path: 'danca', loadChildren: './danca/danca.module#DancaPageModule' },
  { path: 'atividadefisica', loadChildren: './atividadefisica/atividadefisica.module#AtividadefisicaPageModule' },
  { path: 'corrida', loadChildren: './corrida/corrida.module#CorridaPageModule' },
  { path: 'doces', loadChildren: './doces/doces.module#DocesPageModule' },
  { path: 'reparos', loadChildren: './reparos/reparos.module#ReparosPageModule' },
  { path: 'manutencao', loadChildren: './manutencao/manutencao.module#ManutencaoPageModule' },
  { path: 'cozinha', loadChildren: './cozinha/cozinha.module#CozinhaPageModule' },
  { path: 'banheiro', loadChildren: './banheiro/banheiro.module#BanheiroPageModule' },
  { path: 'lavanderia', loadChildren: './lavanderia/lavanderia.module#LavanderiaPageModule' },
  { path: 'cdomesticos', loadChildren: './cdomesticos/cdomesticos.module#CdomesticosPageModule' },
  { path: 'domesticos', loadChildren: './domesticos/domesticos.module#DomesticosPageModule' },
  { path: 'carros', loadChildren: './carros/carros.module#CarrosPageModule' },
<<<<<<< HEAD
  { path: 'moto', loadChildren: './moto/moto.module#MotoPageModule' },
  { path: 'jogostabuleiro', loadChildren: './jogostabuleiro/jogostabuleiro.module#JogostabuleiroPageModule' },
  { path: 'jogoscartas', loadChildren: './jogoscartas/jogoscartas.module#JogoscartasPageModule' },
  { path: 'jogospc', loadChildren: './jogospc/jogospc.module#JogospcPageModule' },
  { path: 'magica', loadChildren: './magica/magica.module#MagicaPageModule' },
  { path: 'sertanejo', loadChildren: './sertanejo/sertanejo.module#SertanejoPageModule' },
  { path: 'pagode', loadChildren: './pagode/pagode.module#PagodePageModule' },
=======
>>>>>>> e02f3ef0667f623ec7f1bbe11efbee0de92704e9

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

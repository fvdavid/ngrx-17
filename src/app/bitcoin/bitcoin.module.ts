import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BitcoinRoutingModule } from './bitcoin-routing.module';
import { BitcoinComponent } from './bitcoin/bitcoin.component';


@NgModule({
  declarations: [
    BitcoinComponent
  ],
  imports: [
    CommonModule,
    BitcoinRoutingModule
  ]
})
export class BitcoinModule { }

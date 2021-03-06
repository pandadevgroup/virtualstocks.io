import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";

import * as fromContainers from "./containers";

import { PortfolioGuard } from "@app/stocks";

import { SharedModule as StocksSharedModule } from "@app/stocks";

const routes: Routes = [
	{
		path: "",
		pathMatch: "full",
		canActivate: [PortfolioGuard],
		component: fromContainers.HomeComponent
	}
];

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forChild(routes),

		StocksSharedModule
	],
	declarations: [
		...fromContainers.containers
	]
})
export class HomeModule {}
